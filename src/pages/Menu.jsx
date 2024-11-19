import jsonData from '../assets/menu.json'
import { MenuList, Cart } from '../components'

const Menu = () => {
  return (
    <div className='join flex'>
      <Cart />
      <MenuList list={jsonData} />
    </div>
  )
}

export default Menu
