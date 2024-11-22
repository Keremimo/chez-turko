import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Order = () => {
  const navigate = useNavigate()
  const [cart, setCart] = useState(sessionStorage.getItem('react-shopping-cart') ? JSON.parse(sessionStorage.getItem('react-shopping-cart')) : [])
  const initialPrice = 0
  const totalPrice = (cart.reduce((accumulator, obj) => accumulator + (obj.price * obj.quantity), initialPrice)) / 100

  const handleAddition = (e) => {
    const newCart = [...cart]
    const { value: index } = e.target
    newCart[index].quantity += 1
    sessionStorage.setItem('react-shopping-cart', JSON.stringify(newCart))
    setCart(newCart)
  }

  const handleRemoval = (e) => {
    const newCart = [...cart]
    const { value: index } = e.target
    newCart[index].quantity -= 1
    if (newCart[index].quantity <= 0) {
      newCart.splice(index, 1)
    }
    sessionStorage.setItem('react-shopping-cart', JSON.stringify(newCart))
    setCart(newCart)
  }
  const orderList = cart.map((item, index) => (
    <tr key={index} className="h-16">
      <td className="h-16">
        <div className="mask mask-squircle h-12 w-12">
          <img
            src={item.picture_url}
            alt={item.name} />
        </div>
      </td>
      <td className="h-16">
        <div className="flex items-center gap-3">
          <div className="avatar">

          </div>
          <div className="mr-auto">
            <p className="font-bold">{item.name}</p>
          </div>
        </div>
      </td>
      <td className="h-16">
        {item.ingredients.join(', ')}
        <br />
      </td>
      <td className="h-16">
        <div className="flex">
          <button onClick={handleRemoval} value={index} className="btn btn-error btn-xs mr-2">-</button>
          {item.quantity}
          <button onClick={handleAddition} value={index} className="btn btn-success btn-xs ml-2">+</button>
        </div>
      </td>
      <td className="h-16">{(item.price * item.quantity) / 100}</td>
    </tr>
  ))

  return (
    <div className="flex flex-col">
      <dialog id="finishorder" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Order placed!</h3>
          <p className="py-4">Wait time: 20 business weeks. Hope you enjoy!</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <div className="flex w-full flex-col lg:flex-row overflow-x-scroll">
        <div className="card bg-base-300 rounded-box flex h-full sm:w-full w-1/2 place-items-center">
          <h2 className="text-2xl font-bold m-4">Enter your details:</h2>
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
        <div className="card bg-base-300 rounded-box grid h-80 w-1/2 sm:w-full place-items-start content-start overflow-y-scroll">
          <table className="table table-auto bg-base-300">
            <thead className="sticky top-0 bg-base-300 z-20">
              <tr className="bg-base-300">
                <th></th>
                <th className="text-center">Item</th>
                <th className="text-center">Ingredients</th>
                <th className="text-center">Quantity</th>
                <th className="text-center">Price</th>
              </tr>
            </thead>
            <tbody className="content-start">
              {orderList}
            </tbody>
          </table>
        </div>
      </div>
      <p className="text-xl text-center font-bold">Total: {totalPrice}</p>
      <button onClick={() => document.getElementById('finishorder').showModal()} className="btn btn-primary mx-auto text-center">Place Order</button>
      <button onClick={() => { navigate(-1) }} className="btn btn-error mx-auto text-center">Go Back</button>
    </div>
  )
}

export default Order
