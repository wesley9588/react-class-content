export default function MenuCard({ item, type }) {
  return (
    <article className={`menu-card menu-card--${type}`}>
      <div className="menu-card__image-wrap">
        <img className="menu-card__image" src={item.image} alt={item.name} />
      </div>
      <div className="menu-card__content">
        <span className="menu-card__badge">{item.badge}</span>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <button type="button">Like</button>
      </div>
    </article>
  );
}
