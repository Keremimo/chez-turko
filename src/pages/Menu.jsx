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
    const newCart = structuredClone(shoppingCart)
    newCart.push(obj)
    sessionStorage.setItem('react-shopping-cart', JSON.stringify(newCart))
    setShoppingCart(newCart)
  }
  return (
    <div className='join flex'>
      <Cart cart={shoppingCart} />
      <MenuList list={jsonData} cartModify={handleCartAdd} />
    </div>
  )
}

export default Menu
