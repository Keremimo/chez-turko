const Order = ({ pass }) => {
  console.log(pass)
  const cart = sessionStorage.getItem('react-shopping-cart') ? JSON.parse(sessionStorage.getItem('react-shopping-cart')) : []


  return (
    <div className="flex w-full flex-col lg:flex-row">
      <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">

      </div>
      <div className="divider lg:divider-horizontal">OR</div>
      <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">

      </div>
    </div>
  )
}

export default Order
