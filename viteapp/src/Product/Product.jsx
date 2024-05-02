import { useState, useEffect } from "react"
import './Product.css'

const Product = (props) => {

    let [inCart, setInCart] = useState("Add to Cart")

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
    }, [inCart])

    return (
        <>
            <div className="product">
                <div className="product-image">
                    <img src={props.image} alt={props.name} />
                </div>
                <div className="product-details">
                    <h4>{props.name}</h4>
                    <p>{props.description}</p>
                    <p>{props.price}</p>
                    <button onClick={() => {
                        if (inCart === "Add to Cart") {
                            setInCart("Remove from Cart")
                        } else {
                            setInCart("Add to Cart")
                        }
                    }}>{inCart}</button>
                </div>
            </div>
        </>
    )
}

export default Product