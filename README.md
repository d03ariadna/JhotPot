# JhotPot Mobile Application

## Project Overview
JhotPot is a mobile application designed to simplify food management and enhance the user experience with recipes, ingredients, and user profiles. Built using React Native and Expo, the app provides a visually appealing and user-friendly interface for managing food-related activities.

## Key Features

### Authentication
- User sign-in, sign-up, and password reset functionalities.

### Food Management
- Add ingredients manually or via QR code scanning.
- Ingredient input and carousel for displaying ingredients.

### Recipes
- Filter recipes based on various criteria.
- Display recipe cards and manage country-specific recipes.

### User Profile
- Manage user profiles, including profile pictures and recipe sections.
- Add and view reviews.

### Navigation
- Multi-screen navigation with navigation bars and tab bars.

### Design and UI
- Reusable UI components for a consistent and visually appealing design.

## Technologies Used
- **React Native**: For building the mobile application.
- **Expo**: For development and deployment.
- **TypeScript**: For type safety and better code maintainability.
- **Tailwind CSS**: For styling.

## Project Structure
The project is organized into the following main folders:
- `app/`: Contains the main application components and screens.
- `assets/`: Includes fonts and images for branding and design.
- `components/`: Reusable UI components.
- `context/`: Context for managing global state, such as authentication.
- `data/`: Static data like categories, countries, and recipes.
- `utils/`: Utility functions for formatting and data manipulation.

## How to Clone and Run the Project

### Prerequisites
- Node.js and npm installed on your system.
- Expo CLI installed globally (`npm install -g expo-cli`).

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd JhotPot
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the Expo development server:
   ```bash
   npx expo start
   ```

5. Use the Expo Go app on your mobile device to scan the QR code and run the application.