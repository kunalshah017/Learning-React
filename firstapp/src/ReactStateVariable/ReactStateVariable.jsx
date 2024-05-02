import React, { useState } from 'react';
import "./ReactStateVariable.css";

function ReactStateVariable() {
    // let name = "Kunal";
    let [name, setName] = useState("Kunal");

    function changeName() {
        // name = "Kunal 2";
        if (name === "Minal") setName("Kunal");
        else setName("Minal");
    }

    let [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1);
    }

    return (
        <>
            <br />
            <br />
            <h2>Just a React State component</h2>
            <h3>{name}</h3>
            <button onClick={changeName} className='btn'>Change name</button>

            <br />
            <br />

            <h2>React Counter using state</h2>
            <h3>{counter}</h3>
            <button onClick={increment} className='btn'>Increment</button>
        </>
    );
}

export default ReactStateVariable;