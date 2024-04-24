import React from "react";
import "./ListItem.css";

type ListItemProps = {
  name: string;
  id: number;
  closeFunc: (id: number) => void;
};

export default function ListItem({ name, id, closeFunc }: ListItemProps) {
  const close = () => {
    closeFunc(id);
  };

  return (
    <li id="list_item_wrapper">
      <div id="text">{name}</div>
      <button onClick={close}>X</button>
    </li>
  );
}
