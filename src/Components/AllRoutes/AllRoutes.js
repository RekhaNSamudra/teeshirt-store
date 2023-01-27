import React from "react";

import { Routes, Route } from "react-router-dom";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";

function AllRoutes({
  data,
  setData,
  cartItems,
  handleAddItem,
  handleRemoveItem,
}) {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Products
              data={data}
              setData={setData}
              handleAddItem={handleAddItem}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              handleAddItem={handleAddItem}
              handleRemoveItem={handleRemoveItem}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default AllRoutes;
