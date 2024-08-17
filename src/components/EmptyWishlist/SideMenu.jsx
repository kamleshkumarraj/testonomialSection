import { CiHeart } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { MdOutlineLockClock } from "react-icons/md";
import { PiSignOutFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";

function SideMenu() {
  const navHandler = (status) => {
    if (status)
      return "bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg border-l-4 border-purple-500";
  };

  return (
    <div id="menu-main" className="w-full h-[400px] bg-white rounded-lg p-6 shadow-md">
      <div id="header-menu" className="w-full mb-8">
        <h1 className="font-poppins font-bold text-3xl tracking-wide text-gray-800 relative text-left before:w-[6px] before:bg-purple-500 before:h-[75%] before:left-[-10px] before:top-[50%] before:translate-y-[-50%] before:absolute before:rounded-full">
          Hello Jhanvi
        </h1>
        <p className="font-poppins font-medium text-lg text-gray-500 mt-2">
          Welcome to your Account
        </p>
      </div>
      <div id="menu" className="flex flex-col gap-5">
        <NavLink
          to={"/"}
          className={(status) =>
            navHandler(status.isActive) +
            " flex items-center gap-4 px-6 py-4 rounded-lg transition-all duration-300 hover:bg-purple-500 hover:text-white"
          }
        >
          <div id="icon">
            <MdOutlineLockClock
              size={"24px"}
              className="text-gray-500 transition-colors duration-300"
            />
          </div>
          <div className="font-poppins font-semibold text-lg text-gray-600">
            My Orders
          </div>
        </NavLink>
        <NavLink
          to={"/empty-wishlist"}
          className={(status) =>
            navHandler(status.isActive) +
            " flex items-center gap-4 px-6 py-4 rounded-lg transition-all duration-300 hover:bg-purple-500 hover:text-white"
          }
        >
          <div id="icon">
            <CiHeart
              size={"28px"}
              className="text-gray-500 transition-colors duration-300"
            />
          </div>
          <div className="font-poppins font-semibold text-lg text-gray-600">
            Wishlist
          </div>
        </NavLink>
        <NavLink
          to={"/my-info"}
          className={(status) =>
            navHandler(status.isActive) +
            " flex items-center gap-4 px-6 py-4 rounded-lg transition-all duration-300 hover:bg-purple-500 hover:text-white"
          }
        >
          <div id="icon">
            <GoPerson
              size={"24px"}
              className="text-gray-500 transition-colors duration-300"
            />
          </div>
          <div className="font-poppins font-semibold text-lg text-gray-600">
            My Info
          </div>
        </NavLink>
        <NavLink
          to={"/sign-out"}
          className={(status) =>
            navHandler(status.isActive) +
            " flex items-center gap-4 px-6 py-4 rounded-lg transition-all duration-300 hover:bg-purple-500 hover:text-white"
          }
        >
          <div id="icon">
            <PiSignOutFill
              size={"24px"}
              className="text-gray-500 transition-colors duration-300"
            />
          </div>
          <div className="font-poppins font-semibold text-lg text-gray-600">
            Sign Out
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default SideMenu;
