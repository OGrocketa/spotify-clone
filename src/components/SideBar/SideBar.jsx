import { Link } from 'react-router-dom';
import './Sidebar.css';
import logo from "../../assets/logo.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <Link to= "/">
            <img src={logo} alt="" />
        </Link>
       
      </div>
      <ul className="sidebar-links">
        <li>
          <Link to="/" className="sidebar-link">
            <span role="img" aria-label="home">🏠</span> Home
          </Link>
        </li>
        <li>
          <Link to="/search" className="sidebar-link">
            <span role="img" aria-label="search">🔍</span> Search
          </Link>
        </li>
        <li>
          <Link to="/library" className="sidebar-link">
            <span role="img" aria-label="library">🎵</span> Your Library
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
