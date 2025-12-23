# Deployment Guide

## GitHub Pages Deployment

This project uses **GitHub Actions** to automatically deploy the frontend to GitHub Pages.

### Configuration
- **Workflow File**: `.github/workflows/deploy.yml`
- **Source**: `frontend/` directory
- **Build Output**: `frontend/dist/`
- **Target Branch**: `gh-pages`

### Triggers
The deployment runs automatically when:
1. You push to the `main` branch.
2. You manually trigger it from the "Actions" tab in GitHub.

### Setup Instructions
1. Go to your repository **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, select **Deploy from a branch**.
3. Select `gh-pages` as the branch and `/ (root)` as the folder.
4. Click **Save**.

### Troubleshooting
- **404 on Refresh**: The workflow automatically creates a `404.html` (copy of `index.html`) to handle client-side routing.
- **Assets Not Loading**: The `vite.config.ts` uses the `GITHUB_PAGES` environment variable to set the correct base path (`/caser_official/`).
