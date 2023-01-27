import React from 'react'

import { Link } from 'react-router-dom';
import CartIconWithBadge from '../CartIconWithBadge/CartIconWithBadge';
import './Navbar.css';

function Navbar({cartItems}) {
  // const [showLink, setShowLink] = useState(false);

  return (
    <nav className='navbar'>
        <h1 className='heading'>TeeRex Store</h1>
        <ul className='nav-links'>
          <Link to="/" className='products'
          //  id={showLink ? "hidden" : ""}
          
          // onClick={() => setShowLink(!showLink)}
          >
            <li>Products</li>
          </Link>
          <Link to="/cart" className='cart-icon'>
            <li> <CartIconWithBadge cartItems={cartItems}/></li>
          </Link>
        </ul>
        
    </nav>
  )
}

export default Navbar
