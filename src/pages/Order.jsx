import { useState } from "react"

const Order = ({ pass }) => {
  console.log(pass)
  const [cart, setCart] = useState(sessionStorage.getItem('react-shopping-cart') ? JSON.parse(sessionStorage.getItem('react-shopping-cart')) : [])
  const initialPrice = 0
  const totalPrice = (cart.reduce((accumulator, obj) => accumulator + (obj.price * obj.quantity), initialPrice)) / 100

  const handleAddition = 'hi'
  const handleRemoval = 'hi'
  const orderList = cart.map((item, index) => (
    <tr key={index}>
      <td>
        <div className="mask mask-squircle h-12 w-12">
          <img
            src={item.picture_url}
            alt={item.name} />
        </div>
      </td>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">

          </div>
          <div className="mr-auto">
            <p className="font-bold text-left">{item.name}</p>
          </div>
        </div>
      </td>
      <td>
        {item.ingredients.join(', ')}
        <br />
      </td>
      <td>{item.quantity}</td>
    </tr>
  ))

  return (
    <div className="flex flex-col">
      <div className="flex w-full flex-col lg:flex-row">
        <div className="card bg-base-300 rounded-box flex h-full w-1/2 place-items-center">
          <form className="m-4" action="">
            <div className="flex" >
              <label className="input input-bordered flex items-center gap-2">
                Name
                <input type="text" className="grow" placeholder="Type here" />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                Email
                <input type="text" className="grow" placeholder="Type here" />
              </label>

            </div>
            <div className="flex">
              <label className="input input-bordered flex items-center gap-2">
                Street
                <input type="text" className="grow" placeholder="Type here" />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                Postcode
                <input type="text" className="grow" placeholder="Type here" />
              </label>

            </div>
            <label className="input input-bordered flex items-center gap-2">
              City
              <input type="text" className="grow" placeholder="Type here" />
            </label>
          </form>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="card bg-base-300 rounded-box grid h-full w-1/2 place-items-baseline content-center p-5">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th className="text-center">Item</th>
                <th className="text-center">Ingredients</th>
                <th className="text-center">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {orderList}
            </tbody>
          </table>
        </div>
      </div>
      <button className="btn btn-primary mx-auto text-center">Place Order</button>
    </div>
  )
}

export default Order
