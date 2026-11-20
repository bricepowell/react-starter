import { NavLink, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import PostsPage from './pages/PostsPage.tsx'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <header className="app-header">
        <nav className="app-nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/posts">Posts</NavLink>
        </nav>
      </header>
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="*" element={<p>Page not found.</p>} />
        </Routes>
      </main>
    </div>
  )
}
