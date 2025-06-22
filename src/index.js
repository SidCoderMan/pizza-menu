import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const App = () => {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <div className="container">
      <Header />
      {numPizzas > 0 ? (
        <>
          <Menu />
        </>
      ) : (
        <h1>
          We are still cooking up this menu! Come back soon for the slice of
          your life!
        </h1>
      )}
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <h1>The Golden Slice</h1>
    </header>
  );
};

const Description = () => {
  return (
    <p>
      Authentic italian cuisine that is guaranteed to make your mouth water. All
      our ingredients are freshly harvested providing only the best most natural
      and delicious pizzas for y'all to enjoy. As a family-owned Texas business
      we pride ourselves on making sure your experience with us is nothing but
      the best a Texan can offer!
      <br></br>
      <br /> <b>2025 Winner of XYZ's Global Pizza Restauarant Competition</b>
      <br /> <b>5 Pizzalin Star Restauarant</b>
    </p>
  );
};

const Menu = () => {
  const pizzas = pizzaData;
  return (
    <main className="menu">
      <h2>=== Our Menu ===</h2>
      <Description />
      <ul className="pizzas">
        {pizzas.map((pizza) => (
          <Pizza
            name={pizza.name}
            ingredients={pizza.ingredients}
            imageSrc={pizza.photoName}
            price={pizza.price}
            soldOut={pizza.soldOut}
            key={pizza.name}
          ></Pizza>
        ))}
      </ul>
    </main>
  );
};

const Pizza = ({ soldOut, imageSrc, name, ingredients, price }) => {
  return (
    <li className={soldOut ? "pizza sold-out" : "pizza"}>
      <img src={imageSrc} alt="pizza" />
      <div>
        <h3>{name}</h3>
        <p>
          Made with {ingredients}
          <br></br>
          {soldOut ? <b>Sold Out!</b> : `$${price.toFixed(2)}`}
        </p>
      </div>
    </li>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const isOpen = hour >= 10 && hour <= 22;
  return (
    <footer className="footer">
      <Order isOpen={isOpen} />
    </footer>
  );
};

const Order = (props) => {
  const isOpen = props.isOpen;
  return (
    <div className="order">
      <p>
        1234 Skibidi Lane | Support | 128-435-5555 | Open from 10 AM - 10 PM |
        <b>
          {isOpen
            ? " We are Currently Open Come Check Us Out!"
            : "We are Closed! Come Another Time!"}
        </b>
      </p>
      <button className="btn"> Order Now! </button>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
