# Rule Engine Application

A simple 3-tier Rule Engine Application built with Node.js, Express, React, and Vite. This application allows users to create and evaluate rules based on user-defined conditions like age, department, income, and spend.

## Features

- Create conditional rules using a simple string format.
- Evaluate rules against user-provided data in JSON format.
- Dynamic rule creation and evaluation using an Abstract Syntax Tree (AST).
- A user-friendly interface built with React for input and output display.
- Alerts displaying the result of rule evaluation (True or False).

## Tech Stack

- **Frontend:** React, Vite, Axios
- **Backend:** Node.js, Express
- **Data Storage:** In-memory (not persistent, can be modified to use a database)

## Installation

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   cd <your-repo-name>

2. **Install backend dependencies:**
     Navigate to the backend directory and install the dependencies:
     ```bash
     cd backend
     npm install
3. **Install frontend dependencies:**
    Navigate to the frontend directory and install the dependencies:
     ```bash
     cd ../frontend
     npm install

## Running the Application

1. ### Start the backend server:
       Navigate to the backend directory and start the server:
         ```bash
        cd backend
        node server.js
      The server will run on http://localhost:5000.

2. ###  Start the frontend development server:
    In a new terminal, navigate to the frontend directory and start the development server:

       ```bash
       cd frontend
       npm run dev
The frontend will run on http://localhost:5173.


## Usage

1. - Open the application in your browser at http://localhost:5173.
2. - Enter a Rule String (e.g., a > 10 AND b < 20).
3. - Enter a Data (JSON) (e.g., {"a": 15, "b": 5}).
4. - Click on Submit to evaluate the rule against the provided data.
5. - An alert will display the result of the evaluation (True or False).

## Sample Input

### Rule String

a > 10 AND b < 20

### Data (JSON)

{
  "a": 15,
  "b": 5
}


## Acknowledgements
- Node.js
- Express
- React
- Vite