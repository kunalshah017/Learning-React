// import "./InputFeild.css";
import { useState } from "react";

function InputFeild() {

    let [name, setName] = useState("");
    let [age, setAge] = useState(0);

    return (
        <>
            <br />
            <br />
            <h3>Name:</h3>
            <input type="text" onChange={(event) => {
                setName(event.target.value);
            }} />

            <h3>Age:</h3>
            <input type="number" onChange={(event) => {
                setAge(event.target.value);
            }} />

            <br /><br />
            <button onClick={() => {
                console.log(name, age);
            }}>Submit</button>
        </>
    )
}

export default InputFeild;