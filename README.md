# Country Holidays App

This Angular application allows users to search for countries and view their public holidays. It also displays random countries with their next upcoming holiday.

## DEMO LINK You can see how it works by visiting this link: 
# You can see how it works by visiting this link:
https://petrolozynskyi.github.io/countries/

## Features

- Search for countries by name
- View public holidays for a selected country
- Display random countries with their next upcoming holiday
- Switch between different years to view holidays

## Architecture

This application is built using Angular and follows these key architectural points:

- Standalone components for modularity
- HTTP Client for API requests
- Angular Router for navigation

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/petrolozynskyi/countries.git
   ```

2. Navigate to the project directory:
   ```
   cd countries
   ```

3. Install dependencies:
   ```
   npm install
   ```

## Running the Application

To run the application in development mode:

```
ng serve
```

Navigate to `http://localhost:4200/` in your browser. The app will automatically reload if you change any of the source files.

## Building the Application

To build the application for production:

```
ng build --prod
```

The build artifacts will be stored in the `dist/` directory.


## Environment Variables

The application uses environment variables for configuration. These are stored in a `environment.ts` file in the `/environments` directory. The following variables are used:

- `API_BASE_URL`: The base URL for the Nager.Date API

## Code Quality

This project uses ESLint for linting and Prettier for code formatting. To run the linter:

```
npm run lint
```

To format the code:

```
npx prettier --write .
```

