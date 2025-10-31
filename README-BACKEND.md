# Backend Implementation Guide

This document describes the backend implementation for form submissions in the Darkhan Women Federation website.

## Overview

The backend uses:
- **Database**: MongoDB with Mongoose ODM
- **API Routes**: Next.js App Router API routes
- **File Storage**: Cloudinary for image uploads
- **Validation**: Custom validation utilities

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
# MongoDB Configuration
# For local development: mongodb://localhost:27017/darkhanwomen
# For MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/darkhanwomen
MONGODB_URI=mongodb://localhost:27017/darkhanwomen

# Cloudinary Configuration
# Get these from: https://console.cloudinary.com/
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 2. MongoDB Setup

#### Option A: Local MongoDB
```bash
# Install MongoDB locally, then:
# MongoDB will run on default port 27017
```

#### Option B: MongoDB Atlas (Cloud)
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Create a database user
4. Get connection string
5. Add connection string to `.env.local`

### 3. Cloudinary Setup

1. Sign up at https://cloudinary.com/
2. Get your credentials from the dashboard
3. Add them to `.env.local`

## API Endpoints

### POST /api/contact
Contact form submission

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required)",
  "subject": "string (required)",
  "message": "string (required)"
}
```

### POST /api/donate
Donation form submission

**Request Body:**
```json
{
  "amount": "number (required)",
  "donationType": "one-time | monthly (required)",
  "paymentMethod": "card | online (required)",
  "dedicationType": "honor | memory (optional)",
  "dedicationName": "string (optional)"
}
```

### POST /api/register
Program registration submission

**Request Body:**
```json
{
  "firstName": "string (required)",
  "lastName": "string (required)",
  "email": "string (required)",
  "phone": "string (required)",
  "dateOfBirth": "string (required)",
  "address": "string (required)",
  "city": "string (required)",
  "program": "string (required)",
  "experience": "string (optional)",
  "motivation": "string (required)",
  "emergencyContact": "string (required)",
  "emergencyPhone": "string (required)",
  "agreeToTerms": "boolean (required)",
  "agreeToPrivacy": "boolean (required)"
}
```

### POST /api/volunteer
Volunteer application submission

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required)",
  "phone": "string (required)",
  "address": "string (optional)",
  "volunteerType": "training-support | event-management | communication-outreach (required)",
  "availability": "weekdays | weekends | flexible (optional)",
  "experience": "string (optional)",
  "motivation": "string (optional)"
}
```

### POST /api/partner
Partner organization application submission

**Request Body:**
```json
{
  "organizationName": "string (required)",
  "logoUrl": "string (optional, from upload endpoint)",
  "activityDirection": "string (required)",
  "managementName": "string (required)",
  "womenCouncilChairman": "string (required)",
  "position": "string (required)",
  "yearsWorked": "number (required)",
  "womenCouncilGoal": "string (required)",
  "womenCouncilMembers": "string (required)",
  "phone": "string (required)",
  "address": "string (required)",
  "totalEmployees": "number (optional)",
  "totalFemale": "number (optional)",
  "totalMale": "number (optional)",
  "managementFemale": "number (optional)",
  "managementMale": "number (optional)",
  "householdHeadsFemale": "number (optional)",
  "householdHeadsMale": "number (optional)",
  "disabledFemale": "number (optional)",
  "disabledMale": "number (optional)",
  "collaborationProposal": "string (optional)",
  "supportProposal": "string (optional)"
}
```

### POST /api/upload
File upload endpoint (for partner logos)

**Request Body:**
- FormData with `file` field

**Response:**
```json
{
  "success": true,
  "url": "https://res.cloudinary.com/...",
  "public_id": "..."
}
```

## Database Schemas

### Contact
- name (String)
- email (String)
- subject (String)
- message (String)
- createdAt (Date)
- updatedAt (Date)

### Donation
- amount (Number)
- donationType (String: 'one-time' | 'monthly')
- paymentMethod (String: 'card' | 'online')
- dedicationType (String, optional)
- dedicationName (String, optional)
- createdAt (Date)
- updatedAt (Date)

### Registration
- firstName, lastName, email, phone (Strings)
- dateOfBirth (String)
- address, city, program (Strings)
- experience (String, optional)
- motivation (String)
- emergencyContact, emergencyPhone (Strings)
- agreeToTerms, agreeToPrivacy (Booleans)
- createdAt (Date)
- updatedAt (Date)

### Volunteer
- name, email, phone (Strings)
- address (String, optional)
- volunteerType (String)
- availability (String, optional)
- experience (String, optional)
- motivation (String, optional)
- createdAt (Date)
- updatedAt (Date)

### Partner
- organizationName, activityDirection, managementName (Strings)
- womenCouncilChairman, position, womenCouncilGoal (Strings)
- womenCouncilMembers, phone, address (Strings)
- yearsWorked (Number)
- logoUrl (String, optional)
- Various optional numeric fields for statistics
- collaborationProposal, supportProposal (Strings, optional)
- createdAt (Date)
- updatedAt (Date)

## Validation

All forms include:
- Required field validation
- Email format validation
- Phone number format validation (Mongolian format)
- Input sanitization to prevent XSS
- File type and size validation for uploads

## Testing

To test the forms:

1. Start the development server: `npm run dev`
2. Navigate to each form page:
   - Contact: `/contact` or `/en/contact`
   - Donation: `/donate` or `/en/donate`
   - Registration: `/register` or `/en/register`
   - Volunteer: `/volunteer/apply` or `/en/volunteer/apply`
   - Partner: `/partner/apply` or `/en/partner/apply`

3. Fill out and submit forms
4. Check MongoDB database for saved entries

## Production Deployment

When deploying to production:

1. Set environment variables in your hosting platform
2. Ensure MongoDB database is accessible
3. Configure Cloudinary for production use
4. Test all form submissions after deployment

## Troubleshooting

### MongoDB Connection Issues
- Verify MONGODB_URI is correct
- Check if MongoDB is running (for local setup)
- Verify network access (for Atlas)

### Cloudinary Upload Issues
- Verify Cloudinary credentials
- Check file size limits (max 5MB)
- Verify allowed file types

### Form Submission Errors
- Check browser console for error messages
- Verify API routes are accessible
- Check MongoDB connection

## File Structure

```
src/
├── app/
│   └── api/
│       ├── contact/
│       │   └── route.ts         # Contact form endpoint
│       ├── donate/
│       │   └── route.ts         # Donation form endpoint
│       ├── register/
│       │   └── route.ts         # Registration endpoint
│       ├── volunteer/
│       │   └── route.ts         # Volunteer application endpoint
│       ├── partner/
│       │   └── route.ts         # Partner application endpoint
│       └── upload/
│           └── route.ts         # File upload endpoint
├── lib/
│   ├── mongodb.ts               # MongoDB connection utility
│   └── validation.ts            # Validation utilities
└── models/
    ├── Contact.ts               # Contact model
    ├── Donation.ts              # Donation model
    ├── Registration.ts          # Registration model
    ├── Volunteer.ts             # Volunteer model
    └── Partner.ts               # Partner model
```

## Next Steps

Consider adding:
- Email notifications on form submissions
- Rate limiting to prevent spam
- CAPTCHA verification
- Admin dashboard to view submissions
- Export functionality for data analysis
- Automated follow-up emails

