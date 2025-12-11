# GitHub Pages Deployment Guide

This project includes a GitHub Actions workflow for deploying the frontend application to GitHub Pages.

## GitHub Pages Deployment (`deploy.yml`)

Deploys the application to GitHub Pages automatically when changes are pushed to the `main` branch.

### Setup:

1. **Enable GitHub Pages in your repository settings**:
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "Deploy from a branch"
   - Choose `gh-pages` as the branch and `/ (root)` as the folder
   - Click "Save"

2. **Configure the repository**:
   - Make sure you have admin access to the repository
   - The workflow will automatically create the `gh-pages` branch after the first successful deployment

### How it Works:

- On every push to the `main` branch, the workflow:
  1. Checks out your code
  2. Sets up Node.js environment
  3. Installs dependencies using `npm ci`
  4. Builds your React application with `npm run build`
  5. Creates a `404.html` file to enable proper client-side routing for single-page applications
  6. Publishes the built application to the `gh-pages` branch

### Client-Side Routing Support:

Since this application uses React Router for client-side navigation, the deployment workflow includes a special configuration to ensure routing works correctly on GitHub Pages:
- The workflow creates a `404.html` file that redirects to `index.html`, allowing client-side routing to work properly
- This allows deep links to work properly (e.g., `/caser_official/focus-areas` will load correctly)
- The Vite configuration uses the repository name as base path (`/caser_official/`) for compatibility with GitHub Pages subdirectory hosting

### Access Your Deployed Site:

Once deployed, your site will be available at:
`https://<username>.github.io/<repository-name>`

For example, if your username is `techuser` and repository is `caser_official`, your site will be at:
`https://techuser.github.io/caser_official/`

### Troubleshooting:

1. **Deployment fails**: Check the Actions tab in your repository for error logs
2. **Client routes don't work**: Ensure the 404.html file was generated properly during deployment
3. **Assets not loading**: Verify that the relative path configuration is working (the `base: './'` in vite.config.ts)
4. **Images/icons not showing**: Check that the paths in your components account for potential subdirectory deployment

Note: The workflow uses the `GITHUB_TOKEN` that's automatically available, so no additional secrets are required.