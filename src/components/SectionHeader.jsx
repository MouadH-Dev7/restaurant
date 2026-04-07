function SectionHeader({ eyebrow, title, description, center = false }) {
  return (
    <div className={`section-header${center ? " center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export default SectionHeader;
