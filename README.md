# vue-cocomo

A modern web application for estimating costs and effort in software projects, based on the COCOMO model and Function Point Analysis. It provides a guided, validated, and visually appealing experience for calculating critical estimation metrics, replacing traditional spreadsheets and enabling secure and efficient local project management.

<p align="center">
  <img src="https://i.imgur.com/SpinJ7a.jpeg" width="49%" />
  <img src="https://imgur.com/bVfnXs4.jpg" width="49%" />
  <img src="https://i.imgur.com/uQq5P3a.jpeg" width="49%" />
  <img src="https://i.imgur.com/UIbiapy.png" width="49%" />
</p>

## Features

- **Project Management**: Create, edit, view, and delete software project estimates.
- **Estimation Wizard**: A step-by-step flow for entering Function Point data and Adjustment Factors.
- **Automatic Calculation**: Instantly get key metrics such as UFP, AFP, effort, and estimated cost.
- **Local Persistence**: Save your projects in the browser using IndexedDB, no backend required.
- **Robust Validation**: Forms validated with Vee-Validate to prevent input errors.
- **Multilingual Support**: Interface available in Spanish and English.
- **Modern & Responsive UI**: Built with Tailwind CSS and reusable components for a professional experience.

## Technologies Used

- **Vue 3 (Composition API)**: Main framework for the user interface.
- **Vite**: Ultra-fast bundler for development and build.
- **TypeScript**: Static typing for greater robustness and maintainability.
- **Pinia**: Global state management.
- **Tailwind CSS v4**: CSS utilities for fast and responsive design.
- **Shadcn-vue**: Reusable and modern UI components.
- **Vee-Validate**: Form validation and business rules.
- **IndexedDB (idb)**: Local project storage.
- **Vue I18n**: Internationalization.
- **Lucide Vue Next**: Lightweight and consistent SVG iconography.

> _Note: Please check `package.json` for the full list of dependencies._

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18.x
- [npm](https://www.npmjs.com/) >= 9.x or [yarn](https://yarnpkg.com/) >= 1.22

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/<your-username>/vue-cocomo.git
   cd vue-cocomo
   ```

2. Install the dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to see the application in action.

## Project Structure

- 📁 src/
	- 📁 components/ - Reusable UI components
	- 📁 views/ - Main views (Main, Create, Edit, Read)
	- 📁 stores/ - Global state management (Pinia)
	- 📁 services/ - Data access logic (IndexedDB)
	- 📁 i18n/ - Internationalization files
	- 📁 assets/ - Static resources (images, icons)
	- 📄 App.vue - Root component
- 📄 main.ts - Application entry point

## License
This project is licensed under the MIT License.