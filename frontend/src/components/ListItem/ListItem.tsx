import React from "react";

type ListItemProps = {
  name: string;
  id: number;
  closeFunc: () => void;
};

export default function ListItem({ name, id, closeFunc }: ListItemProps) {
  return (
    <div>
      <div className="text">
        {name} - {id}
      </div>
      <button onClick={closeFunc}>X</button>
    </div>
  );
}
