import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false
  }
]

function App () {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

function Header () {
  const style = { }
  // const style = { color: 'red', fontSize: '50px', textTransform: 'uppercase' }

  return (
    <header className='header'>
      <h1 style={style}>Fast Bear Pizza</h1>
    </header>
  )
}

function Menu () {
  const pizzas = pizzaData
  // const pizzas = []
  const numPizza = pizzas.length

  return (
    <main className='menu'>
      <h2>Our menu</h2>

      {numPizza > 0
        ? (
          <>
            <p>
              Authentic Italian cuisine. 6 creative dishes to choose from. All from out stone oven, all organic, all delicious.
            </p>

            <ul className='pizzas'>
              {pizzaData.map((pizza) => (
                <Pizza pizzaObj={pizza} key={pizza.name} />
              ))}
            </ul>
          </>
          )
        : (<p>We are still working on our menu. Come back later ⌛.</p>)}

      {/* <Pizza
        name='Pizza Funghi'
        ingredients='Tomato, mozarella, mushrooms, and onion'
        photoName='/pizzas/funghi.jpg'
        price={10}
      />

      <Pizza
        name='Pizza Spinaci'
        ingredients='Tomato, mozarella, spinach, and ricotta cheese'
        photoName='/pizzas/spinaci.jpg'
        price={15}
      /> */}
    </main>
  )
}

function Pizza ({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null

  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        {/* {pizzaObj.soldOut
          ? <span>SOLD OUT</span>
          : <span>{pizzaObj.price}</span>} */}

        <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
      </div>
    </li>
  )
}

function Footer () {
  const hour = new Date().getHours()
  const openHour = 10
  const closeHour = 18
  const isOpen = hour >= openHour && hour <= closeHour
  console.log(isOpen)

  // if (hour >= openHour && hour <= closeHour) {
  //   alert('We are currently open')
  // } else {
  //   alert('Sorry, we are closed')
  // }

  return (
    <footer className='footer'>
      {isOpen
        ? <Order closeHour={closeHour} openHour={openHour} />
        : <p>We are closed, but we return at {openHour}:00 to attend you.</p>}
    </footer>
  )
}

function Order ({ closeHour, openHour }) {
  return (
    <div className='order'>
      <p>
        We are open from {openHour}:00 to {closeHour}:00. Come visit us or order online.
      </p>
      <button className='btn'>Order</button>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
