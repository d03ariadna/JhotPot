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

## Main APIs and Components from Expo
The project leverages several Expo APIs and components to enhance functionality:
- **expo-camera**: Used for QR code scanning and camera functionalities.
- **expo-media-library**: For saving and managing media files.
- **expo-sharing**: To enable sharing of files and data.
- **expo-status-bar**: For customizing the status bar appearance.
- **expo-router**: For managing navigation and routing within the app.
- **expo-font**: For loading custom fonts.
- **expo-splash-screen**: To manage the app's splash screen during loading.

## Project Structure
The project is organized into the following main folders:
- `app/`: Contains the main application components and screens.
- `assets/`: Includes fonts and images for branding and design.
- `components/`: Reusable UI components.
- `context/`: Context for managing global state, such as authentication.
- `data/`: Static data like categories, countries, and recipes.
- `utils/`: Utility functions for formatting and data manipulation.
