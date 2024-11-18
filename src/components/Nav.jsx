import { Link } from "react-router-dom"
const Nav = () => {
  return (
    <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/test"}>Test</Link>
    </nav >
  )
}

export default Nav
