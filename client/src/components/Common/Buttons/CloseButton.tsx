import React from "react";
import Icons from "../Icons/Icons";

interface CloseButtonProps {
  onClick: (event: any) => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <Icons type="close" size={25} color="#7b7f89" />
    </button>
  );
};

export default CloseButton;
