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
    console.log(newCart.find(item => item.name === obj.name))
    console.log(newCart.findIndex(item => item.name === obj.name))
    console.log(newCart.includes(item => item.name === obj.name))
    if (newCart[newCart.findIndex(item => item.name === obj.name)]) {
      newCart[newCart.findIndex(item => item.name === obj.name)].quantity += 1
      sessionStorage.setItem('react-shopping-cart', JSON.stringify(newCart))
      setShoppingCart(newCart)
    }
    else {
      obj.quantity = 1
      console.log("Somehow matching didn't work.")
      newCart.push(obj)
    }
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
