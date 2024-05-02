import Product from "./ProductLooped";
import "./ProductsSlider.css";

function ProductsSlider() {

  let products = [
    {
      id: 1,
      imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfeC_VO82qKaUracW2tsC-3_OWbcnPWUNEhg&s",
      title: "OIL",
      description: "This is a bottle of oil.",
      price: "$10",
    },
    {
      id: 2,
      imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfeC_VO82qKaUracW2tsC-3_OWbcnPWUNEhg&s",
      title: "Mobile",
      description: "This is a mobile phone.",
      price: "$100",
    },
    {
      id: 3,
      imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfeC_VO82qKaUracW2tsC-3_OWbcnPWUNEhg&s",
      title: "Laptop",
      description: "This is a laptop.",
      price: "$1000",
    }];

  return (
    <>
      <div className="products-slider">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              imageLink={product.imageLink}
              title={product.title}
              description={product.description}
              price={product.price}
            ></Product>
          );
        })
        }
      </div>
    </>
  );
}

export default ProductsSlider;
