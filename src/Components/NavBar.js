import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container">
        <Link className="navbar-brand text-white" to="/">
          WikiCountries
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
