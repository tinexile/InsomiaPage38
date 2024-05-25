import React from "react";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
      <div className="w-full mx-auto bg-[rgb(39,48,83)]">
        <div className="max-w-[1300px] mx-auto px-10 py-4  auto flex justify-between items-center">
          <h1 className="uppercase font-bold text-[rgb(27,202,241)] text-xl font-sans">
            Leadership <br />
            Event
          </h1>

          <div>
            <CiMenuBurger
              className="lg:hidden text-white font-bold "
              size={30}
            />
            <ul className="lg:flex hidden gap-6 justify-center items-center text-white text-xl font-bold">
              <li>Home</li>
              <li>About</li>
              <li>Speakers</li>
              <li>Schedules</li>
              <li>Pricing</li>
              <li>Venue</li>
              <li>Contact</li>
              <button className="bg-[rgb(27,202,241)] rounded-3xl px-6 py-2 ">
                Buy Tickets
              </button>
            </ul>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
