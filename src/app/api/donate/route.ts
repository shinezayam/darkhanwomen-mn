import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Donation from '@/models/Donation';
import { validateRequired, isValidNumber } from '@/lib/validation';

export async function POST(request: NextRequest) {
  try {
    // Connect to database
    await connectDB();

    // Parse request body
    const body = await request.json();

    // Validate required fields
    const requiredFields = ['amount', 'donationType', 'paymentMethod'];
    const validationError = validateRequired(body, requiredFields);
    if (validationError) {
      return NextResponse.json(
        { error: validationError },
        { status: 400 }
      );
    }

    // Validate amount
    if (!isValidNumber(body.amount, 0)) {
      return NextResponse.json(
        { error: 'Invalid donation amount' },
        { status: 400 }
      );
    }

    // Validate donationType
    if (!['one-time', 'monthly'].includes(body.donationType)) {
      return NextResponse.json(
        { error: 'Invalid donation type' },
        { status: 400 }
      );
    }

    // Validate paymentMethod
    if (!['card', 'online'].includes(body.paymentMethod)) {
      return NextResponse.json(
        { error: 'Invalid payment method' },
        { status: 400 }
      );
    }

    // Create donation record (this stores the intent, not actual payment)
    const donation = new Donation(body);
    await donation.save();

    return NextResponse.json(
      {
        success: true,
        message: 'Donation form submitted successfully',
        id: donation._id,
        data: donation,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Donation form error:', error);
    return NextResponse.json(
      {
        error: 'Failed to submit donation form',
        details: error.message || 'Unknown error',
      },
      { status: 500 }
    );
  }
}

