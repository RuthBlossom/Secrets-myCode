# User Authentication with Express.js and MongoDB

This Node.js application provides user authentication functionality using Express.js for the server, MongoDB for the database, and EJS for rendering views. It allows users to register with an email and password, log in, and access protected routes.

## Prerequisites
- Node.js installed on your machine.
- MongoDB installed and running locally.

## Installation
1. Clone or download this repository.
2. Navigate to the project directory in your terminal.
3. Install dependencies:
    ```bash
    npm install
    ```

## Usage
1. Start the server:
    ```bash
    npm start
    ```
2. Open your web browser and go to `http://localhost:3000`.
3. Register a new user account by visiting `/register`.
4. Log in with the registered account by visiting `/login`.
5. Upon successful login, access protected routes and see user-specific content.

## File Structure
- **index.js**: Main application file containing the Express.js server setup, route definitions, and database connection.
- **public/**: Directory containing static assets like CSS and client-side JavaScript.
- **views/**: Directory containing EJS template files for rendering HTML views.
- **models/User.js**: Mongoose model definition for the User schema.
- **package.json**: File containing project metadata and dependencies.

## Dependencies
- **express**: Web framework for Node.js.
- **body-parser**: Middleware for parsing HTTP request bodies.
- **ejs**: Templating engine for rendering HTML templates.
- **mongoose**: MongoDB object modeling tool for Node.js.

## Routes
- **GET "/":** Renders the home page.
- **GET "/login":** Renders the login page.
- **GET "/register":** Renders the registration page.
- **POST "/register":** Handles user registration.
- **POST "/login":** Handles user login.

## Frontend Script
- **public/script.js**: JavaScript file for handling form submission using XMLHttpRequest.

## Error Handling
- Error handling is implemented for database operations and form submissions.

## Disclaimer
This application is for educational purposes only.
```
