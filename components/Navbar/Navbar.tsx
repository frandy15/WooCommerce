import Link from 'next/link'

const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link href="/">
          <a className="nav-link">WooCommerce
        </a>
        </Link>
        
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Categories</a>
      </li>
      {/* <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li> */}
      <li className="nav-item">
        <a className="nav-link" href="#">Account</a>
      </li>
    </ul>
    {/* <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search">
      <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
    </nav>
    )
} 
export default Navbar;