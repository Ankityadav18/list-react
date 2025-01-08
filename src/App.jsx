import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import FoodItems from "./Component/FoodItems";
import ErrorMessage from "./Component/ErrorMessage";
import Container from "./Component/Container";
import FoodInput from "./Component/FoodInput";

function App() {
  

let[foodItems,setFoodItems]=useState([

]);
  const onKeyDown=(event)=>{
    if(event.key==='Enter'){
      let newFoodItem=event.target.value;
      event.target.value="";

      let newItems=[...foodItems,newFoodItem]
      setFoodItems(newItems);
      console.log("Food entered is  "+ newFoodItem);
    }
}
 
  return (
    <>
   <Container>
       <h1 className="heading">Healthy Foods</h1>     
      <FoodInput handleKeyDown={onKeyDown} ></FoodInput>
      <ErrorMessage items={foodItems}></ErrorMessage>
     <FoodItems items={foodItems}></FoodItems>
     </Container>
     <Container>
      <p>Above present are the food items🧡🧡</p>
     </Container>
     </>
  )
}

export default App
