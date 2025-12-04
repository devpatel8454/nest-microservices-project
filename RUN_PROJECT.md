# How to Run the Microservices Project

This project consists of three parts that need to be running simultaneously:
1. **Users Microservice** (Port 3002)
2. **Products Microservice** (Port 3003)
3. **Auth Microservice** (Port 3004)
4. **API Gateway** (Port 3300)

## Prerequisites

- Node.js installed
- Dependencies installed (`npm install`)

## Step-by-Step Guide

You need to open **3 separate terminal windows** to run the full system.

### Terminal 1: Start Users Service
This service handles user-related operations.
```bash
npm run start:dev users
```
*Wait for it to show "Nest application successfully started".*

### Terminal 2: Start Products Service
This service handles product-related operations.
```bash
npm run start:dev products
```
*Wait for it to show "Nest application successfully started".*

### Terminal 3: Start Auth Service
This service handles authentication.
```bash
npm run start:dev auth
```
*Wait for it to show "Nest application successfully started".*

### Terminal 4: Start API Gateway
This is the main entry point that you interact with.
```bash
npm run start:dev
```
*Wait for it to show "Nest application successfully started".*

## Testing the Application

Since the routes are now protected, you must login first to get a token.

**1. Register a User:**
```bash
curl -X POST http://localhost:3300/auth/register -H "Content-Type: application/json" -d "{\"email\": \"test@example.com\", \"password\": \"password123\", \"name\": \"Test User\", \"age\": 30}"
```

**2. Login:**
```bash
curl -X POST http://localhost:3300/auth/login -H "Content-Type: application/json" -d "{\"email\": \"test@example.com\", \"password\": \"password123\"}"
```
*Copy the `access_token` from the response.*

**3. Access Protected Routes:**
Replace `<TOKEN>` with your actual access token.

**Get All Users:**
```bash
curl http://localhost:3300/users -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRldjEyM0BnbWFpbC5jb20iLCJpYXQiOjE3NjQ4NTI0NjksImV4cCI6MTc2NDg1NjA2OX0.tAXhV2OJFXjBLhJ6PO-lVmzi0HEcAfI4LgOkPVUtoCo"
```

**Get All Products:**
```bash
curl http://localhost:3300/products -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRldjEyM0BnbWFpbC5jb20iLCJpYXQiOjE3NjQ4NTI0NjksImV4cCI6MTc2NDg1NjA2OX0.tAXhV2OJFXjBLhJ6PO-lVmzi0HEcAfI4LgOkPVUtoCo"
```

## Troubleshooting

- **Error: EADDRINUSE**: This means the port is already taken.
    - Check if you have other terminals running the project.
    - You can find and kill the process using:
      ```powershell
      netstat -ano | findstr :<PORT>
      taskkill /F /PID <PID>
      ```
- **Error: Connection Refused**: This usually means one of the microservices (Users or Products) is not running. Make sure both Terminal 1 and Terminal 2 are running before starting the Gateway.
