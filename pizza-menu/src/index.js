import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import '../public/pizzas';
// import './pizzas';
// public/pizzas/
// import {pizzaData} from '../public/data';
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



function App() {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>
        </header>
    );
}

function Menu(){
    return (
        <main className="menu">
            <h2>Our Menu</h2>
            <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
            <div className="pizzas">
                {pizzaData.map((pizza) => <Pizza pizza={pizza} key={pizza.name}/>)}
                {/* <Pizza pizzaData={pizzaData[0]}/> */}
            </div>
        </main>
    );
}

function Pizza({pizza}){
    // console.log(pizza.name);
    return (
        <div className={`pizza ${pizza.soldOut ? 'sold-out': ''}`}>
            <img src = {pizza.photoName} alt ="no Img yet"/>
            <div>
                <h3>{pizza.name}</h3>
                <p>{pizza.ingredients}</p>
                <span>{pizza.soldOut? "Sold Out": pizza.price}</span>
            </div>
        </div>
    );
}

function Footer(){
    return (
    <footer className="footer order">
        We are open until 22:00, Order Now to get Instant Discounts.
        {/* <br></br> */}
        <button className = "btn"> Order Now!</button>
        
    </footer>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)