import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoaction } from "../Store";
import "./input.css";

const Input = () => {
  const [inputdata, setinputdata] = useState("");
  let dispatch = useDispatch();
  return (
    <div className="input">
      <input
        type="text"
        value={inputdata}
        onChange={(e) => {
          setinputdata(e.target.value);
        }}
      />
      <button
        className="btn"
        onClick={() => {
          dispatch(todoaction(inputdata));
        }}
      >
        Add!
      </button>
    </div>
  );
};

export default Input;
