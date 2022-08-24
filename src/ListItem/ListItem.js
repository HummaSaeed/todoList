import React from "react";
import { useSelector } from "react-redux";
import "./listitem.css";

const ListItem = () => {
  const data = useSelector((state) => state.todos);
  console.log(data);
  return (
    <div className="list">
      {data.map((item) => (
        <>
          <p className="list_item">{item}</p>
        </>
      ))}
    </div>
  );
};

export default ListItem;
