import { NavLink } from "react-router-dom";

function SharedFooter({ currentYear }) {
  return (
    <footer className="footer">
      <div className="container footer-grid footer-grid-rich">
        <div>
          <h3>Algiers Fusion</h3>
          <p>Artisanal Excellence. Une destination gastronomique ou chaque sens est sollicite.</p>
        </div>
        <div>
          <h4>Navigation</h4>
          <div className="footer-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/reservations">Reservations</NavLink>
          </div>
        </div>
        <div>
          <h4>Contact</h4>
          <p>12 Rue Didouche Mourad</p>
          <p>+213 (0) 21 45 67 89</p>
          <p>Lun - Sam: 18:00 - 23:00</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>(c) {currentYear} Algiers Fusion. Artisanal Excellence.</p>
      </div>
    </footer>
  );
}

export default SharedFooter;
