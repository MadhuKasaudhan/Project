import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link className="brand" to="/">
          <span className="brand-badge">BOCC</span>
          <span>BOCC</span>
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          <Link to="/">Home</Link>
          <Link to="/verification-progress">Program</Link>
          <Link to="/verify-email">Clubs</Link>
          <Link to="/application-rejected">Events</Link>
          <Link to="/verification-progress">Resources</Link>
        </nav>

        <div className="nav-actions">
          <button className="nav-link-btn" type="button">Login</button>
          <button className="nav-cta" type="button">Register</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
