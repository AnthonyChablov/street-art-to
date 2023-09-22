import React from "react";
import { NavLink } from "react-router-dom";

interface INavLink {
  linkTo: string;
  text: string;
  index: number;
}

const NavigationLink = ({ linkTo, text, index }: INavLink) => {
  const isLastLink = index === 2;

  return (
    <li>
      <NavLink to={linkTo}>
        <div
          className={`
            block py-2 pl-4 pr-4 text-gray-700 font-semibold text-md rounded-full hover:opacity-90
            md:border-0 ${
              isLastLink
                ? "bg-blue-400 text-white" // Apply special style for last link
                : "dark:text-gray-400 "
            }
          `}
          style={isLastLink ? { backgroundColor: "#4682B4" } : {}}
        >
          {text}
        </div>
      </NavLink>
    </li>
  );
};

export default NavigationLink;
