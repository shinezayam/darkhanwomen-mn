import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Partner from '@/models/Partner';
import { isValidPhone, sanitizeFormData, validateRequired, isValidNumber } from '@/lib/validation';

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
      'organizationName',
      'activityDirection',
      'managementName',
      'womenCouncilChairman',
      'position',
      'yearsWorked',
      'womenCouncilGoal',
      'womenCouncilMembers',
      'phone',
      'address',
    ];
    const validationError = validateRequired(data, requiredFields);
    if (validationError) {
      return NextResponse.json(
        { error: validationError },
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

    // Validate yearsWorked
    if (!isValidNumber(data.yearsWorked, 0)) {
      return NextResponse.json(
        { error: 'Invalid years worked value' },
        { status: 400 }
      );
    }

    // Validate optional numeric fields
    const optionalNumericFields = [
      'totalEmployees',
      'totalFemale',
      'totalMale',
      'managementFemale',
      'managementMale',
      'householdHeadsFemale',
      'householdHeadsMale',
      'disabledFemale',
      'disabledMale',
    ];

    for (const field of optionalNumericFields) {
      if (data[field] !== undefined && data[field] !== '' && !isValidNumber(data[field], 0)) {
        return NextResponse.json(
          { error: `Invalid value for ${field}` },
          { status: 400 }
        );
      }
    }

    // Create partner application
    const partner = new Partner(data);
    await partner.save();

    return NextResponse.json(
      {
        success: true,
        message: 'Partner application submitted successfully',
        id: partner._id,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Partner form error:', error);
    return NextResponse.json(
      {
        error: 'Failed to submit partner application',
        details: error.message || 'Unknown error',
      },
      { status: 500 }
    );
  }
}

