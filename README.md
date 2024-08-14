# TUF Assignment

## Project Overview

This project is a dynamic one-page website built with React. It includes a banner with a controllable visibility feature and a countdown timer. An internal dashboard allows you to manage the banner's content, visibility, timer, and clickable link. The backend is integrated with a MySQL database to store and manage the banner data.

##Important Points:

- **This code is for Backend, If you want to see the code of the frontend then go to another repository- [https://github.com/alk-alok/frontend-tuf-task](https://github.com/alk-alok/frontend-tuf-task)**
- **Deployment**: I have deployed frontend at netlify :- [click me](https://66bc8a10d98256872057f348--darling-zuccutto-4b6864.netlify.app/)

## Project Structure

- **client/**: Contains the React frontend.
  - **public/**: Static files.
  - **src/**: Source code for React components.
  - **App.js**: Main React component.
  - **index.js**: Entry point for React.
  - **App.css**: Main CSS file for styling.
  - **index.css**: Global CSS file.
  - **README.md**: Documentation for the client.
  
- **server/**: Contains the backend server.
  - **index.js**: Entry point for the server.
  - **.env**: Environment variables for the server.
  - **banner.sql**: SQL script for database schema and initial data.

## Getting Started

### Prerequisites

- Node.js and npm installed.
- MySQL server running.
- Basic knowledge of React and MySQL.

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/alk-alok/frontend-tuf-task.git
    cd frontend-tuf-task
    ```

2. **Client Setup:**

    ```bash
    cd client
    npm install
    ```

    - Create a `.env` file in the `client` directory and add any required environment variables.

3. **Server Setup:**

    ```bash
    cd server
    npm install
    ```

    - Create a `.env` file in the `server` directory with your database configuration.
    - Run the `banner.sql` script to set up the database schema and initial data.

4. **Start the Development Servers:**

    - For the client:

      ```bash
      cd client
      npm start
      ```

    - For the server:

      ```bash
      cd server
      npm start
      ```

5. **Visit the Website:**

    Open `http://localhost:3000` in your browser to view the one-page website and interact with the banner and dashboard.

## API Endpoints

- **GET /api/v1/banner**: Retrieve the current banner data.
- **POST /api/v1/update-banner**: Update banner data in the database.


## Contact

For questions or support, please contact [kumaralok47ak@gmail.com](mailto:kumaralok47ak@gmail.com).
