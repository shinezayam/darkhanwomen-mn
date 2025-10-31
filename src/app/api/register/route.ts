import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Registration from '@/models/Registration';
import { isValidEmail, isValidPhone, sanitizeFormData, validateRequired } from '@/lib/validation';

export async function POST(request: NextRequest) {
  try {
    // Connect to database
    await connectDB();

    // Parse request body
    const body = await request.json();
    
    // Sanitize input
    const data = sanitizeFormData(body);

    // Validate required fields
    const requiredFields = [
      'firstName',
      'lastName',
      'email',
      'phone',
      'dateOfBirth',
      'address',
      'city',
      'program',
      'motivation',
      'emergencyContact',
      'emergencyPhone',
      'agreeToTerms',
      'agreeToPrivacy',
    ];
    const validationError = validateRequired(data, requiredFields);
    if (validationError) {
      return NextResponse.json(
        { error: validationError },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Validate phone format
    if (!isValidPhone(data.phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      );
    }

    // Validate emergency phone format
    if (!isValidPhone(data.emergencyPhone)) {
      return NextResponse.json(
        { error: 'Invalid emergency phone number' },
        { status: 400 }
      );
    }

    // Validate terms agreement
    if (!data.agreeToTerms || !data.agreeToPrivacy) {
      return NextResponse.json(
        { error: 'You must agree to the terms and privacy policy' },
        { status: 400 }
      );
    }

    // Create registration
    const registration = new Registration(data);
    await registration.save();

    return NextResponse.json(
      {
        success: true,
        message: 'Registration submitted successfully',
        id: registration._id,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Registration form error:', error);
    return NextResponse.json(
      {
        error: 'Failed to submit registration',
        details: error.message || 'Unknown error',
      },
      { status: 500 }
    );
  }
}

