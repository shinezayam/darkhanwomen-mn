# Quick Fix: Forms Not Working on Vercel

## The Problem

Your forms deployed successfully but aren't saving data because **environment variables are missing in Vercel**.

## The Solution (5 Minutes)

### Step 1: Add Environment Variables to Vercel

1. Go to your Vercel project: https://vercel.com/dashboard
2. Click on your project
3. Click **"Settings"** tab (left sidebar)
4. Click **"Environment Variables"** (under Configuration)
5. Add these 4 variables:

**Variable 1:**
- Key: `MONGODB_URI`
- Value: `mongodb+srv://tuskey054_db_user:7cN5rMGa5vbBTmI1@cluster0.z5mppuc.mongodb.net/darkhanwomen?retryWrites=true&w=majority`
- Environment: **Select all** (Production, Preview, Development)
- Click **"Add"**

**Variable 2:**
- Key: `CLOUDINARY_CLOUD_NAME`
- Value: Your Cloudinary cloud name
- Environment: **Select all**
- Click **"Add"**

**Variable 3:**
- Key: `CLOUDINARY_API_KEY`
- Value: Your Cloudinary API key
- Environment: **Select all**
- Click **"Add"**

**Variable 4:**
- Key: `CLOUDINARY_API_SECRET`
- Value: Your Cloudinary API secret
- Environment: **Select all**
- Click **"Add"**

### Step 2: Redeploy Your Project

**CRITICAL**: After adding environment variables, you MUST redeploy!

1. Still in Vercel dashboard
2. Click **"Deployments"** tab (top)
3. Click **"..."** (three dots) on latest deployment
4. Click **"Redeploy"**
5. Or push a new commit to trigger redeploy

### Step 3: Wait for Deployment

Wait 2-3 minutes for redeployment to complete.

### Step 4: Test

1. Visit: `https://your-site.vercel.app/api/test-db`
2. Should see: `{"success":true,"connected":true,"contactCount":0}`
3. Submit a contact form
4. Check MongoDB Atlas to see if data saved

## If Still Not Working

### Check MongoDB Atlas IP Whitelist

1. Go to MongoDB Atlas → **Network Access**
2. Click **"Add IP Address"**
3. Select **"Allow Access from Anywhere"** (0.0.0.0/0)
4. Click **"Confirm"**

### Check Vercel Function Logs

1. Vercel Dashboard → **Deployments** → Latest deployment
2. Click **"Functions"** tab
3. Click on `/api/contact` or `/api/test-db`
4. Check logs for errors
5. Look for: "MongoDB connected successfully"

### Common Log Errors

| Error Message | Fix |
|---------------|-----|
| "Please define MONGODB_URI" | Environment variable not added or not redeployed |
| "Authentication failed" | Wrong MongoDB username/password |
| "Connection timeout" | IP not whitelisted in Atlas |
| "getaddrinfo ENOTFOUND" | Wrong connection string |

## Summary

**The Issue**: Environment variables from `.env.local` don't automatically go to Vercel  
**The Fix**: Add them manually in Vercel Settings → Environment Variables  
**Critical Step**: Redeploy after adding variables  

---

**That's it! After adding environment variables and redeploying, your forms should work! 🎉**

