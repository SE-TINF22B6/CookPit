import React from "react";

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
    <div>
      <div className="text">
        {name} - {id}
      </div>
      <button onClick={close}>X</button>
    </div>
  );
}
