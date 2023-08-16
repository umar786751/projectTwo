import React from "react";
import Button from "@mui/material/Button";

const MyButton = () => {
  const myStyle = {
    style: {
      backgroundColor: "green",
      color: "white",
    },
  };

  return <Button {...myStyle}>Button</Button>;
};

export default MyButton;
