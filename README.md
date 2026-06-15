# 🎬 Netflix Clone

A Netflix-inspired frontend built with React, Redux Toolkit, and Firebase — featuring movie browsing, liked movies, and user authentication. Deployed on Netlify.

🔗 **Live Demo:** [https://uday-dara-react.netlify.app/](https://uday-dara-react.netlify.app/)  
🔗 **Backend Repo:** [github.com/udayrajdara/netflix-api](https://github.com/udayrajdara/netflix-api)  
🔗 **Backend API:** [netflix-api-9k8a.onrender.com](https://netflix-api-9k8a.onrender.com)

---

## 📸 Preview

<p align="center">
  <img src="https://github.com/udayrajdara/netflix-clone/blob/main/src/Pages/images/netflix-clone%20ss%201.png?raw=true" width="48%" alt="Netflix Clone Home">
  <img src="https://github.com/udayrajdara/netflix-clone/blob/main/src/Pages/images/netflix-clone%20ss%202.png?raw=true" width="48%" alt="Netflix Clone Movies">
</p>

<p align="center">
  <img src="https://github.com/udayrajdara/netflix-clone/blob/main/src/Pages/images/netflix-clone%20ss%203.png?raw=true" width="48%" alt="Netflix Clone TV Shows">
  <img src="https://github.com/udayrajdara/netflix-clone/blob/main/src/Pages/images/netflix-clone%20ss%204.png?raw=true" width="48%" alt="Netflix Clone My List">
</p>


---

## ✨ Features

- 🔐 User authentication (Sign up / Sign in / Sign out) via Firebase
- 🎥 Browse movies and TV shows fetched from TMDB
- ❤️ Like and unlike movies — saved to MongoDB via the backend API
- 🗂️ View your personal liked movies list
- 📱 Fully responsive design
- ⚡ Global state management with Redux Toolkit

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI library |
| Redux Toolkit | Global state management |
| React Router v6 | Client-side routing |
| Firebase v10 | User authentication |
| Axios | API requests to backend |
| Ant Design | UI components |
| Bootstrap 5 | Responsive layout & utilities |
| React Icons | Icon library |
| Netlify | Hosting & deployment |

---

## 📁 Project Structure

```
netflix-clone/
├── public/
│   └── index.html
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Page-level components (Home, Login, MyList, etc.)
│   ├── store/             # Redux Toolkit slices & store
│   ├── utils/             # Firebase config & helper functions
│   ├── App.js             # Routes & app entry
│   └── index.js
├── .env                   # Environment variables (not committed)
├── package.json
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v16+
- npm
- A [Firebase](https://firebase.google.com/) project (for auth)
- A [TMDB API key](https://www.themoviedb.org/settings/api) (for movie data)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/udayrajdara/netflix-clone.git

# 2. Navigate into the project
cd netflix-clone

# 3. Install dependencies
npm install

# 4. Set up environment variables
touch .env
# Fill in your values (see below)

# 5. Start the development server
npm start
```

App runs at `http://localhost:3000`.

---

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id

REACT_APP_TMDB_API_KEY=your_tmdb_api_key
REACT_APP_API_URL=https://netflix-api-9k8a.onrender.com
```

> ⚠️ Never commit your `.env` file — it's already in `.gitignore`.

---

## 🌐 Deployment

Deployed on [Netlify](https://netlify.com).

To deploy your own version:

1. Push your code to GitHub
2. Connect your repo on Netlify
3. Set environment variables in the Netlify dashboard
4. Set the build command to `npm run build` and publish directory to `build/`
5. Deploy!

> The `CI=false` flag in the build script prevents Netlify from treating warnings as errors.

---

## 🔗 Related

- **Backend Repo:** [github.com/udayrajdara/netflix-api](https://github.com/udayrajdara/netflix-api)
- **Live API:** [netflix-api-9k8a.onrender.com](https://netflix-api-9k8a.onrender.com)
- **TMDB API Docs:** [developers.themoviedb.org](https://developers.themoviedb.org/3)
- **Firebase Docs:** [firebase.google.com/docs](https://firebase.google.com/docs)

---

## 📄 License

This project is for educational purposes only. Netflix branding belongs to Netflix, Inc.
