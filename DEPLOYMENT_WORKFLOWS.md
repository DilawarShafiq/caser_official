# GitHub Actions Deployment Workflows

This project includes several GitHub Actions workflows for deploying the frontend application to different platforms.

## Available Workflows

### 1. GitHub Pages Deployment (`deploy.yml`)

Deploys the application to GitHub Pages automatically when changes are pushed to the `main` branch.

#### Setup:
1. Enable GitHub Pages in your repository settings
2. Select `gh-pages` as the source branch

#### Secrets Required:
- No additional secrets required (uses `GITHUB_TOKEN` automatically)

### 2. Enhanced GitHub Pages Deployment (`deploy-frontend.yml`)

An improved version with better error handling and artifact management.

#### Setup:
1. Same as above

### 3. Vercel Deployment (`vercel-deploy.yml`)

Deploys to Vercel with automatic domain setup.

#### Setup:
1. Create a Vercel account and link it to your GitHub account
2. Import your project to Vercel
3. Get your Vercel tokens from the dashboard

#### Secrets Required:
- `VERCEL_TOKEN`: Your Vercel access token
- `VERCEL_ORG_ID`: Your Vercel organization ID
- `VERCEL_PROJECT_ID`: Your Vercel project ID

### 4. Netlify Deployment (`netlify-deploy.yml`)

Deploys to Netlify with PR previews and branch deploys.

#### Setup:
1. Create a Netlify account and link it to your GitHub account
2. Add your site to Netlify
3. Get your tokens from the Netlify dashboard

#### Secrets Required:
- `NETLIFY_AUTH_TOKEN`: Your Netlify access token
- `NETLIFY_SITE_ID`: Your Netlify site ID

## How to Configure Secrets

1. Go to your repository settings on GitHub
2. Navigate to "Secrets and variables" → "Actions"
3. Click "New repository secret"
4. Add the required secrets as specified above

## Running the Workflows

The workflows are triggered automatically on:
- Push to the `main` branch
- Pull requests to the `main` branch (for validation)

## Customization

You can customize these workflows based on your specific needs:
- Change the trigger conditions
- Modify the Node.js version
- Add additional steps for testing or validation
- Adjust the environment variables as needed