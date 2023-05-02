import { Link } from "react-router-dom";
import search from "./img/search.png";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-title">
        <h1>
          <Link
            to="/Home"
            className="header-text"
            style={{ textDecoration: "none" }}
          >
            New Kids
          </Link>
        </h1>
        <div className="search-icon">
          <img src={search} className="search-item" alt="search" />
        </div>
      </div>
    </div>
  );
}
