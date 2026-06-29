import DrinkCard from "../components/DrinkCard";
import FoodCard from "../components/FoodCard";
import { drinks, foods } from "../data/menuItems";

export default function FoodPage() {
  return (
    <main className="page">
      <section className="hero">
        <p className="hero__eyebrow">React Component Practice</p>
        <h1>Food & Drink Menu</h1>
        <p className="hero__description">
          A small React project that renders repeated menu cards from data arrays.
          Components keep the page easy to read and easy to expand.
        </p>
      </section>

      <section className="menu-section" aria-labelledby="food-title">
        <div className="section-heading">
          <p>Food</p>
          <h2 id="food-title">Dessert Menu</h2>
        </div>
        <div className="menu-grid">
          {foods.map((food) => (
            <FoodCard key={food.id} item={food} />
          ))}
        </div>
      </section>

      <section className="menu-section" aria-labelledby="drink-title">
        <div className="section-heading">
          <p>Drink</p>
          <h2 id="drink-title">Drink Menu</h2>
        </div>
        <div className="menu-grid">
          {drinks.map((drink) => (
            <DrinkCard key={drink.id} item={drink} />
          ))}
        </div>
      </section>
    </main>
  );
}
