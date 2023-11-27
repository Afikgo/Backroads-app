import React from "react";
import { pageLinks } from "../data";

const Links = ({ parentel, itemclass }) => {
  return (
    <ul className={parentel}>
      {pageLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} className={itemclass}>
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Links;
