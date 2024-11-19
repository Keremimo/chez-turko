const FoodItem = ({ details }) => {
  const cardImage = details.image || 'https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp'

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl m-3">
      <figure>
        <img className="lg:w-48 lg:h-60 md:w-80 md:h-36 object-cover"
          src={cardImage}
          alt="Album" />
      </figure>
      <div className="card-body text-center m-auto lg:max-w-96 md:max-w-80">
        <h2 className="card-title text-center mx-auto pt-0 mt-0">{details.name}</h2>
        <p className="text-center">{details.description}</p>

        <div className="card-actions justify-end flex flex-row">
          <p className="font-bold justify-end text-right mt-auto">{details.price}€</p>
          <button className="btn btn-primary sm:mx-auto lg:mx-0 lg: mt-3">Add</button>
        </div>
      </div>
    </div>
  )
}
export default FoodItem
