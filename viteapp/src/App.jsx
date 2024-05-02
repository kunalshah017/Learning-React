import './App.css'
import { useState } from 'react'
// import Product from './Product/Product'
// import Users from './Users/Users'
import WeatherApp from './WeatherApp/WeatherApp'
function App() {

  let [isProductVisible, setIsProductVisible] = useState(false)

  return (
    <>
      {/* 
      <button onClick={() => {
        setIsProductVisible(!isProductVisible)
      }
      }>Toggle Product</button>

      {
        isProductVisible ? (<Product name="Product 1" description="Description 1" price="Price 1" image="https://via.placeholder.com/150" />) : null
      } */}

      {/* <Users /> */}

      <WeatherApp />


    </>
  )
}

export default App
