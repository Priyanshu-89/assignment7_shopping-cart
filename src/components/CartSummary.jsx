
import { LuIndianRupee } from "react-icons/lu";


function CartSummary({ cart }) {
  const totalItems = cart.length;
  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-summary">
      <h3>Price Details</h3>
      <div className="summary-content">
        <p>
          Items: <strong>{totalItems}</strong>
        </p>
      
      </div>
      <div className="total-amount">
        <h3>
          Total Amount: <span><LuIndianRupee />{totalAmount}</span>
        </h3>
      </div>
    </div>
  );
}

export default CartSummary;
