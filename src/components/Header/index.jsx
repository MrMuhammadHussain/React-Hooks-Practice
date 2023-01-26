import {Link} from "react-router-dom"

import "./index.css"

function Header() {
  return (

    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">Aobut</Link>
      <Link to="/contact">Contact</Link>


    </nav>
  )
}

export default Header