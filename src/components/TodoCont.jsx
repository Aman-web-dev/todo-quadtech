import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux";
import TodoDisplay from "./Display";
import Modal from "./Modal";
import UploadBtn from "./UploadBtn";

function TodoContainer(props) {
  const [showInput, setShowInput] = useState(false);

  const toggleModal = () => {
    setShowInput(!showInput);
  };

  return (
    <div className="bg-gradient-to-r from-violet-600 to-indigo-600 min-h-screen ">
      <Heading />
      <UploadBtn
        handleBtnClick={() => {
          toggleModal();
        }}
      />
      {showInput ? (
        <Modal
          closeModal={() => {
            toggleModal();
          }}
        />
      ) : (
        ""
      )}
      <TodoDisplay />
    </div>
  );
}

export default TodoContainer;

const Heading = () => {
  return (
    <div className="">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Keep Track of Your Todo's with
        <span className="text-blue-600 dark:text-orange-500"> Todo</span> By
        Aman
      </h1>
      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-white">
        Here at Flowbite we focus on markets where technology, innovation, and
        capital can unlock long-term value and drive economic growth.
      </p>
    </div>
  );
};
