
# Management-System

This code is a basic server-side application built using Express.js and MySQL. It provides an API for creating and retrieving information from a [MySQL-database]. The application allows you to store and retrieve information about individuals, including their name, surname, email, age, grade, gender, and contact details.

## Prerequisites
Before running this code, make sure you have the following installed on your system:

[Node.js]
[MySQL]
Installation
To run this application, follow these steps:

Clone the repository or download the code files.

Open a terminal or command prompt and navigate to the project directory.

Install the required dependencies by running the following command:

[bash]
[Copy-code]
[npm_install]

Set up your MySQL database. Make sure you have a MySQL server running and create a new database called regstatus. Modify the database configuration in the code if necessary.

Start the server by running the following command:

[bash]
[Copy-code]
[node-index.js]
The server will start running on port 3001, and you should see a message in the console indicating that the server is running.

Usage
This application provides two API endpoints:

POST /create: This endpoint allows you to create a new record in the infomation table of the MySQL database. To create a record, send a POST request to this endpoint with the following JSON payload:

json
Copy code
{
  "name": "John",
  "surname": "Doe",
  "email": "john.doe@example.com",
  "age": 25,
  "grade": "A",
  "gender": "Male",
  "contact": "1234567890"
}
Replace the values with the information you want to store. If the record is created successfully, you will receive a response with the message "values inserted".

GET /infomation: This endpoint allows you to retrieve all records from the infomation table. Send a GET request to this endpoint to retrieve all records stored in the database. The response will be a JSON array containing the retrieved records.

Configuration
If your MySQL server is running on a different host or port, or if you have a different username, password, or database name, you can modify the configuration in the code. Locate the following section in the code:

javascript
Copy code
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Khuljohn-studi0",
  database: "regstatus",
});
Update the values according to your MySQL configuration.

Contributing
Feel free to contribute to this project by submitting bug reports or feature requests through the issue tracker. You can also create pull requests for bug fixes or enhancements.

License
This project is licensed under the MIT License.