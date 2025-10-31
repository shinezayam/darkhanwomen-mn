import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // Convert File to base64 string
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = buffer.toString('base64');
    const dataUri = `data:${file.type};base64,${base64}`;

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(dataUri, {
      folder: 'darkhanwomen/partners',
      allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'webp'],
      max_file_size: 5242880, // 5MB
      transformation: [
        { width: 800, height: 800, crop: 'limit' },
        { quality: 'auto' },
      ],
    });

    return NextResponse.json(
      {
        success: true,
        url: result.secure_url,
        public_id: result.public_id,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Upload error:', error);
    return NextResponse.json(
      {
        error: 'Failed to upload file',
        details: error.message || 'Unknown error',
      },
      { status: 500 }
    );
  }
}

