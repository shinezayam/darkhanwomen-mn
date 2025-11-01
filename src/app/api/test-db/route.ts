import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function GET() {
  try {
    // Check if environment variables are set
    const hasMongoURI = !!process.env.MONGODB_URI;
    
    if (!hasMongoURI) {
      return NextResponse.json({ 
        success: false, 
        error: 'MONGODB_URI environment variable not set' 
      }, { status: 500 });
    }

    // Try to connect to MongoDB
    await connectDB();
    
    // Try to query the database
    const count = await Contact.countDocuments();
    
    return NextResponse.json({ 
      success: true, 
      connected: true, 
      contactCount: count,
      hasMongoURI: true
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      connected: false, 
      error: error instanceof Error ? error.message : 'Unknown error',
      hasMongoURI: !!process.env.MONGODB_URI
    }, { status: 500 });
  }
}

