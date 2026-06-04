# Express.js & EJS Form Handling Practice

This is a beginner-friendly practice project built using **Node.js**, **Express.js**, and **EJS**. The project demonstrates how to create forms, handle user input, process form submissions, and render dynamic data using EJS templates.

## Objectives

* Learn Express.js fundamentals
* Understand EJS templating
* Handle form submissions using POST requests
* Access form data with `req.body`
* Render dynamic content in EJS views
* Practice routing and middleware

## Technologies Used

* Node.js
* Express.js
* EJS
* HTML5
* CSS3

## Project Features

* Home page with form
* User input collection
* Form validation
* Dynamic data rendering
* Success page after submission
* Clean and simple UI

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd express-ejs-practice
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Project

```bash
npm start
```

or

```bash
nodemon app.js
```

## Folder Structure

```text
express-ejs-practice/
│
├── views/
│   ├── index.ejs
│   ├── result.ejs
│
├── public/
│   ├── css/
│   └── images/
│
├── app.js
├── package.json
└── README.md
```

## Example Route

```javascript
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/submit", (req, res) => {
  const { name, email } = req.body;

  res.render("result", {
    name,
    email
  });
});
```

## Learning Outcomes

After completing this project, you will be able to:

* Create Express applications
* Configure EJS as a view engine
* Build and process HTML forms
* Pass data from backend to frontend
* Render dynamic web pages

## Future Improvements

* Add MongoDB integration
* Store submitted form data
* Add authentication
* Improve UI with Bootstrap or Tailwind CSS
* Add CRUD operations

## Author

Created as a practice project to learn Express.js and EJS.
