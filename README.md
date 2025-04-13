# Dox4Free

A 100% free online platform for unit conversions, document conversions, and calculators.

🌐 **Website**: [dox4free.com](https://dox4free.com)

## Overview

Dox4Free offers a comprehensive suite of free online tools for various conversions and calculations. The platform is designed to be user-friendly, efficient, and completely free to use without requiring sign-ups or subscriptions.

### Key Features

- **Unit Converters**: Convert between different units of measurement
- **Document Conversion Tools**: Transform, merge, and manipulate documents and images
- **Smart Calculators**: Various calculators for health, finance, science, and more
- **Engineering Specifications**: Access material properties and component references

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/dox4free.git
   cd dox4free
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
dox4free/
├── public/               # Static files
├── src/                  # Source code
│   ├── components/       # Reusable UI components
│   │   ├── layout/       # Layout components (header, footer, etc.)
│   │   ├── unit-converters/  # Unit converter components
│   │   ├── document-conversion/ # Document conversion tools
│   │   ├── calculators/  # Calculator components
│   │   └── engineering-specs/ # Engineering reference components
│   ├── pages/            # Page components
│   ├── App.tsx           # Main app component
│   └── index.tsx         # Application entry point
└── package.json          # Project dependencies and scripts
```

## Built With

- [React](https://reactjs.org/) - Frontend library
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React Router](https://reactrouter.com/) - Routing library for React

## Development

### Code Style and Guidelines

- Use TypeScript for type safety
- Follow component-based architecture
- Implement responsive design for all components
- Maintain dark mode aesthetic with deep purple and dark blue gradients
- Ensure cross-browser compatibility

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects the Create React App configuration

## Deployment

The website is deployed to Netlify with the following process:

1. Push changes to GitHub
2. Netlify automatically builds and deploys the site
3. The site is served from the custom domain [dox4free.com](https://dox4free.com)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Icons provided by [Heroicons](https://heroicons.com/)
- UI components powered by [Headless UI](https://headlessui.dev/)
