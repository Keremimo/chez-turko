import { useState } from 'react'
import jsonData from '../assets/menu.json'
import { MenuList, Cart } from '../components'

const Menu = () => {
  const [shoppingCart, setShoppingCart] = useState(() => {
    if (sessionStorage.getItem('react-shopping-cart')) {
      return JSON.parse(sessionStorage.getItem('react-shopping-cart'))
    }
    else return []

  })
  const handleCartAdd = (obj) => {
    const newCart = [...shoppingCart]
    if (newCart[newCart.findIndex(item => item.name === obj.name)]) {
      newCart[newCart.findIndex(item => item.name === obj.name)].quantity += 1
      sessionStorage.setItem('react-shopping-cart', JSON.stringify(newCart))
      setShoppingCart(newCart)
    }
    else {
      obj.quantity = 1
      newCart.push(obj)
    }
    sessionStorage.setItem('react-shopping-cart', JSON.stringify(newCart))
    setShoppingCart(newCart)
  }
  return (
    <div className='join flex'>
      <Cart cart={shoppingCart} setShoppingCart={setShoppingCart} />
      <MenuList list={jsonData} cartModify={handleCartAdd} />
    </div>
  )
}

export default Menu
