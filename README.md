# Centre for Advanced Survey and Research (CASER)

Welcome to the Centre for Advanced Survey and Research project. This repository contains the frontend application built with React, TypeScript, and Vite.

## Project Structure

```
caser_official/
├── frontend/                 # React + TypeScript + Vite frontend
│   ├── public/              # Static assets
│   ├── src/                 # Source code
│   │   ├── components/      # React components
│   │   ├── pages/           # Page components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── utils/           # Utility functions
│   │   ├── styles/          # CSS/SCSS styles
│   │   └── App.tsx          # Main application component
│   ├── package.json         # Dependencies and scripts
│   ├── tsconfig.json        # TypeScript configuration
│   ├── vite.config.ts       # Vite configuration
│   └── README.md            # Frontend-specific documentation
├── .github/
│   └── workflows/           # GitHub Actions workflows
├── .gitignore
├── README.md               # This file
└── DEPLOYMENT_WORKFLOWS.md # Deployment documentation
```

## Frontend Development

The frontend is built with:
- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion (for animations)
- Lucide React (for icons)

### Getting Started

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:5173`

### Building for Production

To build the application for production:

```bash
cd frontend
npm run build
```

The build will be available in the `frontend/dist/` directory.

## Deployment

This project includes a GitHub Actions workflow for automated deployment to GitHub Pages. See [GITHUB_PAGES_DEPLOYMENT.md](./GITHUB_PAGES_DEPLOYMENT.md) for detailed information about how to configure and use the deployment workflow.

The application will be automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

## Scripts

In the `frontend` directory, you can run:

- `npm run dev` - Starts the development server
- `npm run build` - Builds the application for production
- `npm run lint` - Runs ESLint to check for code issues
- `npm run preview` - Locally previews the production build

## Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router v7

## Icons and Assets

The application uses a custom logo (`caser_logo.png`) located in the public directory.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.