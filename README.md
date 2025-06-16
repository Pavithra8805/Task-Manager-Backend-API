# 📋 **Task Manager Backend API**

---

## ⏳ **Duration**
**2 Weeks**

---

## 🧰 **Technology Stack**

| **Layer**           | **Tech Used**                |
| ------------------- | ---------------------------- |
| **Backend**         | Node.js, Express.js          |
| **Authentication**  | JWT (JSON Web Token), bcrypt |
| **Validation**      | Joi or express-validator     |
| **Database**        | MongoDB (Mongoose)           |
| **Documentation**   | Swagger                      |
| **Deployment**      | Render                       |
| **Testing**         | Postman                      |
| **Version Control** | Git + GitHub                 |

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
## ⚙️ **Setup Instructions**

1. **Clone the repository**
```bash
git clone https://github.com/your-username/task-manager-backend-api.git
cd task-manager-backend-api
```
2. **Install dependencies**
```bash
npm install
```
3. **Setup environment variables**

* Create a `.env` file
* Copy contents from `.env.example` and fill in your details

4. **Run the project**

```bash
npm run dev
```
---

## 📮 **API Endpoints**

### 🔐 Authentication

* `POST /api/auth/signup` → Register a user
* `POST /api/auth/login` → Login and get token

### 📝 Tasks

* `POST /api/tasks` → Create a task *(requires login)*
* `GET /api/tasks` → Get all tasks *(requires login)*
* `GET /api/tasks/:id` → Get task by ID *(requires login)*
* `PUT /api/tasks/:id` → Update task *(requires login)*
* `DELETE /api/tasks/:id` → Delete task *(requires login)*

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

---

## 🚀 **Live Deployed Link**

🔗 [https://task-manager-backend-api-z2wl.onrender.com](https://task-manager-backend-api-z2wl.onrender.com)

---

## 🚀 **Walkthrough Video Link**
🔗 [https://drive.google.com/file/d/1pTSCOJFzGvkMV2iEhyujhm0l-48r6zuO/view?usp=sharing](https://drive.google.com/file/d/1pTSCOJFzGvkMV2iEhyujhm0l-48r6zuO/view?usp=sharing)

---

## 🚀 **LinkedIn Post**
🔗 [https://www.linkedin.com/pulse/my-capstone-journey-building-task-manager-backend-api-gurram-isl3c](https://www.linkedin.com/pulse/my-capstone-journey-building-task-manager-backend-api-gurram-isl3c)

---
## 🧪 **Test with Postman – Example JSON**

### 🔸 Signup

```json
POST /api/auth/signup
{
  "name": "Pavithra",
  "email": "pavi@example.com",
  "password": "12345678"
}
```

### 🔸 Login

```json
POST /api/auth/login
{
  "email": "pavi@example.com",
  "password": "12345678"
}
```

### 🔸 Create Task

```json
POST /api/tasks
{
  "title": "Finish Bootcamp",
  "status": "in progress",
  "dueDate": "2025-06-20",
  "userRef": "USER_ID"
}
```

### 🧪 Test Links

* [https://task-manager-backend-api-z2wl.onrender.com/api/auth/signup](https://task-manager-backend-api-z2wl.onrender.com/api/auth/signup)
* [https://task-manager-backend-api-z2wl.onrender.com/api/auth/login](https://task-manager-backend-api-z2wl.onrender.com/api/auth/login)
* [https://task-manager-backend-api-z2wl.onrender.com/api/tasks](https://task-manager-backend-api-z2wl.onrender.com/api/tasks)
