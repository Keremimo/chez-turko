const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1447078806655-40579c2520d6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
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
