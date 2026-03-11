# 🔗 URL Shortener Backend API

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Express](https://img.shields.io/badge/Express.js-Framework-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![License](https://img.shields.io/badge/License-MIT-blue)

A **URL Shortener backend application** built using **Node.js, Express.js, and MongoDB**.

This project allows users to **convert long URLs into short URLs**, manage authentication, and redirect users to the original links.

---

# 🚀 Features

✅ Generate short URLs
✅ Redirect to original URLs
✅ User Signup & Login
✅ Session-based authentication using cookies
✅ MongoDB database integration
✅ MVC architecture structure

---

# 🧠 System Architecture

```
Client Request
      │
      ▼
   Express Router
      │
      ▼
  Controllers
      │
      ▼
  Services (Auth / Logic)
      │
      ▼
   MongoDB Database
```

---

# 🛠 Tech Stack

Backend:

* **Node.js**
* **Express.js**

Database:

* **MongoDB**
* **Mongoose**

Other Tools:

* **UUID**
* **Cookie Parser**
* **EJS Template Engine**

---

# 📂 Project Structure

```
Backend-Project-Url-Shorter
│
├── controllers
│   ├── url.js
│   └── user.js
│
├── middleware
│   └── auth.js
│
├── modules
│   ├── url.js
│   └── user.js
│
├── routes
│   ├── staticRouter.js
│   ├── url.js
│   └── user.js
│
├── service
│   └── auth.js
│
├── public
│   ├── script.js
│   └── style.css
│
├── views
│   ├── home.ejs
│   ├── links.ejs
│   ├── login.ejs
│   └── signup.ejs
│
├── Style
│
├── connect.js
├── index.js
├── package.json
├── package-lock.json
└── .gitignore
```

---

# ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/git-rajudas/Backend-Project-Url-Shorter.git
```

Go into project folder:

```bash
cd Backend-Project-Url-Shorter
```
## 📦 Install Dependencies

Make sure you have **Node.js** installed.

Then run:

```bash
npm install
```

This will install all required packages listed in `package.json`.

---

## 📚 Project Dependencies

This project uses the following Node.js packages:

* **express** – Web framework
* **mongoose** – MongoDB ODM
* **ejs** – Template engine
* **cookie-parser** – Parse cookies from requests
* **jsonwebtoken** – Authentication using JWT
* **uuid** – Generate unique session IDs
* **nanoid** – Generate short unique IDs
* **shortid** – Short unique ID generator
* **nodemon** – Auto-restart server during development

Example `package.json` dependencies:

```json
"dependencies": {
  "cookie-parser": "^1.4.7",
  "ejs": "^4.0.1",
  "express": "^5.2.1",
  "jsonwebtoken": "^9.0.3",
  "mongoose": "^9.2.1",
  "nanoid": "^5.1.6",
  "nodemon": "^3.1.11",
  "shortid": "^2.2.17",
  "uuid": "^13.0.0"
}
```

---

# ▶ Run the Server

Start the server:

```bash
npm start
```

Server will start on:

```
http://localhost:8000
```

---

# 📡 API Endpoints

## 👤 Authentication

### Signup

```
POST /user/signup
```

Example Request Body:

```json
{
  "name": "Raju",
  "email": "raju@gmail.com",
  "password": "123456"
}
```

---

### Login

```
POST /user/login
```

Response:

```
Set-Cookie: uid=sessionId
```

---

## 🔗 URL Shortening

### Create Short URL

```
POST /url
```

Example Request Body:

```json
{
  "redirectURL": "https://google.com"
}
```

Response:

```json
{
  "shortId": "abc123"
}
```

---

### Redirect URL

```
GET /:shortId
```

Example:

```
http://localhost:8000/abc123
```

Redirects to:

```
https://google.com
```

---

# 🗄 Database Schema

Example URL document:

```json
{
  "shortId": "abc123",
  "redirectURL": "https://google.com",
  "visitHistory": []
}
```

Example User document:

```json
{
  "name": "Raju",
  "email": "raju@gmail.com",
  "password": "123456"
}
```

---

# 📚 What I Learned

While building this project, I learned:

* Backend development using Node.js
* Building REST APIs with Express
* Database design using MongoDB
* Session authentication using cookies
* MVC project architecture

---

# 🔮 Future Improvements

* 🔐 Password hashing using **bcrypt**
* 🔑 JWT authentication
* 📊 URL analytics (click tracking)
* 📱 API documentation with Swagger
* ☁ Deployment on cloud

---

# 👨‍💻 Author

**Raju Das**

GitHub:
[https://github.com/git-rajudas](https://github.com/git-rajudas)
