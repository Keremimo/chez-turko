import { useState } from 'react'
import jsonData from '../assets/menu.json'
import { MenuList, Cart } from '../components'

const Menu = () => {
  const [shoppingCart, setShoppingCart] = useState([])
  const handleCartAdd = (obj) => {
    const newCart = structuredClone(shoppingCart)
    newCart.push(obj)
    setShoppingCart(newCart)
  }
  return (
    <div className='join flex'>
      <MenuList list={jsonData} cartModify={handleCartAdd} />
      <Cart cart={shoppingCart} />
    </div>
  )
}

export default Menu
