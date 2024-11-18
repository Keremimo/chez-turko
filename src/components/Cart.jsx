const Cart = () => {
  return (
    <div className="drawer lg:drawer-open drawer-end flex flex-col">
      <input id="shopCart" type="checkbox" className="drawer-toggle ml-auto" />
      <div className="drawer-content flex flex-col items-center justify-center ml-auto">
        {/* Page content here */}
        <label htmlFor="shopCart" className="btn btn-primary drawer-button lg:hidden">
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
          </svg>

        </label>
      </div>
      <div className="drawer-side ml-auto">
        <label htmlFor="shopCart" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Cart