import React from "react";

const List = ({ list, onRemove }) => {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          {item.name}
          <button type="button" onClick={() => onRemove(item.id)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
