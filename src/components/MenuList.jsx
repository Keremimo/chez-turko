import FoodItem from "./FoodItem"
const MenuList = ({ list }) => {
  console.log(list)
  const foodItemList = list.menu.map((item, index) => (
    <FoodItem key={index} details={item} />
  ))
  return (
    <div className="join-item flex min-w-12 flex-wrap">
      {foodItemList}
    </div>
  )
}

export default MenuList
