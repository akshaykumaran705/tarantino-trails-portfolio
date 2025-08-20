# Akshay Kumaran Venkatesan - Portfolio

## Project info

**Portfolio**: Personal portfolio showcasing data analysis, software engineering projects, and professional experience.

## How can I edit this code?

There are several ways of editing your application.

**Use your preferred IDE**

Clone this repository and start developing with your favorite code editor.

**Use your preferred IDE**

Clone this repo and work locally with your own IDE. Push changes to keep your portfolio updated.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Option 1: Deploy to Render (Recommended for portfolios)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Deploy on Render**
   - Go to [render.com](https://render.com) and sign up/login
   - Click "New +" → "Static Site"
   - Connect your GitHub repository
   - Configure:
     - **Name**: `akshay-portfolio`
     - **Build Command**: `npm install && npm run build`
     - **Publish Directory**: `dist`
   - Click "Create Static Site"

3. **Your site will be available at**: `https://your-site-name.onrender.com`

### Option 2: Deploy to AWS S3 + CloudFront

1. **Build your project**: `npm run build`
2. **Upload to S3 bucket** (with static website hosting enabled)
3. **Set up CloudFront distribution** for CDN and HTTPS
4. **Configure custom domain** (optional)

### Option 3: Deploy to Vercel

1. **Connect your GitHub repo** to [vercel.com](https://vercel.com)
2. **Automatic deployment** on every push
3. **Custom domain support** included

## Can I connect a custom domain to my portfolio?

Yes, you can!

### Render
- Go to your site settings in Render
- Click on "Custom Domains"
- Add your domain and follow the DNS configuration

### Vercel
- Automatic custom domain support
- SSL certificates included
- Easy DNS management

### AWS
- Configure in Route 53
- Set up SSL certificates in ACM
- Point your domain to CloudFront distribution
