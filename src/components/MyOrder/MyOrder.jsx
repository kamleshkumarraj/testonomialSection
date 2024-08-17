import { NavLink, Outlet } from "react-router-dom";

function MyOrder() {
  const navHandler = (status) => {
    return status
      ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white border-b-2 border-purple-600 px-5 py-2 rounded-t-md transition duration-300 ease-in-out"
      : "text-gray-600 hover:text-purple-600 px-5 py-2 transition duration-300 ease-in-out";
  };

  return (
    <div id="my-order" className="w-full md:col-start-2 md:col-end-4 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="font-poppins font-extrabold text-left text-3xl lg:text-4xl xl:text-5xl tracking-tight leading-snug text-gray-900 mb-6">
        My Orders
      </h1>

      <div
        id="order-header"
        className="flex justify-between items-center border-b-2 border-gray-300 mb-8"
      >
        <NavLink
          to={"/my-orders/active"}
          className={({ isActive }) => navHandler(isActive)}
        >
          <p className="font-poppins font-semibold text-lg lg:text-xl xl:text-2xl">
            Active
          </p>
        </NavLink>
        <NavLink
          to={"/my-orders/canceledOrder"}
          className={({ isActive }) => navHandler(isActive)}
        >
          <p className="font-poppins font-semibold text-lg lg:text-xl xl:text-2xl">
            Canceled
          </p>
        </NavLink>
        <NavLink
          to={"/my-orders/completed"}
          className={({ isActive }) => navHandler(isActive)}
        >
          <p className="font-poppins font-semibold text-lg lg:text-xl xl:text-2xl">
            Completed
          </p>
        </NavLink>
      </div>

      <div className="mt-8">
        <Outlet />
      </div>
    </div>
  );
}

export default MyOrder;
