import { NavLink, Outlet } from 'react-router-dom'
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
        <Outlet />
      </main>
    </div>
  )
}
