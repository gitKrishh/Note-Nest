# 📝 NoteNest

A simple and clean full-stack **Sticky Notes App** built with **React** on the frontend and a **JSON-based API** on the backend. Users can create, view, and delete notes — with each note viewable at a unique route.

## 🚀 Features

- ✍️ Add sticky notes with title and content  
- 🔥 View notes in a responsive card layout  
- 🧹 Delete notes easily  
- 🔗 Unique route for each note (`/home/:id`)  
- 📦 Stores data in a `notes.json` file via Node.js backend  
- 🌐 Deployed frontend on **Firebase** and backend on **Railway**  

---

## 📁 Folder Structure

```
NoteNest/
├── client/          # React frontend
│   ├── components/  # NoteForm, NoteList, NoteCard, etc.
│   ├── pages/       # Home, NoteDetail
│   ├── App.jsx
│   └── index.js
├── server/          # Node.js backend
│   ├── notes.json   # JSON file used as database
│   ├── server.js    # Express server
├── README.md
```

---

## ⚙️ Tech Stack

- **Frontend:** React, React Router DOM  
- **Backend:** Node.js, Express  
- **Database:** JSON File (`notes.json`)  
- **Deployment:**
  - Frontend: [Firebase](https://firebase.google.com/)
  - Backend: [Railway](https://railway.com/)

---

## 🌍 Live Demo

- **Frontend:** [https://notenest-e5bca.web.app](https://notenest-e5bca.web.app)  
- **Backend API:** [https://note-nest-production.up.railway.app/](https://note-nest-production.up.railway.app/)

---

## 🛠️ Setup Instructions

### 1. Clone the Repo
```bash
git clone https://github.com/your-username/NoteNest.git
cd NoteNest
```

### 2. Start Backend (Node.js + Express)
```bash
cd backend
npm install
node server.js
```

### 3. Start Frontend (React)
```bash
cd frontend
npm install
npm start
```

> Make sure the backend is running on `http://localhost:5000` or update the API base URL in your React code.

---

## 🧠 Learning Concepts

This app demonstrates:

- How to use JSON files as a makeshift database  
- Connecting React frontend with a custom backend  
- Using React Router for dynamic routes  
- Deploying frontend and backend on separate platforms (Firebase + Railway)  

---

## 💡 Future Improvements

- Edit notes functionality  
- Markdown support for content  
- Authentication (e.g. Firebase Auth)  
- Cloud DB (MongoDB or Supabase)  
- Search and filter notes  

---

## 📜 License

MIT License  
© 2025 [Krish Prasad](https://github.com/gitKrishh)

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 🙏 Acknowledgements

Built with ❤️ to practice full-stack development without using a traditional database.
