import { IoMdClose } from "react-icons/io";

interface IIcons {
  type: string;
  size: number;
  color?: string;
}

const Icons = ({ type, size, color }: IIcons) => {
  return (
    <div className="text-white">
      {
        {
          close: <IoMdClose size={size} color={color} />,
        }[type]
      }
    </div>
  );
};

export default Icons;
