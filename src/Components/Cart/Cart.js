import React from "react";
import "./Cart.css";

function Cart({ cartItems, handleAddItem, handleRemoveItem }) {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.orderQty * item.price,
    0
  );
  return (
    <div className="cart-items ">
      <h3 className="cart-items-header">Shopping Cart</h3>

      {cartItems.length === 0 && (
        <div className="cart-items-empty">NO Items</div>
      )}

      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-items-list">
            <img
              className="cart-items-image"
              src={item.imageURL}
              alt={item.name}
            />
            <div className="details">
              <div className="cart-items-name">{item.name}</div>
              <div> Rs&nbsp;{item.price}</div>
            </div>
            <div className="cart-items.function">
              <button
                className="cart-items-add"
                onClick={() => handleRemoveItem(item)}
              >
                -
              </button>
              <p>Qty {item.orderQty}</p>
              <button
                className="cart-items-remove"
                onClick={() => handleAddItem(item)}
              >
                +
              </button>
            </div>

            <div className="cart-items-price">
              {item.orderQty} * Rs {item.price}
            </div>
          </div>
        ))}
      </div>

      <div className="cart-items-total-price-name">
        Total price
        <div className="cart-items-total-price"> Rs {totalPrice}</div>
      </div>
    </div>
  );
}

export default Cart;
