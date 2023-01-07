export default function Cart({ cartItems }) {
  return (
    <div classname="Cart">
      Cart Details : {cartItems ? cartItems.length : "0"}
      <div>{cartItems ? cartItems.map((i) => <div>{i.id} </div>) : ""}</div>
    </div>
  );
}
