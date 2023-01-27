import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './CartIconWithBadge.css'

function CartIconWithBadge({cartItems}) {
  return (
      <div className='icon-wrapper'>
            <FontAwesomeIcon icon={faCartShopping}/>
            <span class="badge">
              {cartItems.length === 0 ? "0" : cartItems.length}
            </span>
        </div>
  )
}

export default CartIconWithBadge
