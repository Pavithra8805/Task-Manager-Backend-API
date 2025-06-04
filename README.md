# 📋 **Task Manager Backend API**

---

## ⏳ **Duration**
**2 Weeks**

---

## 🧰 **Technology Stack**

| **Layer**            | **Tech Used**                                  |
|----------------------|------------------------------------------------|
| **Backend**          | Node.js, Express.js                            |
| **Authentication**   | JWT (JSON Web Token), bcrypt                   |
| **Validation**       | Joi or express-validator                       |
| **Database**         | Any (MongoDB, PostgreSQL, MySQL, SQLite, etc.) – student choice |
| **Documentation**    | Swagger                                        |
| **Deployment**       | Render or similar                              |
| **Testing**          | Postman                                        |
| **Version Control**  | Git + GitHub                                   |

---

## 🎯 **Project Goal**

Build a **secure**, **production-grade** Task Manager Backend API that includes:

- **User authentication**
- **Task CRUD operations** (Create, Read, Update, Delete)
- **Input validation**
- **Access control**
- **Clean documentation**

You’ll also learn to:

- **Deploy** your backend service  
- Create a **walkthrough video**  
- Showcase your project in a **LinkedIn post**

---

## ✅ **Key Requirements**

- Full **CRUD** support for **user-specific tasks**
- Secure authentication using **JWT**
- Input validation & centralized **error handling**
- **Protected routes** with access control
- **Environment variable-based configuration**
- **Documented API** using Swagger
- **GitHub Pull Requests** for each milestone
- **Final Deliverables**:
  - Walkthrough video
  - LinkedIn post

---

## 🗂️ **Suggested Folder Structure**

```
task-manager-api/
├── config/          # DB connection and config
├── controllers/     # Logic for routes
├── middlewares/     # Auth and validation
├── models/          # Task and User schema
├── routes/          # Auth and task routers
├── utils/           # Helper functions
├── .env.example
├── swagger.json     # Or Swagger setup via code
├── README.md
└── index.js         # App entry point

```

---

## 📌 **Key Guidelines**

- Use **JWT** for secure API access  
- **Validate** all user input to prevent bad data  
- Use proper **HTTP status codes** and consistent **JSON responses**  
- **Document** all API routes using Swagger  
- **Test** every route using Postman  
- Every **Pull Request** should have a **meaningful commit message**  
- Avoid messages like `"update"`

---

## 🌟 **Optional Bonus Features**

- Task filtering by **date** or **status**
- **Pagination** and **sorting**
- Email notifications **(via nodemailer)**
- **Task tagging**