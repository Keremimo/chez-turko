import FoodItem from "./FoodItem"
const MenuList = ({ list, cartModify, handleDrawerToggle }) => {
  const foodItemList = list.menu.map((item, index) => (
    <FoodItem key={index} details={item} cartModify={cartModify} handleDrawerToggle={handleDrawerToggle} />
  ))
  return (
    <div className="join-item flex min-w-12 flex-wrap">
      {foodItemList}
    </div>
  )
}

export default MenuList
