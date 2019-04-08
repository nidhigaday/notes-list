import * as React from "react";

import Button from "react-bootstrap/Button";

import "../styles/components.css";

function AddNewItem() {
  return (
    <Button
      bsPrefix="add-button"
      active={true}
      size="sm"
      type="button"
      variant="primary"
      onMouseOver={() => console.log("show options")}
      onClick={() => console.log("yay clicked it!")}
    >
      Add
    </Button>
  );
}

export default AddNewItem;
