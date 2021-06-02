import React from "react";
import "./style.css";

function Card(props) {
  return (
    <tr> 
      <td> {props.name} </td> 
      <td> {props.id.value} </td> 
      <td> 
      <img src={props.picture.medium}/>
       </td> 

      <td> {props.email} </td> 
      <td> {props.phone} </td> 
      <td> {props.dob.date} </td> 
  </tr>
      
  );
}

export default Card;
