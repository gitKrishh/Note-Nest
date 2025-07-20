# 📝 NoteNest

A clean and functional full-stack **Sticky Notes App** built with **React** on the frontend and a **Node.js + JSON-based backend**. Users can create, view, and delete notes — each viewable on a unique route.

## 🚀 Features

- ✍️ Add sticky notes with title and content  
- 🔥 View notes in a responsive, card-based layout  
- 🧹 Delete notes with one click  
- 🔗 Each note accessible via a unique route (`/home/:id`)  
- 📦 Data stored in a `notes.json` file using a lightweight API  
- 🌐 Fully deployed using **Firebase** (frontend) and **Railway** (backend)  

---

## 📁 Folder Structure

NoteNest/
├── client/          # React frontend
│   ├── components/  # NoteForm, NoteList, NoteCard, etc.
│   ├── pages/       # Home, NoteDetail
│   ├── App.jsx
│   └── index.js
├── server/          # Node.js backend
│   ├── notes.json   # JSON file acting as the database
│   ├── server.js    # Express server
├── README.md

---

## ⚙️ Tech Stack

- Frontend: React, React Router DOM, Vite  
- Backend: Node.js, Express  
- Database: JSON File (`notes.json`)  
- Deployment:
  - Frontend: Firebase
  - Backend: Railway

---

## 🌍 Live Demo

- Frontend: https://notenest-e5bca.web.app  
- Backend API: https://note-nest-production.up.railway.app/


---

## 🛠️ Setup Instructions

1. Clone the Repo
    git clone https://github.com/gitKrishh/Note-Nest.git
    cd Note-Nest

2. Start the Backend (Node.js + Express)
    cd server
    npm install
    node server.js

    The backend will run at http://localhost:8000 by default.

3. Start the Frontend (React + Vite)
    cd client
    npm install
    npm run dev

    Make sure the backend is running and the API base URL is set properly in your frontend code.

---

## 🧠 Learning Concepts

This project demonstrates:

- Building full-stack apps with no external DB
- Serving and reading data from a JSON file
- Connecting React to a custom Node.js backend
- Creating dynamic routes with React Router
- Deploying frontend and backend on separate platforms (Firebase + Railway)

---

## 💡 Future Improvements

- Edit notes functionality  
- Markdown support for content  
- Authentication via Firebase Auth  
- Cloud database integration (MongoDB or Supabase)  
- Search and filter functionality  

---

## 📜 License

MIT License  
© 2025 Krish Prasad (https://github.com/gitKrishh)

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to improve.

---

## 🙏 Acknowledgements

Built with ❤️ as a personal productivity tool and full-stack learning project — using a simple JSON backend to keep things lightweight and transparent.