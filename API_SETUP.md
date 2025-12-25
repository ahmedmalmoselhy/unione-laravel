# API Setup Instructions

## Installation Steps

### 1. Install Laravel Sanctum

```bash
composer require laravel/sanctum
```

### 2. Publish Sanctum Configuration and Migrations

```bash
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
php artisan migrate
```

### 3. Update User Model

The User model has already been updated with the `HasApiTokens` trait.

### 4. Configure Sanctum Middleware

The API routes are already configured to use `auth:sanctum` middleware.

## API Endpoints

### Authentication Endpoints

All endpoints are prefixed with `/api/v1`

#### Login

- **POST** `/api/v1/login`
- **Body:**
    ```json
    {
        "email": "user@example.com",
        "password": "password"
    }
    ```
- **Response:**
    ```json
    {
        "message": "Login successful",
        "user": {
            "id": 1,
            "name": "User Name",
            "email": "user@example.com",
            "role": "student"
        },
        "token": "1|xxxxxxxxxxxxx"
    }
    ```

#### Logout

- **POST** `/api/v1/logout`
- **Headers:** `Authorization: Bearer {token}`
- **Response:**
    ```json
    {
        "message": "Logged out successfully"
    }
    ```

#### Get Authenticated User

- **GET** `/api/v1/user`
- **Headers:** `Authorization: Bearer {token}`
- **Response:**
    ```json
    {
        "user": {
            "id": 1,
            "name": "User Name",
            "email": "user@example.com",
            "role": "student"
        }
    }
    ```

#### Forgot Password

- **POST** `/api/v1/password/forgot`
- **Body:**
    ```json
    {
        "email": "user@example.com"
    }
    ```
- **Response:**
    ```json
    {
        "message": "Password reset link sent to your email address."
    }
    ```

#### Reset Password

- **POST** `/api/v1/password/reset`
- **Body:**
    ```json
    {
        "token": "reset-token-from-email",
        "email": "user@example.com",
        "password": "newpassword",
        "password_confirmation": "newpassword"
    }
    ```
- **Response:**
    ```json
    {
        "message": "Password has been reset successfully."
    }
    ```

## Usage Example

```bash
# Login
curl -X POST http://localhost:8000/api/v1/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"password"}'

# Use token for authenticated requests
curl -X GET http://localhost:8000/api/v1/user \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

## Notes

- Make sure to configure your mail settings in `.env` for password reset emails to work
- The API uses token-based authentication via Laravel Sanctum
- All API responses are in JSON format
- Validation errors will return a 422 status code with error details
