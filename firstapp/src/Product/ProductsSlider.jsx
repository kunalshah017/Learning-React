import Product from "./Product";
import "./ProductsSlider.css";

function ProductsSlider() {
  return (
    <>
      <div className="products-slider">
        <Product
          imageLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfeC_VO82qKaUracW2tsC-3_OWbcnPWUNEhg&s"
          title="OIL"
          description="This is a bottle of oil."
          price="$10"
        ></Product>

        <Product
          imageLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfeC_VO82qKaUracW2tsC-3_OWbcnPWUNEhg&s"
          title="Mobile"
          description="This is a mobile phone."
          price="$100"
        ></Product>

        <Product
          imageLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfeC_VO82qKaUracW2tsC-3_OWbcnPWUNEhg&s"
          title="Laptop"
          description="This is a laptop."
          price="$1000"
        ></Product>
      </div>
    </>
  );
}

export default ProductsSlider;
