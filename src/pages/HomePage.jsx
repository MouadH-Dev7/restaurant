import { useState } from "react";
import { Link } from "react-router-dom";
import OptimizedImage from "../components/OptimizedImage";
import Seo from "../components/Seo";
import SectionHeader from "../components/SectionHeader";
import SharedFooter from "../components/SharedFooter";
import { galleryImages, infoItems, previewTabs } from "../data/siteData";

function HomePage({ currentYear }) {
  const [tab, setTab] = useState("Entrees");

  return (
    <>
      <Seo
        title="khalo fodil | Restaurant gastronomique a Alger"
        description="Decouvrez khalo fodil, restaurant gastronomique a Alger, avec cuisine elegante, galerie culinaire et reservation en ligne."
        path="/"
      />
      <header className="hero" id="hero">
        <div className="hero-overlay" />
        <div className="hero-image" />
        <div className="container hero-content">
          <span className="eyebrow hero-eyebrow">Bienvenue chez khalo fodil</span>
          <h1>Une experience culinaire inoubliable</h1>
          <p>khalo fodil marie l'elegance des grandes tables, l'ame algerienne et l'energie d'Alger, capitale de l'Algerie, pour offrir une destination culinaire memorisable.</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/reservations">Reserver une table</Link>
            <Link className="button button-secondary" to="/menu">Voir le menu</Link>
          </div>
        </div>
      </header>

      <section className="section about-section" id="about">
        <div className="container about-grid">
          <div className="about-visual">
            <div className="about-photo main-photo">
              <OptimizedImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgcoaM7oMtjH8hWzJmaGB0RfEQ45NvdieSrtwPyXdwFGM4INiBm2-RDJgCpVN1YboSw1v5k7Um7kXgUp76dcB2Uj383d05dGzB-HNMSP-1r-weGojgeRbQzpHfqcyykiSwfIKCh4yQZLu14bXBStR3v4bvVH6J7paFVdnAC-eplYAwWdc2EcSAzNcmldCS1DhKfQ7ZPunWSFkexrChZV44vUhI-a4fiPLRiRgpn-QDLyHXjnzP8ZlnyC1lKlxsFPb3mLtQ-MnGjmk" alt="Chef plating a refined dish" />
            </div>
            <div className="about-photo floating-photo">
              <OptimizedImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9IRCtpTK35dv8uaZzhFYgG5ZJKz1uF2jBIJhIcdGCaQSK8jtjU60q-fHiNTvERkEXs2rMgLPDrSQ2lq9W_vwrEdXl5f4adDQlb7bJxjs3XVqD7rEetlDRS-vAEcHOPomEgfSBCrQaIVBN31_xvlWWnagWDhJ6QLN3QipWvWuJYZBXWfmSOOtSt8rMAlaA2DaNrRc81DMPCBNgfIlyfS7EZewE4fzoQzJP4mrZHy6Sp6fKOMdoDiRHT5fJNBNexPv8zSmNihWyqOk" alt="Cellar" />
            </div>
          </div>

          <div className="about-copy">
            <SectionHeader eyebrow="Notre Heritage" title="La quintessence du gout et de l'elegance" />
            <p className="lead">Depuis notre ouverture, khalo fodil s'efforce de transcender la simple degustation pour offrir un voyage sensoriel complet. Notre cuisine repose sur la purete des produits, l'innovation technique et un service d'une attention rare.</p>
            <div className="feature-grid">
              {[
                ["01.", "Qualite", "Sourcing rigoureux aupres des meilleurs producteurs."],
                ["02.", "Fraicheur", "Une carte evolutive au rythme des saisons."],
                ["03.", "Service", "Une hospitalite sur mesure et discrete."],
              ].map(([n, t, d]) => (
                <article className="feature-card" key={t}>
                  <span className="feature-index">{n}</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section menu-section">
        <div className="container">
          <SectionHeader eyebrow="Carte Gastronomique" title="Saveurs d'Exception" center />
          <div className="tabs">
            {Object.keys(previewTabs).map((name) => (
              <button key={name} className={tab === name ? "tab active" : "tab"} type="button" onClick={() => setTab(name)}>
                {name}
              </button>
            ))}
          </div>
          <div className="menu-grid">
            {previewTabs[tab].map(([title, description]) => (
              <article className="menu-item" key={title}>
                <div className="menu-head"><h3>{title}</h3></div>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <div className="centered-action">
            <Link className="button button-outline" to="/menu">Decouvrir la carte complete</Link>
          </div>
        </div>
      </section>

      <section className="section gallery-section" id="gallery">
        <div className="container">
          <SectionHeader eyebrow="Immersion" title="Galerie Culinaire" description="Un apercu visuel de nos creations signatures et de l'atmosphere feutree de khalo fodil." />
          <div className="gallery-grid">
            {galleryImages.slice(0, 5).map(([src, label, className]) => (
              <div className={className} key={label}>
                <OptimizedImage src={src} alt={label} />
              </div>
            ))}
          </div>
          <div className="centered-action">
            <Link className="button button-outline" to="/gallery">Voir toute la galerie</Link>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container contact-grid">
          <div>
            <SectionHeader eyebrow="Contact & Acces" title="Nous rendre visite" />
            <div className="info-list">
              {infoItems.map(([title, content, icon]) => (
                <article className="info-item" key={title}>
                  <div className="info-icon">{icon}</div>
                  <div>
                    <h3>{title}</h3>
                    <p>{content}</p>
                  </div>
                </article>
              ))}
            </div>
            <Link className="button button-primary" to="/reservations">Reserver votre table</Link>
          </div>
          <div className="map-card">
            <OptimizedImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcXrCpCvvnPs9ho3zWXTQn1a29hpe3XwHfpclSOWXQk448lyhQuozd-unsB32R3eMuPJ9vTWi6pt1V4fjKsJHz777tKHFvdraVR6YmiCqXs5l0DqDFU6sgEPyO-9pHPPXBmsPc-ORzwC4rH2CdYgVBOC8ekR3L0Is3gQRWji-a2O-EVPueELJiZ7o8QMGkg_dVPChUZIcVhuGO7hsnPdr_v8rmCitv2KAI0UpmzH0wV1sEmDuxXsC1EU6eQ3In2GQYWCVivr_RJ8Q" alt="Map of Algiers" />
          </div>
        </div>
      </section>

      <SharedFooter currentYear={currentYear} />
    </>
  );
}

export default HomePage;
