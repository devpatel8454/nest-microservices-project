# How to Run the Microservices Project

This project consists of three parts that need to be running simultaneously:
1. **Users Microservice** (Port 3002)
2. **Products Microservice** (Port 3003)
3. **API Gateway** (Port 3300)

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

### Terminal 3: Start API Gateway
This is the main entry point that you interact with.
```bash
npm run start:dev
```
*Wait for it to show "Nest application successfully started".*

## Testing the Application

Once all three services are running, you can test the endpoints using `curl` or Postman.

**Get All Users:**
```bash
curl http://localhost:3300/users
```

**Add a User:**
```bash
curl -X POST http://localhost:3300/users -H "Content-Type: application/json" -d "{\"name\": \"New User\", \"age\": 25}"
```

**Get All Products:**
```bash
curl http://localhost:3300/products
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
