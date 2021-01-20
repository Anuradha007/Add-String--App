import React, { useState } from "react";
import List from './List';

function App() {

  const [inputList , setInputList] = useState("");
  const [items , setItems ] = useState([]);
  const [itemsAlpha , setItemsAlpha ] = useState([]);
  const [itemsNumeric , setItemsNumeric ] = useState([]);
  const [itemsAlphaNumeric , setItemsAlphaNumeric ] = useState([]);
 const itemEvent = (event) => {
   setInputList(event.target.value);
 } ;

 const ListOfItems = () =>{
   setItems((oldItems)=>{
      return [...oldItems ,inputList];
   });
   var letters = /^[A-Za-z]+$/;
   var numbers = /^[0-9]+$/;
   if(inputList.match(letters)){
    setItemsAlpha((oldItems)=>{
      return [...oldItems ,inputList];
   });
   }
   else if(inputList.match(numbers)){
    setItemsNumeric((oldItems)=>{
      return [...oldItems ,inputList];
   });
   }
   else{
    setItemsAlphaNumeric((oldItems)=>{
      return [...oldItems ,inputList];
   });
   }
   setInputList("");
 };

 const deleteItem = (id) => {
    console.log("delete");
    setItems((oldItems) =>{
      return oldItems.filter((arrElem, index) =>{
        return index !==id;
      });
    });
 }
 const deleteItemAlpha = (id) => {
  console.log("delete");
  setItemsAlpha((oldItems) =>{
    return oldItems.filter((arrElem, index) =>{
      return index !==id;
    });
  });
}
const deleteItemNumeric = (id) => {
  console.log("delete");
  setItemsNumeric((oldItems) =>{
    return oldItems.filter((arrElem, index) =>{
      return index !==id;
    });
  });
}
const deleteItemAlphaNumeric = (id) => {
  console.log("delete");
  setItemsAlphaNumeric((oldItems) =>{
    return oldItems.filter((arrElem, index) =>{
      return index !==id;
    });
  });
}

 let userEntry = true;   
 
  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>Add Strings</h1>
        <br />
        <input type="text" placeholder="Add String" value= {inputList} onChange={itemEvent} />
        <button onClick={ListOfItems}> + </button>
        
        <ol style={{maxHeight:'100%',overflow:'auto',marginBottom:'100px'}}>
          {/* <li>{inputList}</li> */}
          {itemsAlpha.length !=0? <h3>Alphabets</h3> : null}
          {itemsAlpha.map( (itemval , index) =>{
            return( 
            
            <>
            <List 
            key={index} 
            id={index}
            text = {itemval} 
            onSelect={deleteItemAlpha}
            />
            </>

          )})}
          
          {itemsNumeric.length !=0? <h3>Numbers</h3> : null}
          {itemsNumeric.map( (itemval , index) =>{
            return( 
            <>
            <List 
            key={index} 
            id={index}
            text = {itemval} 
            onSelect={deleteItemNumeric}
            />
            </>
          )})}
          
          {itemsAlphaNumeric.length !=0? <h3>Alpha-Numeric</h3> : null}
          {itemsAlphaNumeric.map( (itemval , index) =>{
            return( 
            <>
            <List 
            key={index} 
            id={index}
            text = {itemval} 
            onSelect={deleteItemAlphaNumeric}
            />
            </>
          )})}
        </ol>
      </div>
    </div>
  );
}

export default App;
