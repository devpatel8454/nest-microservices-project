# How to Stop All Microservice Ports

This guide shows you how to stop all running microservices by killing the processes using their ports.

## Quick Stop All Services

Run these commands one by one to stop all services:

### Step 1: Find All Running Processes

```powershell
netstat -ano | findstr "3002 3003 3004 3300"
```

This will show you all processes running on ports 3002, 3003, 3004, and 3300.

### Step 2: Kill All Processes

**Option A: Kill All at Once (Recommended)**

First, get all the PIDs:
```powershell
$pids = netstat -ano | findstr "3002 3003 3004 3300" | ForEach-Object { ($_ -split '\s+')[-1] } | Sort-Object -Unique
```

Then kill them all:
```powershell
$pids | ForEach-Object { taskkill /F /PID $_ }
```

**Option B: Kill One by One**

Find and kill each port individually:

**Stop Users Service (Port 3002):**
```powershell
netstat -ano | findstr :3002
taskkill /F /PID <PID_FROM_ABOVE>
```

**Stop Products Service (Port 3003):**
```powershell
netstat -ano | findstr :3003
taskkill /F /PID <PID_FROM_ABOVE>
```

**Stop Auth Service (Port 3004):**
```powershell
netstat -ano | findstr :3004
taskkill /F /PID <PID_FROM_ABOVE>
```

**Stop API Gateway (Port 3300):**
```powershell
netstat -ano | findstr :3300
taskkill /F /PID <PID_FROM_ABOVE>
```

## Verify All Services Stopped

Run this command to verify no services are running:
```powershell
netstat -ano | findstr "3002 3003 3004 3300"
```

If the command returns nothing, all services have been stopped successfully.

## Alternative: Using Ctrl+C

If you're running the services in terminal windows, you can simply press `Ctrl+C` in each terminal window to stop the service gracefully.
