import { Route, useParams } from "react-router-dom";

export default function Products({ currentProduct }) {
  const Button = () => (
    <div>
      <Route
        render={({ history }) => (
          <button
            type="button"
            onClick={() => {
              history.push("/");
            }}
          >
            Back
          </button>
        )}
      />
    </div>
  );

  return (
    <div className="App">
      Product ID : {currentProduct ? currentProduct.id : ""} <br />
      Product Title : {currentProduct ? currentProduct.title : ""}
      <br />
      Product description : {currentProduct ? currentProduct.description : ""}
      <img src={currentProduct.image} />
      {Button()}
    </div>
  );
}
