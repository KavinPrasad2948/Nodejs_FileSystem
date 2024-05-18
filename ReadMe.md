# 📁 File Creation and Directory Listing API

This Node.js application provides an API for creating timestamped text files and reading the contents of a directory. It's built with Express and utilizes `fs/promises` for file operations.

## ✨ Features

- **Create Timestamped Files**:
  - POST `/create`: Creates a file with the current date and time in the content and filename.
  
- **Read Directory Contents**:
  - Future endpoint to list all files in the directory.

## 🛠️ Technology Stack

- **Node.js**: JavaScript runtime environment.
- **Express**: Web application framework for Node.js.
- **body-parser**: Middleware to parse incoming JSON request bodies.
- **fs/promises**: Promise-based file system operations.

## 📑 API Endpoints

### Create a File

- **Endpoint**: `POST /create`
- **Request Body**:
  ```json
  {
    "fileName": "example",
    "fileContent": "This is a sample content"
  }```

### 🚀 Getting Started
Prerequisites

    Node.js
    npm (Node Package Manager)

### Installation

1. Clone the repository:
   
   ```git clone https://github.com/KavinPrasad2948/Nodejs_FileSystem.git```

2. Install dependencies:
   
   ```npm install```

3. Start the server:

   ```npm start```

### Deployment

    Push your code to a Git repository.
    Deploy your application to a cloud service like Render.com or any other hosting platform.

### 📜 License

This project is licensed under the MIT [License](https://github.com/KavinPrasad2948/Nodejs_FileSystem.git).
