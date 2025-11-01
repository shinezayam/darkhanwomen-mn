import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/models/Contact';
import { isValidEmail, sanitizeFormData, validateRequired } from '@/lib/validation';

export async function POST(request: NextRequest) {
  try {
    // Connect to database
    await connectDB();

    // Parse request body
    const body = await request.json();
    
    // Sanitize input
    const data = sanitizeFormData(body);

    // Validate required fields
    const requiredFields = ['name', 'email', 'subject', 'message'];
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

    // Create contact submission
    const contact = new Contact(data);
    await contact.save();

    return NextResponse.json(
      {
        success: true,
        message: 'Contact form submitted successfully',
        id: contact._id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        error: 'Failed to submit contact form',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

