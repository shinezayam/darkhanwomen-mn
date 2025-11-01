# Troubleshooting Form Submission Issues

## Issue: Forms Deploy Successfully But Data Not Saving

If your forms deploy to Vercel but submissions aren't saving to MongoDB, follow these steps:

### Step 1: Verify Environment Variables in Vercel

**CRITICAL**: Environment variables in Vercel dashboard are required!

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Verify these variables exist for **Production**, **Preview**, and **Development**:
   - `MONGODB_URI`
   - `CLOUDINARY_CLOUD_NAME`
   - `CLOUDINARY_API_KEY`
   - `CLOUDINARY_API_SECRET`

4. After adding/updating variables, **redeploy** your project

### Step 2: Check MongoDB Atlas IP Whitelist

1. Go to MongoDB Atlas → **Network Access**
2. Ensure Vercel IP addresses are whitelisted
3. **Recommended**: Add `0.0.0.0/0` for development, restrict later for production

### Step 3: Test Locally First

Test your forms locally with proper `.env.local`:

```bash
# Create .env.local with your credentials
# Run locally
npm run dev

# Test each form at:
# - http://localhost:3000/mn/contact
# - http://localhost:3000/mn/donate
# etc.
```

### Step 4: Check Vercel Function Logs

1. Go to Vercel dashboard → **Deployments**
2. Click on your latest deployment
3. Click **Functions** tab
4. Click on an API route function
5. Check logs for errors

Common errors to look for:
- `MongoDB connection timeout`
- `Authentication failed`
- `IP not whitelisted`
- `Environment variable not defined`

### Step 5: Verify Database Connection

Check if MongoDB is accessible:

```javascript
// Test connection in a Vercel function
console.log('MONGODB_URI:', process.env.MONGODB_URI ? 'SET' : 'NOT SET');
```

### Step 6: Common Issues & Solutions

#### Issue: "No error messages"
**Cause**: Frontend not receiving response
**Solution**: Check browser console network tab

#### Issue: "500 Internal Server Error"
**Cause**: MongoDB connection failing
**Solution**: Check Vercel logs, verify MONGODB_URI

#### Issue: "Connection timeout"
**Cause**: IP not whitelisted in Atlas
**Solution**: Add Vercel IPs to MongoDB Atlas whitelist

#### Issue: "Authentication failed"
**Cause**: Wrong credentials
**Solution**: Verify MongoDB username/password in connection string

#### Issue: "Forms submit but no data saved"
**Cause**: Silent failure in API route
**Solution**: Check Vercel function logs for errors

### Debugging Checklist

Run through this checklist:

- [ ] Environment variables set in Vercel (all environments)
- [ ] MongoDB Atlas IP whitelist includes Vercel
- [ ] Connection string includes database name (`/darkhanwomen`)
- [ ] Connection string encoded correctly (special characters in password)
- [ ] Project redeployed after adding environment variables
- [ ] MongoDB Atlas cluster is running
- [ ] Database user has correct permissions
- [ ] Browser console shows no errors
- [ ] Vercel function logs accessible
- [ ] Forms work locally with .env.local

### Quick Diagnostic Test

Create a simple test API route:

```typescript
// src/app/api/test-db/route.ts
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function GET() {
  try {
    await connectDB();
    const count = await Contact.countDocuments();
    return NextResponse.json({ 
      success: true, 
      connected: true, 
      contactCount: count 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      connected: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    });
  }
}
```

Then visit: `https://your-site.vercel.app/api/test-db`

This will tell you if:
- MongoDB connection works
- Environment variables are set
- Database is accessible

### Still Not Working?

If forms still don't work after checking all above:

1. Share Vercel function logs
2. Share browser console errors
3. Verify database connection string format
4. Test MongoDB connection directly from your machine
5. Check if forms work in production vs preview

---

**Most Common Issue**: Environment variables not set in Vercel dashboard!

