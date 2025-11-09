import { LuIndianRupee } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import CartSummary from "./CartSummary";

function CartPage({ cart, onRemove }) {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-page">
      <h2>My Cart</h2>
      {cart.length === 0 ? (
        <p>No items added yet!</p>
      ) : (
        <>
          <ul className="cart-item">
            {cart.map((item) => (
              <li key={item.id}>
              <li>  {item.name} </li> <li><LuIndianRupee />{item.price}</li>
                <button onClick={() => onRemove(item.id)}><RiDeleteBinLine /></button>
              </li>
            ))}
          </ul>
<CartSummary cart={cart}/>
        </>
      )}
    </div>
  );
}

export default CartPage;
