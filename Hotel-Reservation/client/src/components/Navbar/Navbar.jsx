import React from "react";

const Navbar = () => {
  return (
    // Navbar
    <div className="h-12 bg-blue-900 flex justify-center">
      {/* navContainer */}
      <div className="w-full max-w-screen-lg text-white flex items-center justify-between">
        {/* logo */}
        <span className="font-semibold">Hotel Reservation</span>
        {/* navItems */}
        <div>
          {/* navButton */}
          <button className="ml-5 cursor-pointer text-blue-900 border-none px-[10px] py-[5px] bg-white">
            Register
          </button>
          <button className="ml-5 cursor-pointer text-blue-900 border-none px-[10px] py-[5px] bg-white">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
