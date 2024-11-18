const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">Chez Turko</h1>
          <p className="mb-5 text-white">
            Welcome to Chez Turko, the French Turkish fusion kitchen. Here you will find gourmet selections that are made by our three star chef, <span className="font-bold">Ahmet LeBoyard</span>! Delivery only! Order now!
          </p>
          <button className="btn btn-primary">Check Menu</button>
        </div>
      </div>
    </div>
  )
}

export default Home
