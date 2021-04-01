import Link from 'next/link'
import styles from './Navbar.module.css'
import CartIcon from '../Cart/Components/CartIcon';
const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link href="/">
          
        <a className={`nav-link`}>WooCommerce
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
        <CartIcon/>
      </div>
    </nav>
    )
} 
export default Navbar;