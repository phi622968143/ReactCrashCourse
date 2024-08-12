import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelecteItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelecteItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getM = () => {
    return items.length === 0 ? <p>NO item</p> : null;
  };

  return (
    <>
      <h1>{heading}</h1>
      {getM()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelecteItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
