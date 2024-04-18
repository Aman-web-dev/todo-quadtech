import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux";
import TodoDisplay from "./Display";
import Modal from "./Modal";
import UploadBtn from "./UploadBtn";

function TodoContainer(props) {

  const [showInput,setShowInput]=useState(false)
   
  const toggleModal=()=>{
    setShowInput(!showInput)
  }

  return (
    <div >

      <UploadBtn handleBtnClick={()=>{toggleModal()}}/>
      {showInput?
  <Modal closeModal={()=>{toggleModal()}}/>:""}   
  <TodoDisplay/>

    </div>
  );
}





export default TodoContainer
