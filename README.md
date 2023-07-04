
# Management System Application

This repository contains the code for a Management System application built using React on the client-side and Express.js with MySQL on the server-side.

## Client

The client-side code is located in the `App.js` file and is responsible for rendering the user interface and handling user interactions. It uses React hooks to manage state and Axios to make HTTP requests to the server.

To run the client application, follow these steps:

1. Install the required dependencies: `npm install`
2. Start the development server: `npm start`
3. Open [http://localhost:3000](http://localhost:3000) in your browser to access the application.

The client-side code allows you to add student information and display a list of students. The entered information is sent to the server for storage and retrieval.

## Server

The server-side code is located in the `server.js` file. It uses Express.js as the web framework and MySQL as the database. The server exposes two endpoints:

- `POST /create`: Inserts the provided student information into the database.
- `GET /infomation`: Retrieves all student information from the database.

To run the server application, follow these steps:

1. Install the required dependencies: `npm install`
2. Update the database connection details in the `server.js` file (user, host, password, and database).
3. Start the server: `node server.js`

Make sure you have a MySQL server running and accessible with the provided credentials.

## Installation

To run the entire application, you need to set up both the client and server components.

1. Clone the repository: `git clone <repository-url>`
2. Install the client dependencies: `cd <repository-folder>/client && npm install`
3. Install the server dependencies: `cd <repository-folder>/server && npm install`

## Configuration

### Client Configuration

The client-side configuration is handled in the `App.js` file. You may need to update the following line of code if your server is running on a different URL:

```javascript
axios.post("http://localhost:3001/create", // Update the URL if necessary
```

### Server Configuration

The server-side configuration is handled in the `server.js` file. Update the following lines of code with your MySQL database connection details:

```javascript
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Khuljohn-studi0",
  database: "regstatus",
});
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
