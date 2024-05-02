import "./App.css";
import ProductsSlider from "./Product/ProductsSlider";
import Header from "./Header/Header";
import ReactStateVariable from "./ReactStateVariable/ReactStateVariable";
import FunctionAndEventListner from "./FunctionAndEventListner/FunctionAndEventListner";
import InputFeild from "./InputFeild/InputFeild";
import ProductsSliderLooped from "./ProductLooped/ProductsSliderLooped";
import { useState } from "react";


function App() {


  return (
    <>
      <Header></Header>
      <h1>Manual Data entry by hardcoding</h1>
      <ProductsSlider></ProductsSlider>
      <FunctionAndEventListner></FunctionAndEventListner>
      <ReactStateVariable></ReactStateVariable>
      <InputFeild></InputFeild>
      <h1>Data Input with Loop</h1>
      <ProductsSliderLooped></ProductsSliderLooped>
    </>
  );
}

export default App;
