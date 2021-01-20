import React from 'react';

function List(props){

  return (
   <>
    <div class="todo_style">
     <i class="material-icons fa-times" aria-hidden="true" 
        onClick={() => {
         props.onSelect(props.id);
        }} >delete</i>
        <li>{props.text}</li>
     </div>
   </>
  )
}

export default List;
{/* <i className = "fa fa-times" 
        aria-hidden="true" 
        onClick={() => {
         props.onSelect(props.id);
        }} 
        /> */}