import "./FunctionAndEventListner.css";

function FunctionAndEventListner() {
    function buttonClicked(name) {
        alert("Button clicked " + name + "!");
    }

    return (
        <button
            className="btn"
            onClick={(event) => {
                buttonClicked("Kunal");
                console.log(event.target);
            }}
        >
            Click me!
        </button>
    );
}

export default FunctionAndEventListner;