import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Products from "./products/products";
import ProductInfo from "./products/productsinfo";
import Cart from "./card/cart";
import "./app.css";
import MenuComponent from "../../components/Menu";
export default function App() {
  const [currentProduct, setCurrentProduct] = React.useState(null);
  const [cartItems, setCartItems] = React.useState([]);
  function showDetails(fake) {
    console.log(fake);
    setCurrentProduct(fake);
  }
  function addToCart(item) {
    console.log("main app add cart val", item);

    setCartItems([...cartItems, { ...item }]);
  }
  return (
    <div className="App">
      <MenuComponent />
      <Cart cartItems={cartItems}></Cart>
      <BrowserRouter>
        <Switch>
          <Redirect from="/" exact to="/products" />
          <Route exact path="/products">
            <Products
              cartItems={cartItems}
              showDetails={showDetails}
              addToCart={addToCart}
            />
          </Route>
          <Route exact path="/products/:id">
            <ProductInfo currentProduct={currentProduct} />
          </Route>
          <Route exact path="/wishlist"></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
