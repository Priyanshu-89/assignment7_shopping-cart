import { LuIndianRupee } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";

function ProductList({ products, onAdd }) {
  return (
    <div className="product-list">
      {products.map((item) => (

        <div key={item.id} className="product-card">
             <img src={item.image} alt={item.name}  className="product-image"/>
          <h3>{item.name}</h3>
          <p> <LuIndianRupee />{item.price}</p>
          <button onClick={() => onAdd(item)}><MdOutlineShoppingCart />Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
