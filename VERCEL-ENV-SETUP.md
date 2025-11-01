# Visual Guide: Setting Up Environment Variables in Vercel

## Step-by-Step Screenshot Instructions

### Step 1: Navigate to Your Project
1. Go to https://vercel.com/dashboard
2. Click on your project name

### Step 2: Open Settings
1. Click **"Settings"** in the left sidebar

### Step 3: Find Environment Variables
1. Click **"Environment Variables"** under the "Configuration" section
2. You'll see a list of existing variables (probably empty)

### Step 4: Add MONGODB_URI
Click **"Add New"** button and enter:

- **Name**: `MONGODB_URI`
- **Value**: `mongodb+srv://tuskey054_db_user:7cN5rMGa5vbBTmI1@cluster0.z5mppuc.mongodb.net/darkhanwomen?retryWrites=true&w=majority`
- **Environment**: Check **ALL** boxes:
  - ☑ Production
  - ☑ Preview  
  - ☑ Development

Click **"Add"**

### Step 5: Add CLOUDINARY Variables

Repeat Step 4 for each Cloudinary variable:

1. **Name**: `CLOUDINARY_CLOUD_NAME`  
   **Value**: (your cloud name from Cloudinary)

2. **Name**: `CLOUDINARY_API_KEY`  
   **Value**: (your API key from Cloudinary)

3. **Name**: `CLOUDINARY_API_SECRET`  
   **Value**: (your API secret from Cloudinary)

Each time:
- Check **ALL environment boxes**
- Click **"Add"**

### Step 6: Verify All Variables Added

You should see:
```
MONGODB_URI          [Production] [Preview] [Development]
CLOUDINARY_CLOUD_NAME   [Production] [Preview] [Development]
CLOUDINARY_API_KEY      [Production] [Preview] [Development]
CLOUDINARY_API_SECRET   [Production] [Preview] [Development]
```

### Step 7: Redeploy (IMPORTANT!)

1. Click **"Deployments"** tab (top navigation)
2. Find your latest deployment
3. Click **"..."** (three dots menu)
4. Click **"Redeploy"**
5. Confirm **"Redeploy"**
6. Wait for deployment to complete (~2-3 minutes)

### Step 8: Test Connection

1. Open new tab
2. Visit: `https://your-site.vercel.app/api/test-db`
3. Should see: `{"success":true,"connected":true,"contactCount":0}`
4. If you see error, check Vercel function logs

### Step 9: Test Form

1. Visit: `https://your-site.vercel.app/mn/contact`
2. Fill out and submit form
3. Should see success message
4. Check MongoDB Atlas - data should appear!

## Troubleshooting

### "test-db returns error"
**Cause**: Environment variables not working  
**Fix**: Go back to Step 7 and redeploy

### "Forms still don't work"
**Cause**: Not redeployed after adding variables  
**Fix**: You MUST redeploy (Step 7)

### "MongoDB connection error"
**Cause**: IP not whitelisted  
**Fix**: MongoDB Atlas → Network Access → Add 0.0.0.0/0

## Verification Checklist

Before testing forms:
- [ ] All 4 environment variables added in Vercel
- [ ] All checked for Production, Preview, Development
- [ ] Project redeployed after adding variables
- [ ] `api/test-db` returns success
- [ ] MongoDB Atlas IP whitelist configured

## You're Done! ✅

Once environment variables are set and you've redeployed, all forms should work perfectly!

---

**Key Point**: You created `.env.local` locally, but Vercel needs you to manually add these same variables in their dashboard!

