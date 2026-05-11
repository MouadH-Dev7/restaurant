import { Link } from "react-router-dom";
import DarkMenuSection from "../components/DarkMenuSection";
import MenuSection from "../components/MenuSection";
import OptimizedImage from "../components/OptimizedImage";
import Seo from "../components/Seo";
import SharedFooter from "../components/SharedFooter";
import { menuItems } from "../data/siteData";

function MenuPage({ currentYear }) {
  return (
    <>
      <Seo
        title="Menu du restaurant | khalo fodil Alger"
        description="Parcourez le menu du restaurant khalo fodil a Alger avec inspirations algeriennes, americaines et europeennes."
        path="/menu"
      />
      <header className="menu-hero" id="menu-hero">
        <div className="menu-pattern" />
        <div className="container menu-hero-grid">
          <div className="menu-hero-copy">
            <span className="eyebrow">Experience Gastronomy</span>
            <h1>khalo fodil <span>Restaurant</span></h1>
            <p>A curated intersection of Algerian heritage and contemporary refinement in the heart of Algiers, Algeria&apos;s capital city.</p>
            <div className="hero-actions left">
              <Link className="button button-primary" to="/reservations">Book a Table</Link>
              <Link className="button button-outline" to="/gallery">View Gallery</Link>
            </div>
          </div>
          <div className="menu-hero-visual">
            <div className="menu-hero-card">
              <OptimizedImage
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsDs_yUjcUzuyZ8vsvPjf1tiyTuT-UoQK797-66aKn2340YSMVFexh2kqqUAH4Rgh7u79FVlIzO_9AoustP_2juIKlLkMyWp5P-PUH726i_Dddh66IO1xEavkYmRbUXB14wQuin3N1pjgZMmeVAGsGNYpMewjuT5RCgJukLSVrURK1dyTWeA2SwvXZzNjQrUSSn0qKlZVz5PCIs_pYzzefO5O97J1ruX_0xfZJ4fua1jcZ2fdxdywbpL9pq320JZYzkobDVJ0FjeI"
                alt="Restaurant interior"
                eager
              />
            </div>
            <div className="menu-glow" />
          </div>
        </div>
      </header>

      <main className="menu-page-content">
        <MenuSection id="algerian" number="01" eyebrow="Legacy of Algiers" title="Traditional Algerian Menu" items={menuItems.algerian} />
        <DarkMenuSection number="02" title="American Menu" eyebrow="Stateside Soul" items={menuItems.american} />
        <MenuSection id="european" number="03" eyebrow="Continental Elegance" title="European Menu" items={menuItems.european} compact />
      </main>

      <SharedFooter currentYear={currentYear} />
    </>
  );
}

export default MenuPage;
