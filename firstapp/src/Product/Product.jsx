import "./Product.css";
import { useState } from "react";

function Product(props) {

  let [isCart, setIsCart] = useState("Add to cart");

  return (
    <>
      <div className="product-card">
        <img src={props.imageLink} alt="product" />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>{props.price}</p>
        <br />
        <p>{isCart}</p>
        <button onClick={() => {
          if (isCart === "Added to cart") setIsCart("Add to cart");
          else setIsCart("Added to cart");
        }}>Cart</button>
      </div>
    </>
  );
}

export default Product;
