import { NavLink } from "react-router";

const MyLinks = ({ to, children, className }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "text-[#00FFE0]" : `${className}`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLinks;
