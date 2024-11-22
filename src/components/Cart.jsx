import { Link } from "react-router-dom"

const Cart = ({ cart, setShoppingCart, drawer }) => {
  const handleAddition = (e) => {
    const newCart = [...cart]
    const { value: index } = e.target
    newCart[index].quantity += 1
    sessionStorage.setItem('react-shopping-cart', JSON.stringify(newCart))
    setShoppingCart(newCart)
  }

  const handleRemoval = (e) => {
    const newCart = [...cart]
    const { value: index } = e.target
    newCart[index].quantity -= 1
    if (newCart[index].quantity <= 0) {
      newCart.splice(index, 1)
    }
    sessionStorage.setItem('react-shopping-cart', JSON.stringify(newCart))
    setShoppingCart(newCart)
  }

  const DrawerToggle = () => {
    return (
      <input id="shopCart" type="checkbox" defaultChecked={drawer} className="drawer-toggle" />
    )
  }

  const renderedCart = cart.map((item, index) => (
    <li key={index}>
      <div>
        <div className="buttons flex">
          <button onClick={handleRemoval} value={index} className="btn btn-sm btn-error mr-2">-</button>
          <button onClick={handleAddition} value={index} className="btn btn-sm btn-success">+</button>
        </div>
        <h2>{item.name}</h2>
        <span className="font-bold">X{item.quantity}</span>
        <span>{(item.quantity * (item.price)) / 100} €</span>
      </div>
    </li>
  ))
  const initialPrice = 0
  const totalPrice = (cart.reduce((accumulator, obj) => accumulator + (obj.price * obj.quantity), initialPrice)) / 100
  return (
    <div className="drawer drawer-end fixed z-30 w-16 right-2 top-2">
      <DrawerToggle />
      <div className="drawer-content mt-auto ml-auto">
        {/* Page content here */}
        <label htmlFor="shopCart" className="btn btn-primary drawer-button">
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
          </svg>
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="shopCart" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-1/3 min-w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <p className="text-2xl font-bold">Your Cart</p>
            <ul>{renderedCart}</ul>
            <p className="total-price font-bold">Total: <span className="ml-auto">{totalPrice > 0 ? totalPrice + " €" : "Your cart is empty."}</span></p>
            <Link to={'order'} className="btn btn-primary">Checkout</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Cart
