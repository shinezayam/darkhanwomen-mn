# Deployment Checklist

## Pre-Deployment

- [x] Build succeeds locally (`npm run build`)
- [x] All dependencies installed
- [x] No blocking linter errors
- [x] Forms tested locally

## Vercel Configuration

### Environment Variables (CRITICAL!)

Go to Vercel Dashboard → Your Project → Settings → Environment Variables

Add these for **ALL environments** (Production, Preview, Development):

```
MONGODB_URI=mongodb+srv://tuskey054_db_user:7cN5rMGa5vbBTmI1@cluster0.z5mppuc.mongodb.net/darkhanwomen?retryWrites=true&w=majority
```

**OR your own connection string if different**

```
CLOUDINARY_CLOUD_NAME=your_actual_cloud_name
CLOUDINARY_API_KEY=your_actual_api_key
CLOUDINARY_API_SECRET=your_actual_api_secret
```

**IMPORTANT**: After adding environment variables, you MUST redeploy!

### MongoDB Atlas Configuration

1. [ ] Create MongoDB Atlas account
2. [ ] Create M0 FREE cluster
3. [ ] Set up database user
4. [ ] **Whitelist IP addresses**: 
   - Add `0.0.0.0/0` (allow all) for testing
   - Or add specific Vercel IPs
5. [ ] Get connection string
6. [ ] Add connection string to Vercel environment variables

### Cloudinary Configuration

1. [ ] Create Cloudinary account
2. [ ] Get credentials from dashboard
3. [ ] Add credentials to Vercel environment variables

## Post-Deployment Testing

### 1. Test Database Connection

Visit: `https://your-site.vercel.app/api/test-db`

**Expected Response**:
```json
{
  "success": true,
  "connected": true,
  "contactCount": 0
}
```

**If Error**: Environment variables not set correctly

### 2. Test Each Form

Test in production:
- [ ] Contact form: Submit and verify success message
- [ ] Donation form: Submit and check redirect
- [ ] Registration form: Submit and verify success message
- [ ] Volunteer form: Submit and verify success message
- [ ] Partner form: Submit with logo upload and verify success

### 3. Verify Data in MongoDB

1. Go to MongoDB Atlas
2. Click **Browse Collections**
3. Verify collections exist:
   - `contacts`
   - `donations`
   - `registrations`
   - `volunteers`
   - `partners`
4. Check that submitted data appears

## Common Deployment Issues

| Symptom | Cause | Solution |
|---------|-------|----------|
| Build succeeds, forms don't work | Environment variables not set | Add to Vercel settings |
| 500 Internal Server Error | MongoDB connection failed | Check Atlas IP whitelist |
| Forms hang/submit forever | API timeout | Check Vercel function logs |
| No error messages | Silent failure | Check browser console |
| "Please define MONGODB_URI" | Environment variable missing | Add to Vercel settings |
| MongoDB connection timeout | IP not whitelisted | Add IPs to Atlas |
| Authentication failed | Wrong credentials | Verify connection string |

## Verification Steps

1. [ ] Visit `https://your-site.vercel.app/api/test-db` - should return success
2. [ ] Submit contact form - should show success message
3. [ ] Check MongoDB Atlas - should see new entry in `contacts` collection
4. [ ] Submit donation form - should redirect to payment page
5. [ ] Check MongoDB Atlas - should see new entry in `donations` collection
6. [ ] Test all other forms
7. [ ] Upload partner logo - should work with Cloudinary
8. [ ] Check all data in MongoDB

## Rollback Plan

If deployment fails:

1. Go to Vercel → Deployments
2. Find last working deployment
3. Click **"..." → Promote to Production**
4. Debug issue locally
5. Fix and redeploy

## Support Resources

- Vercel Docs: https://vercel.com/docs
- MongoDB Atlas Docs: https://docs.atlas.mongodb.com/
- Cloudinary Docs: https://cloudinary.com/documentation
- Next.js Docs: https://nextjs.org/docs

## Success Criteria

✅ All forms submit successfully  
✅ Success/error messages display correctly  
✅ Data appears in MongoDB database  
✅ File uploads work with Cloudinary  
✅ No console errors in browser  
✅ Vercel function logs show no errors  
✅ Site loads quickly and renders correctly  

---

**Remember**: Most issues are caused by missing environment variables in Vercel!

