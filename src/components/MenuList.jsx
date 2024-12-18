import FoodItem from "./FoodItem"
const MenuList = ({ list, cartModify, handleDrawerToggle }) => {
  const foodItemList = list.menu.map((item, index) => (
    <FoodItem key={index} details={item} cartModify={cartModify} handleDrawerToggle={handleDrawerToggle} />
  ))
  return (
    <div className="flex min-w-12 flex-wrap md:justify-center">
      {foodItemList}
    </div>
  )
}

export default MenuList
