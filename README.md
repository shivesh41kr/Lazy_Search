# Lazy_Search Application

This is a full-stack application that allows users to search for students by name. The project consists of a backend built with Node.js and Express, and a frontend built with React.

## Folder Structure
```
project-root/
├── backend/               # Backend folder
│   ├── package.json       # Backend dependencies and scripts
│   ├── server.js          # Express server
│   ├── student_data.json  # Student data
├── my-app/                # Frontend folder
│   ├── public/            # Public assets for React
│   ├── src/               # React source code
│   ├── package.json       # Frontend dependencies and scripts
├── node_modules/          # Shared dependencies for both backend and frontend
├── package.json           # Root package.json for managing shared dependencies
├── package-lock.json      # Lock file for dependency versions
├── .gitignore             # Git ignore file
```

## Prerequisites
Make sure you have the following installed on your system:
- Node.js (v14 or higher)
- npm (comes with Node.js)

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository-url>
cd project-root
```

### 2. Install Dependencies
Run the following command in the root directory to install all dependencies for both the backend and frontend:
```bash
npm install
```

## Running the Application

### Start the Backend
Run the following command from the root directory:
```bash
node backend/server.js
```
The backend server will run at http://localhost:5000.

### Start the Frontend
Run the following command from the root directory:
```bash
cd my-app
```
```bash
npm start
```
The frontend will run at http://localhost:3000.

## Features

### Backend:
- Serves a REST API endpoint (`/search`) to search for students by name.
- Uses mock data from `student_data.json`.

### Frontend:
- React-based UI for searching students.
- Displays search results dynamically as the user types.
- Shows detailed information about a selected student.

## API Endpoint

### GET /search
**Query Parameters:**
- `q` (string): The search query (e.g., `?q=John`).

**Response:**
Returns a list of students whose names match the query.
