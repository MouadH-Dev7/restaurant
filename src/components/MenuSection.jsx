function MenuSection({ id, number, eyebrow, title, items, compact = false }) {
  return (
    <section className="menu-story-section" id={id}>
      <div className="container">
        <div className="menu-section-heading">
          <div>
            <span className="menu-kicker">{eyebrow}</span>
            <h2>{title}</h2>
          </div>
          <div className="menu-index">{number}</div>
        </div>

        <div className={compact ? "dish-list-grid compact-grid" : "dish-list-grid"}>
          {items.map(([name, description]) => (
            <article className="dish-line" key={name}>
              <div className="dish-line-head">
                <h3>{name}</h3>
                <div className="dish-divider" />
              </div>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MenuSection;
