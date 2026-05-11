import { NavLink, useNavigate } from "react-router-dom";
import { navItems } from "../data/siteData";

function SiteNav({ mobileOpen, setMobileOpen }) {
  const navigate = useNavigate();

  const closeMenu = () => setMobileOpen(false);

  return (
    <nav className="topbar">
      <div className="container nav-inner">
        <button
          className="brand brand-button"
          type="button"
          onClick={() => {
            closeMenu();
            navigate("/");
          }}
        >
          khalo fodil
        </button>

        <div className={`nav-links ${mobileOpen ? "open" : ""}`}>
          {navItems.map(([label, to]) => (
            <NavLink
              key={label}
              to={to}
              className={({ isActive }) => `nav-link-button${isActive ? " active" : ""}`}
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          ))}
          <NavLink className="button button-primary nav-cta" to="/reservations" onClick={closeMenu}>
            Book a Table
          </NavLink>
        </div>

        <button className="menu-toggle" type="button" aria-label="Toggle navigation" onClick={() => setMobileOpen((v) => !v)}>
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}

export default SiteNav;
