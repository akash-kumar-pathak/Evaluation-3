import { Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function Products({ showDetails, addToCart, cartItems }) {
  const [fake, setFake] = useState([]);
  console.log(fake);
  useEffect(() => {
    fakestore();
  }, []);
  const fakestore = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const JsonData = await response.json();
    setFake(JsonData);
  };

  const Button = (fake) => (
    <Route
      render={({ history }) => (
        <button
          type="button"
          onClick={() => {
            console.log("@@@@@", fake);
            showDetails(fake);
            history.push("/products/" + fake.id);
          }}
        >
          Details
        </button>
      )}
    />
  );

  const onAddToCart = (fake) => {
    addToCart(fake);
  };

  return (
    <div className="App">
      <h2>My Products</h2>
      <div className="container">
        {fake.map((values) => {
          return (
            <div className="box">
              {Button(values)}
              <div className="content">
                <h5>{values.title}</h5>
                <p>{values.description}</p>
              </div>
              <img src={values.image} alt="product"></img>
              <button
                disabled={cartItems.find((fake) => fake.id === values.id)}
                type="button"
                onClick={() => {
                  onAddToCart(fake);
                }}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
