function DarkMenuSection({ number, eyebrow, title, items }) {
  return (
    <section className="american-section">
      <div className="container">
        <div className="menu-section-heading on-dark">
          <div>
            <span className="menu-kicker light">{eyebrow}</span>
            <h2>{title}</h2>
          </div>
          <div className="menu-index dim">{number}</div>
        </div>

        <div className="american-grid">
          {items.map(([name, description], index) => (
            <article className={`american-card${index === 1 ? " featured" : ""}`} key={name}>
              <div className="american-head">
                <h3>{name}</h3>
                {index === 1 ? <span className="menu-badge">Chef&apos;s Pick</span> : null}
              </div>
              <p>{description}</p>
            </article>
          ))}
        </div>

        <div className="american-bottom">
          <div className="side-list">
            <h4>The Sides</h4>
            <div className="side-row"><span>Hot Dogs</span></div>
            <div className="side-row"><span>French Fries</span></div>
          </div>
          <div className="side-list">
            <h4>&nbsp;</h4>
            <div className="side-row"><span>Chicken Nuggets</span></div>
            <div className="side-row"><span>Onion Rings</span></div>
          </div>
          <div className="milkshake-card">
            <h4>Milkshakes</h4>
            <p>Thick hand-spun shakes with premium vanilla bean or dark chocolate ganache.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DarkMenuSection;
