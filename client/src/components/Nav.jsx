import profileIcon from "/profileIcon.svg";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import menu from "/menu.svg";
import { setLogout } from "../redux/state";
const Nav = () => {
  const [dropdown, setDropdown] = useState(false);
  const user = useSelector((state) => state.user);
  const authenticatedDropdownItems = [
    { label: "Trip List", href: "1" },
    { label: "Wish List", href: "2" },
    { label: "Property List", href: "3" },
    { label: "Reservation List", href: "4" },
  ];
  const unauthenticatedDropdownItems = [
    { label: "Login", href: "/login" },
    { label: "Register", href: "/register" },
  ];
  const dispatch = useDispatch();
  return (
    <nav className="max-w-screen h-20 bg-slate-700 flex items-center gap-3 px-5 justify-between">
      <Link
        to="/"
        className="text-white text-2xl hover:scale-110 transition-all duration-300"
      >
        Vacay<b>Master</b>
      </Link>
      <div className="w-[400px] hidden md:block">
        <input
          type="search"
          className="p-3 rounded-full w-full"
          placeholder="Search..."
        />
      </div>
      <button
        onClick={() => setDropdown(!dropdown)}
        className="w-20 h-12  bg-white rounded-full flex items-center gap-2 justify-center"
      >
        {!user && (
          <img
            src={profileIcon}
            className="w-[35px] h-[35px] rounded-full"
            alt="Profile photo"
          />
        )}
        {user && (
          <img
            src={`http://localhost:3001/${user.profileImagePath.replace(
              "public",
              ""
            )}`}
            alt="Profile photo"
            className="w-[35px] h-[35px]  rounded-full object-cover"
          />
        )}
        <img src={menu} className="w-[25px] h-[25px]" alt="Menu icon" />
        {dropdown && user && (
          <div className="absolute bg-slate-700 text-white h-auto p-5 w-auto  translate-y-40">
            <ul className="flex flex-col gap-4">
              {authenticatedDropdownItems.map((dropdownItem) => (
                <li key={dropdownItem.href}>
                  <Link to={dropdownItem.href}>{dropdownItem.label}</Link>
                </li>
              ))}
              <li key="logout" onClick={() => dispatch(setLogout())}>
                <Link to="/login">Logout</Link>
              </li>
            </ul>
          </div>
        )}
        {dropdown && !user && (
          <div className="absolute bg-slate-700 text-white h-auto p-5 w-auto  translate-y-20">
            <ul className="flex flex-col gap-4">
              {unauthenticatedDropdownItems.map((dropdownItem) => (
                <li key={dropdownItem.href}>
                  <Link to={dropdownItem.href}>{dropdownItem.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </button>
    </nav>
  );
};

export default Nav;
