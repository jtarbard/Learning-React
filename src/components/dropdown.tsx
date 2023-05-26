import * as React from "react";
import { useState } from "react";

const Dropdown = ({ pages }) => {
  const [isDropdownOpen, setDropdown] = useState(false);

  const toggleDropwdown = () => {
    setDropdown(!isDropdownOpen);
  };

  return (
    <>
      <div>
        <button onClick={toggleDropwdown}>v</button>
      </div>
      <div id="Dropdown" className="flex-col">
        {isDropdownOpen
          ? pages.map((page) => (
              <a className="mx-2" href={page.link}>
                {page.label}
              </a>
            ))
          : null}
      </div>
    </>
  );
};

export default Dropdown;
