# Number API and Frontend

This project provides a simple API with various endpoints to perform operations related to numbers and a frontend application to interact with this API. The backend is built using Express.js, and the frontend uses AngularJS.

## Backend (Express.js)

The backend API offers several endpoints to perform different operations on numbers. The server runs on port 3000 by default, but you can change the port if needed.

### Endpoints

- **GET `/p`**: Retrieve prime numbers within a specified range.
  - Query Parameters: `start` (number), `end` (number)
  - Example: `/p?start=1&end=100`

- **GET `/e`**: Retrieve even numbers within a specified range.
  - Query Parameters: `start` (number), `end` (number)
  - Example: `/e?start=1&end=100`

- **GET `/o`**: Retrieve odd numbers within a specified range.
  - Query Parameters: `start` (number), `end` (number)
  - Example: `/o?start=1&end=100`

- **GET `/f`**: Retrieve Fibonacci numbers up to a specified number.
  - Query Parameters: `n` (number)
  - Example: `/f?n=10`

- **GET `/pa`**: Retrieve palindromic numbers within a specified range.
  - Query Parameters: `start` (number), `end` (number)
  - Example: `/pa?start=1&end=100`

- **GET `/s`**: Calculate the sum of a comma-separated list of numbers.
  - Query Parameters: `numbers` (comma-separated list of numbers)
  - Example: `/s?numbers=1,2,3,4`

- **GET `/a`**: Calculate the average of a comma-separated list of numbers.
  - Query Parameters: `numbers` (comma-separated list of numbers)
  - Example: `/a?numbers=1,2,3,4`

- **GET `/sq`**: Calculate the squares of a comma-separated list of numbers.
  - Query Parameters: `numbers` (comma-separated list of numbers)
  - Example: `/sq?numbers=1,2,3,4`

## Frontend (AngularJS)

The frontend application allows users to interact with the API and view the results. It provides input fields for range or list of numbers and buttons to fetch results for each operation.

### How to Run

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Lalithabhimireddy13/number-api.git
   cd number-api
2.Install Dependencies

->For the backend:

cd number-api
npm install

->For the frontend:

cd number-frontend

3.tart the Backend Server

node server.js

4.Open the Frontend Application

Open index.html in a web browser. You can use a local server to serve the AngularJS files if necessary.

5.Test the API

Use Postman to test the API endpoints. Create requests with the required query parameters to see the results.
6.Project Structure

number-api/
├── server.js
├── package.json
└── node_modules/
   number-frontend/
    ├── index.html
    └── app.js
