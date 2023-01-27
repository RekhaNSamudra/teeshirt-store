import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./Components/AllRoutes/AllRoutes";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
        );
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        console.log("error", error);      //Error handling
      }
    })();
  }, []);

  const handleAddItem = (item) => {
    const itemExist = cartItems.find((curItem) => curItem.id === item.id);

    if (itemExist) {
      setCartItems(
        cartItems.map(
          (curItem) => {
            if (curItem.id === item.id) {
              if (!(itemExist.orderQty + 1 > itemExist.quantity)) {
                return { ...itemExist, orderQty: itemExist.orderQty + 1 };
              } else if (
                window.confirm("quantity exceeds available quantity")
              ) {
                return { ...itemExist, orderQty: itemExist.orderQty };
              }
            }
            return curItem;
          }
          // curItem.id === item.id
          // ? // ? (itemExist.orderQty+1) > itemExist.quantity
          //   ? alert("quantity exceeds available quantity")
          // : { ...itemExist, orderQty: itemExist.orderQty + 1 }
          // { ...itemExist, orderQty: itemExist.orderQty + 1 }
          // : curItem,
          // console.log("order update", itemExist.orderQty)
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, orderQty: 1 }]);
    }
  };

  const handleRemoveItem = (item) => {
    const itemExist = cartItems.find((curItem) => curItem.id === item.id);
    if (itemExist.orderQty === 1) {
      setCartItems(cartItems.filter((curItem) => curItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((curItem) =>
          curItem.id === item.id
            ? { ...itemExist, orderQty: itemExist.orderQty - 1 }
            : curItem
        )
      );
    }
  };

  // const handleClearCart = () => {
  // setCartItems([]);
  // }
  return (
    <Router>
      <Navbar cartItems={cartItems} />

      <AllRoutes
        data={data}
        setData={setData}
        cartItems={cartItems}
        handleAddItem={handleAddItem}
        handleRemoveItem={handleRemoveItem}
        //  handleClearCart={handleClearCart}
      />
    </Router>
  );
}

export default App;
