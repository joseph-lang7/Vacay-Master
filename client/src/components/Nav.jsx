import profileIcon from "/profileIcon.svg";
import { useState } from "react";
const Nav = () => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownItems = [
    { label: "Trip List", href: "1" },
    { label: "Wish List", href: "2" },
    { label: "Property List", href: "3" },
    { label: "Reservation List", href: "4" },
  ];
  return (
    <nav className="w-screen h-20 bg-slate-700 flex items-center px-7 justify-between">
      <div className="text-white text-2xl">
        Vacay<b>Master</b>
      </div>
      <button
        onClick={() => setDropdown(!dropdown)}
        className="w-16 bg-white h-10 rounded-full flex justify-center items-center "
      >
        <img src={profileIcon} className="w-[40px] h-[40px]" />
        {dropdown && (
          <div className="absolute bg-slate-700 text-white h-auto p-5 w-auto  translate-y-36">
            <ul className="flex flex-col gap-4">
              {dropdownItems.map((dropdownItem) => (
                <li key={dropdownItem.href}>{dropdownItem.label}</li>
              ))}
            </ul>
          </div>
        )}
      </button>
    </nav>
  );
};

export default Nav;
