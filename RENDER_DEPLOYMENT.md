# Deploy Portfolio to Render

Your portfolio is now a static single-page app that can be easily deployed to Render.

## 🚀 Deployment Steps

### 1. Push to GitHub

Make sure your code is pushed to a GitHub repository:

```bash
git add .
git commit -m "Single-page portfolio with Docker"
git push origin main
```

### 2. Create Web Service on Render

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository
4. Configure:

   **Settings:**
   - **Name**: `portfolio` (or your preferred name)
   - **Region**: Choose closest to you
   - **Branch**: `main`
   - **Runtime**: `Docker`
   - **Instance Type**: `Free` (or paid for better performance)

   **Build Command**: *(Leave empty - Docker handles it)*
   
   **Start Command**: *(Leave empty - uses CMD from Dockerfile)*

### 3. Environment Variables (Optional)

Add these in Render dashboard under "Environment":

```
APP_ENV=production
APP_DEBUG=false
APP_KEY=base64:YOUR_KEY_HERE
```

> **Note:** The Dockerfile auto-generates APP_KEY if not provided.

### 4. Deploy

Click **"Create Web Service"**

Render will:
- ✅ Pull your code
- ✅ Build Node.js assets (frontend)
- ✅ Build PHP/Laravel container
- ✅ Deploy on port 80
- ✅ Give you a URL like `https://portfolio-xxxx.onrender.com`

## 🔧 Post-Deployment

### Custom Domain (Optional)

1. Go to your service → **Settings** → **Custom Domain**
2. Add your domain and update DNS records

### Automatic Deploys

Render auto-deploys on every push to `main` branch.

### View Logs

Go to **Logs** tab in your service to debug any issues.

## 📦 What Gets Built

- **Stage 1**: Node.js builds your React/TypeScript assets
- **Stage 2**: PHP Apache serves your Laravel app with built assets
- **Result**: Single optimized container (~200MB)

## 💡 Tips

- **Free tier**: Spins down after 15 min of inactivity (cold starts)
- **Paid tier**: Always on, faster, custom domains included
- **No database needed**: Your portfolio is static content only

## 🐛 Troubleshooting

**Build fails?**
- Check Render build logs
- Ensure `pnpm-lock.yaml` is committed
- Verify all dependencies in `package.json`

**500 error?**
- Check environment variables
- Ensure `.env.example` has valid defaults
- Check application logs in Render dashboard

**Assets not loading?**
- Verify `public/build/` contains compiled assets
- Check Apache config serves from `/public`

---

🎉 **That's it!** Your portfolio will be live at your Render URL.
