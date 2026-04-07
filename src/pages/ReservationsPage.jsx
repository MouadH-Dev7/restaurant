import { useState } from "react";
import { Link } from "react-router-dom";
import OptimizedImage from "../components/OptimizedImage";
import Seo from "../components/Seo";
import SectionHeader from "../components/SectionHeader";
import SharedFooter from "../components/SharedFooter";
import { faqItems, infoItems } from "../data/siteData";

function ReservationsPage({ currentYear }) {
  const [form, setForm] = useState({
    date: "",
    time: "19:00",
    guests: "2",
    phone: "",
    notes: "",
  });

  const setField = (key, value) => setForm((current) => ({ ...current, [key]: value }));

  return (
    <>
      <Seo
        title="Reservations | Algiers Fusion"
        description="Reserve your table at Algiers Fusion in Algiers. Consultez les informations pratiques et demandez votre reservation en ligne."
        path="/reservations"
      />
      <section className="reservation-hero" id="reservations-hero">
        <div className="reservation-hero-media">
          <OptimizedImage
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEqvFiCsBoRD9SkOx40n-eEVC2BevjS27nWEj57VRWXBKffwsEKYXqPtDGCRNwjjv7qf0qUPkOeKzdoDDgfDNYmIZ2mAfn3zOSwBPjwqdwd6evo-BlYJTRtgVMMo15w5QoMLyDyV3QSgCCHdiIINhrkEtjhlf_EffzkM3XBxKkKqJyAWwZfjwPzDL6bXrmJ444XRCzCr1gcJQYavaPw3jwiiiOFs7lFA7eH3NUQTwvDWEBZu8S3N-MLnnMKTuDNinUtD44CCsdK8c"
            alt="Elegant dining room"
            eager
          />
          <div className="reservation-overlay" />
        </div>
        <div className="reservation-hero-copy">
          <span className="eyebrow hero-eyebrow">L&apos;Art de la Table</span>
          <h1>Reservez votre Table</h1>
          <div className="hero-divider" />
        </div>
      </section>

      <section className="section reservation-section">
        <div className="container reservation-grid">
          <div className="reservation-form-card" id="reservation-form">
            <header className="reservation-header">
              <h2>Details de la Reservation</h2>
              <p>Veuillez remplir les informations ci-dessous pour garantir votre experience culinaire a Alger, capitale de l&apos;Algerie.</p>
            </header>

            <form className="reservation-form" onSubmit={(event) => event.preventDefault()}>
              <div className="reservation-fields">
                <label className="field">
                  <span>Date</span>
                  <input type="date" value={form.date} onChange={(e) => setField("date", e.target.value)} />
                </label>
                <label className="field">
                  <span>Heure</span>
                  <select value={form.time} onChange={(e) => setField("time", e.target.value)}>
                    {["19:00", "19:30", "20:00", "20:30", "21:00", "21:30"].map((time) => (
                      <option key={time}>{time}</option>
                    ))}
                  </select>
                </label>
                <label className="field">
                  <span>Nombre de convives</span>
                  <input type="number" min="1" max="12" value={form.guests} onChange={(e) => setField("guests", e.target.value)} />
                </label>
                <label className="field">
                  <span>Telephone</span>
                  <input type="tel" placeholder="+213 --- -- -- --" value={form.phone} onChange={(e) => setField("phone", e.target.value)} />
                </label>
              </div>
              <label className="field full">
                <span>Demandes Speciales</span>
                <textarea rows="4" placeholder="Allergies, anniversaires, ou preferences de table..." value={form.notes} onChange={(e) => setField("notes", e.target.value)} />
              </label>
              <button className="button button-primary reservation-submit" type="submit">Confirmer la Reservation</button>
            </form>
          </div>

          <aside className="reservation-sidebar">
            <SectionHeader eyebrow="Contact & Acces" title="Informations utiles" />
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
            <div className="reservation-map-card">
              <OptimizedImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcXrCpCvvnPs9ho3zWXTQn1a29hpe3XwHfpclSOWXQk448lyhQuozd-unsB32R3eMuPJ9vTWi6pt1V4fjKsJHz777tKHFvdraVR6YmiCqXs5l0DqDFU6sgEPyO-9pHPPXBmsPc-ORzwC4rH2CdYgVBOC8ekR3L0Is3gQRWji-a2O-EVPueELJiZ7o8QMGkg_dVPChUZIcVhuGO7hsnPdr_v8rmCitv2KAI0UpmzH0wV1sEmDuxXsC1EU6eQ3In2GQYWCVivr_RJ8Q" alt="Map of Algiers" />
              <div className="map-pin">AF</div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <SectionHeader eyebrow="Preparer votre visite" title="Questions Frequentes" center />
          <div className="faq-grid">
            {faqItems.map(([title, text], index) => (
              <article className={`faq-card ${index % 2 === 0 ? "primary" : "secondary"}`} key={title}>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="centered-action">
            <Link className="button button-outline" to="/gallery">Voir la galerie avant votre visite</Link>
          </div>
        </div>
      </section>

      <SharedFooter currentYear={currentYear} />
    </>
  );
}

export default ReservationsPage;
