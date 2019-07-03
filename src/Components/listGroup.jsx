import React from "react";

const ListGroup = props => {
  const {
    items,
    textProperty,
    valueProperty,
    onItemSelect
  } = props;
  return (
    <div>
      <nav class="nav-sidebar">
        <ul class="nav1">
          {items.map(item => (
            <li  className="aa">
              <a
                className="aa"
                onClick={() => onItemSelect(item)}
                key={item[valueProperty]}
              >
                {item[textProperty]}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "id"
};
export default ListGroup;
