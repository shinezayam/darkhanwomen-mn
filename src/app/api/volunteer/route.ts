import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Volunteer from '@/models/Volunteer';
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
    const requiredFields = ['name', 'email', 'phone', 'volunteerType'];
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

    // Validate volunteerType
    if (!['training-support', 'event-management', 'communication-outreach'].includes(data.volunteerType)) {
      return NextResponse.json(
        { error: 'Invalid volunteer type' },
        { status: 400 }
      );
    }

    // Create volunteer application
    const volunteer = new Volunteer(data);
    await volunteer.save();

    return NextResponse.json(
      {
        success: true,
        message: 'Volunteer application submitted successfully',
        id: volunteer._id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Volunteer form error:', error);
    return NextResponse.json(
      {
        error: 'Failed to submit volunteer application',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

