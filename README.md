# Event Scheduling API

This is a RESTful API for scheduling and managing events, built with Express.js, MongoDB, and Node.js.

## Features

- Create, read, update, and delete events
- User registration and authentication
- JSON Web Token (JWT) based authentication
- Secure password hashing with bcryptjs

## Setup

1. Clone the repository:

    ```bash
    git clone (https://github.com/BruceICzw/Event-Scheduler)
    cd event-scheduling-api
    ```

2. Install dependencies:

    ```bash
    npm install
    ```


3. Start the server:

    ```bash
    npm start
    ```

4. Set Up configuration
    Create a `config` folder in the root directory and add a `config.js` file
    Add this code
    ```javascript
    const jwtSecret = 'your-secret-here';//Add your jsonwebtoken secret string here
    module.exports = jwtSecret;
    ```
## API Endpoints

### Events

- `GET /api/events`: Get all events
- `POST /api/events/upload`: Create a new event (authenticated)
- `PUT /api/events/:id`: Update event by ID (authenticated)
- `DELETE /events/delete/:id`: Delete event by ID (authenticated)

### User Profiles

- `GET /api/user/profile`:Get currently logged in user
- `PUT /api/user/profile`: Update profile
- `DELETE /api/user/delete/:id`: Delete profile by ID

### Authentication

- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: Login with username and password to get JWT token

## Request and Response Formats

### Event Schema:
```json
{
  "title": "String",
  "description": "String",
  "date": "Date",
  "time": "String",
  "user": "ObjectId" //Automatically generated from jwt token
}
```
### User Schema:
```json
{
  "username": "String",
  "email": "String",
  "password": "String"
}
```
### Authentication:

#### Request:

```json
{
    "username": "String",
    "password": "String"
}

```

#### Response
```json
{
  "token": "JWT Token"
}
```

## Dependencies
- Express.js: Web framework for Node.js
- Mongoose: MongoDB object modeling tool
- bcryptjs: Password hashing library
- jsonwebtoken: JWT authentication library

## Contibution
Contributions are welcome! Feel free to open issues or submit pull requests

## License

This project is licensed under the terms of the MIT license. See the [LICENSE](LICENSE) file for details.