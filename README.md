# My Personal Website

This is the source code for my personal website, built with Astro.

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/your-repo-name.git
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Build for production:
   ```
   npm run build
   ```

## Project Structure

- `src/pages/`: Astro pages
- `src/layouts/`: Astro layouts
- `src/components/`: Astro components
- `src/styles/`: Global CSS styles
- `src/content/`: Markdown content for blog posts and home page
- `eslint.config.js`: ESLint configuration
- `.prettierrc`: Prettier configuration

## Available Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the project for production
- `npm run preview`: Preview the production build locally
- `npm run lint`: Run ESLint to check for code issues
- `npm run lint:fix`: Run ESLint and automatically fix issues
- `npm run format`: Run Prettier to format code

## Technologies Used

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/) for code linting (using the new flat config format)
- [Prettier](https://prettier.io/) for code formatting

## Contributing

If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## Notes

- This project uses ESLint's new flat config format (eslint.config.js) introduced in ESLint v8.21.0.
- The ESLint configuration includes settings for Astro files and TypeScript.