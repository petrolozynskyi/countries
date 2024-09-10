# Country Holidays App

This Angular application allows users to search for countries and view their public holidays. It also displays random countries with their next upcoming holiday.

## DEMO LINK

You can see how it works by visiting this link:  
[Country Holidays App Demo](https://petrolozynskyi.github.io/countries/)

## Features

- Search for countries by name
- View public holidays for a selected country
- Display random countries with their next upcoming holiday
- Switch between different years to view holidays

## Functions

- **Fetch Countries**: Retrieves a list of countries from the Nager.Date API.
- **Search Countries**: Filters the list of countries based on user input.
- **Show Country Holidays**: Displays public holidays for a selected country.
- **Random Country Generator**: Picks random countries and displays their next holiday.
- **Yearly Holiday View**: Allows users to switch between different years to view holidays.

## Architecture

This application is built using Angular and follows these key architectural points:

- **Standalone Components**: For modularity and reusability.
- **HTTP Client**: For making API requests.
- **Angular Router**: For handling navigation between pages.

### Frontend

- **Framework**: Angular

  **Components**:
  - **Home Page**: Displays the list of countries, search bar, and random country information.
  - **Country Page**: Shows detailed information about a specific country.

### Services

- **Country Service**: Manages API calls to fetch country data and holiday information.

### API

- **Nager.Date API**: Provides country and holiday data.

### Routing

- **Routes**:
  - `/`: Home Page
  - `/country/:id`: Country Details Page

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/country-holidays-app.git
   ```

2. Navigate to the project directory:
   ```
   cd country-holidays-app
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

## Running Tests

To execute the unit tests via Karma:

```
ng test
```

To execute the end-to-end tests via Protractor:

```
ng e2e
```

## Environment Variables

The application uses environment variables for configuration. These are stored in a `environment.ts` file in the `src/environment` directory. The following variables are used:

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
