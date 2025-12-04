# API Testing Guide

This guide provides step-by-step instructions for testing all API endpoints.

## Prerequisites

Make sure all 4 services are running:
- Users Service (Port 3002)
- Products Service (Port 3003)
- Auth Service (Port 3004)
- API Gateway (Port 3300)

## Authentication Flow

### 1. Register a New User

```bash
curl -X POST http://localhost:3300/auth/register -H "Content-Type: application/json" -d "{\"email\": \"test@example.com\", \"password\": \"password123\", \"name\": \"Test User\", \"age\": 30}"
```

**Expected Response:**
```json
{
  "id": 1,
  "email": "test@example.com",
  "name": "Test User",
  "age": 30
}
```

### 2. Login

```bash
curl -X POST http://localhost:3300/auth/login -H "Content-Type: application/json" -d "{\"email\": \"test@example.com\", \"password\": \"password123\"}"
```

**Expected Response:**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Important:** Copy the `access_token` value. You'll need it for all subsequent requests.

## Protected Routes

For all the following requests, replace `<YOUR_TOKEN>` with the actual token you received from the login response.

### Users Endpoints

**Get All Users:**
```bash
curl http://localhost:3300/users -H "Authorization: Bearer <YOUR_TOKEN>"
```

**Add a New User:**
```bash
curl -X POST http://localhost:3300/users -H "Authorization: Bearer <YOUR_TOKEN>" -H "Content-Type: application/json" -d "{\"email\": \"newuser@example.com\", \"password\": \"pass123\", \"name\": \"New User\", \"age\": 25}"
```

### Products Endpoints

**Get All Products:**
```bash
curl http://localhost:3300/products -H "Authorization: Bearer <YOUR_TOKEN>"
```

**Add a New Product:**
```bash
curl -X POST http://localhost:3300/products -H "Authorization: Bearer <YOUR_TOKEN>" -H "Content-Type: application/json" -d "{\"name\": \"New Product\", \"price\": 99.99}"
```

## Testing Without Authentication (Should Fail)

Try accessing a protected route without a token:

```bash
curl http://localhost:3300/users
```

**Expected Response:**
```json
{
  "statusCode": 401,
  "message": "Unauthorized"
}
```

## Using Postman

If you prefer using Postman:

1. **Register/Login:**
   - Method: POST
   - URL: `http://localhost:3300/auth/register` or `http://localhost:3300/auth/login`
   - Headers: `Content-Type: application/json`
   - Body (raw JSON): 
     ```json
     {
       "email": "test@example.com",
       "password": "password123",
       "name": "Test User",
       "age": 30
     }
     ```

2. **Access Protected Routes:**
   - Method: GET or POST (depending on endpoint)
   - URL: `http://localhost:3300/users` or `http://localhost:3300/products`
   - Headers: 
     - `Authorization: Bearer <YOUR_TOKEN>`
     - `Content-Type: application/json` (for POST requests)

## Common Issues

### "Unauthorized" Error
- Make sure you're including the `Authorization` header
- Check that your token hasn't expired (tokens last 60 minutes)
- Verify the token format: `Bearer <token>`

### "Internal Server Error"
- Check that all 4 services are running
- Verify the database connection is working
- Check the terminal logs for detailed error messages

### Connection Refused
- One or more microservices might not be running
- Check ports 3002, 3003, 3004, and 3300 are all active
