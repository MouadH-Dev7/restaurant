import { Link } from "react-router-dom";
import OptimizedImage from "../components/OptimizedImage";
import Seo from "../components/Seo";
import SectionHeader from "../components/SectionHeader";
import SharedFooter from "../components/SharedFooter";
import { galleryImages } from "../data/siteData";

function GalleryPage({ currentYear }) {
  return (
    <>
      <Seo
        title="Galerie photo | Algiers Fusion Alger"
        description="Decouvrez la galerie photo d'Algiers Fusion a Alger : salle, plats signatures, desserts et ambiance du restaurant."
        path="/gallery"
      />
      <header className="menu-hero gallery-hero" id="gallery-hero">
        <div className="menu-pattern" />
        <div className="container menu-hero-grid">
          <div className="menu-hero-copy">
            <span className="eyebrow">Visual Journey</span>
            <h1>Galerie <span>Algiers Fusion</span></h1>
            <p>Un parcours visuel entre architecture feutree, cuisine d&apos;auteur et instants de service qui racontent l&apos;identite du restaurant.</p>
            <div className="hero-actions left">
              <Link className="button button-primary" to="/reservations">Book a Table</Link>
              <Link className="button button-outline" to="/menu">Explore Menu</Link>
            </div>
          </div>
          <div className="gallery-hero-stack">
            <div className="gallery-stack-card large">
              <OptimizedImage src={galleryImages[0][0]} alt={galleryImages[0][1]} eager />
            </div>
            <div className="gallery-stack-row">
              <div className="gallery-stack-card">
                <OptimizedImage src={galleryImages[1][0]} alt={galleryImages[1][1]} />
              </div>
              <div className="gallery-stack-card">
                <OptimizedImage src={galleryImages[2][0]} alt={galleryImages[2][1]} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section gallery-highlights">
        <div className="container">
          <SectionHeader eyebrow="Curated Frames" title="Trois regards sur l'experience" center />
          <div className="highlight-grid">
            {[
              ["Ambiance", "Une immersion visuelle dans notre salle principale et les jeux de lumiere."],
              ["Cuisine", "Des gros plans sur les assiettes signatures, les finitions et la main du chef."],
              ["Moments", "Cocktails, desserts, dressage et rituels qui rendent l'experience memorable."],
            ].map(([title, text]) => (
              <article className="highlight-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section gallery-page-section" id="gallery-grid-page">
        <div className="container">
          <SectionHeader eyebrow="Signature Collection" title="Une selection d'instants iconiques" />
          <div className="gallery-grid gallery-grid-page">
            {galleryImages.map(([src, label, className]) => (
              <figure className={`${className} gallery-figure`} key={label}>
                <OptimizedImage src={src} alt={label} />
                <figcaption>{label}</figcaption>
              </figure>
            ))}
          </div>
          <div className="centered-action">
            <Link className="button button-primary" to="/reservations">Reserve Your Visit</Link>
          </div>
        </div>
      </section>

      <SharedFooter currentYear={currentYear} />
    </>
  );
}

export default GalleryPage;
