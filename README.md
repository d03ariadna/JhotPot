# JhotPot Mobile Application

## Project Overview
JhotPot is a mobile application designed to simplify food management and enhance the user experience with recipes, ingredients, and user profiles. Built using React Native and Expo, the app provides a visually appealing and user-friendly interface for managing food-related activities.

## Key Features

### Authentication
- User sign-in, sign-up, and password reset functionalities.

### Food Management
- Add ingredients manually or via QR code scanning.
- Ingredient input and carousel for displaying ingredients.
<div align="center">
  <img src="https://github.com/user-attachments/assets/961ed9d3-d754-48f3-a0f8-f4c411ba8f1c" width="32%" />
  <img src="https://github.com/user-attachments/assets/62c6ade2-d87a-45c8-a8b2-fe0501d5c4f5" width="32%" />
  <img src="https://github.com/user-attachments/assets/331a4eb5-cee6-4034-ba9c-3fe63b895a61" width="32%" />
</div>


### Recipes
- Filter recipes based on various criteria.
- Display recipe cards and manage country-specific recipes.
<div align="center">
  <img src="https://github.com/user-attachments/assets/0dcb5fb1-0db5-4178-b954-0318d7c748b" width="24%" />
  <img src="https://github.com/user-attachments/assets/49a8efde-bc6a-44e2-a6a2-32dfc97253c9" width="24%" />
  <img src="https://github.com/user-attachments/assets/884098d3-4971-4b01-9542-d1abf9c57d3c" width="24%" />
  <img src="https://github.com/user-attachments/assets/e232fb54-2db5-4bde-a721-844383632ac5" width="24%" />
</div>

### User Profile
- Manage user profiles, including profile pictures and recipe sections.
- Add and view reviews.


### Navigation
- Multi-screen navigation with navigation bars and tab bars.

### Design and UI
- Reusable UI components for a consistent and visually appealing design.
![VideoCapture_20250422-080756](https://github.com/user-attachments/assets/b9d0a8c6-90ed-4e95-92a4-67cbb59dedba)


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
