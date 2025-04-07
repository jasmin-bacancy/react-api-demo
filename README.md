# React API Demo

A professional CRUD (Create, Read, Update, Delete) application built with React, demonstrating best practices in API integration and state management.

## Features

- User Management (CRUD operations)
- Modern UI with React Bootstrap
- Centralized API configuration with Axios interceptors
- Environment-based configuration
- Error handling and loading states
- Responsive design
- Clean and maintainable code structure

## Project Structure

```
src/
├── components/
│   ├── UserList.js      # Displays all users with CRUD actions
│   ├── UserForm.js      # Form for creating/editing users
│   └── UserDetail.js    # Detailed view of a single user
├── services/
│   ├── api.js           # Centralized API configuration and interceptors
│   └── userService.js   # User-specific API calls
└── App.js               # Main application component with routing
```

## Environment Configuration

The application uses environment variables for configuration:

- `.env` - Contains environment-specific variables
  - `REACT_APP_API_BASE_URL` - Base URL for API requests

To use different environments:
1. Create `.env.development` for development environment
2. Create `.env.production` for production environment
3. Create `.env.test` for testing environment

## API Configuration

The application uses a centralized API configuration with Axios interceptors:

- **Request Interceptor**
  - Adds common headers
  - Logs outgoing requests
  - Handles authentication tokens (when needed)

- **Response Interceptor**
  - Logs incoming responses
  - Handles common error cases:
    - 401 (Unauthorized)
    - 403 (Forbidden)
    - 404 (Not Found)
    - 500 (Server Error)

## Getting Started

1. Clone the repository
2. Create a `.env` file in the root directory with the following content:
   ```
   REACT_APP_API_BASE_URL=https://jsonplaceholder.typicode.com
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Dependencies

- React
- React Router
- Axios
- React Bootstrap
- Bootstrap

## API Endpoints

The application uses JSONPlaceholder API for demonstration purposes:

- GET /users - Get all users
- GET /users/:id - Get a single user
- POST /users - Create a new user
- PUT /users/:id - Update a user
- DELETE /users/:id - Delete a user

## Best Practices Demonstrated

- Component-based architecture
- Centralized API configuration
- Environment-based configuration
- Error handling
- Loading states
- Form validation
- Responsive design
- Clean code organization

## Note

This application uses JSONPlaceholder API, which is a mock API for testing and prototyping. Changes made through POST, PUT, or DELETE requests won't persist between refreshes.

## License

This project is licensed under the MIT License.
