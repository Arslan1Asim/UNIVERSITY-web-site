import { Outlet, NavLink } from 'react-router-dom';
import umtLogo from '../assets/UMT-Logo.jpg';

function Layout() {
  return (
    <div className="app-shell">
      <header className="navbar">
        <div className="navbar-inner">
          <div className="nav-brand">
            <img src={umtLogo} alt="UMT logo" className="nav-logo-image" />
            <div>
              <strong>University of Management & Technology</strong>
              <div className="nav-tag">Lahore, Pakistan</div>
            </div>
          </div>
          <nav className="nav-links">
            <NavLink end to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
            <NavLink to="/courses" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Programs</NavLink>
            <NavLink to="/admission" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Admission</NavLink>
            <NavLink to="/faculty" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Faculty</NavLink>
          </nav>
        </div>
      </header>
      <Outlet />
      <footer className="footer">
        © 2025 University of Management and Technology. All rights reserved.
      </footer>
    </div>
  );
}

export default Layout;