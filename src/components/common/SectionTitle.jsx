function SectionTitle({ eyebrow, title, description, className = "" }) {
  return (
    <div className={`brain-section-title ${className}`}>
      {eyebrow && (
        <div className="mb-3 inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700">
          {eyebrow}
        </div>
      )}
      <h2 className="brain-gradient-text">{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default SectionTitle;