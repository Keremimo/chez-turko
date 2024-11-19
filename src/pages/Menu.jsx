import { useState } from 'react'
import jsonData from '../assets/menu.json'
import { MenuList, Cart } from '../components'

const Menu = () => {
  const [shoppingCart, setShoppingCart] = useState([])
  return (
    <div className='join flex'>
      <MenuList list={jsonData} />
      <Cart />
    </div>
  )
}

export default Menu
