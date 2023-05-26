import * as React from "react";
import Dropdown from "./dropdown";

const Navbar = () => {
  const pages = [
    { label: "JSX", link: "/" },
    { label: "Props", link: "/" },
    { label: "States", link: "/" },
    { label: "Hooks", link: "/" }
  ];

  return (
    <>
      <nav className="bg-gray-300 border-b-2 border-gray-400 py-3">
        <div className="flex justify-between">
          <div>
            <a className="mx-2" href="/">
              Learn React
            </a>
          </div>
          <div className="hidden md:flex items-center">
            {pages.map((page) => (
              <a className="mx-2" href={page.link}>
                {page.label}
              </a>
            ))}
          </div>
          <div className="">
            <Dropdown pages={pages} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
