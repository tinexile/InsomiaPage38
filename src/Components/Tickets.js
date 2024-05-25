import React from "react";
import { FiCoffee } from "react-icons/fi";
import { IoGameController } from "react-icons/io5";
import { TiMessage } from "react-icons/ti";

const Tickets = () => {
  return (
    <>
      <div>
        <h1 className=" mb-8 text-center font-bold text-4xl  ">
          Get Your{" "}
          <span className="text-[rgb(27,202,241)] border-b-4 border-[rgb(27,202,241)]">
            Tickets
          </span>
        </h1>
        <div className="grid grid-cols-1 my-20">
          {/* Cards */}
          {/* Parent card */}
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
            {/* Start of card */}
            <div className="shadow-2xl px-6 ">
              <div className="py-3 px-6 w-full   rounded-xl bg-[rgb(39,48,83)] text-white font-bold text-2xl flex items-center justify-between ">
                <h1>Early Bird</h1>
                <h3>$640</h3>
              </div>

              <div className="grid gap-2 my-4 px-6">
                <div className="flex items-center gap-3">
                  <FiCoffee size={25} />
                  <h3>All-Day Coffee + Snacks</h3>
                </div>
                <div className="flex items-center gap-3">
                  <IoGameController size={25} />
                  <h3>After Party</h3>
                </div>
                <div className="flex items-center gap-3">
                  <TiMessage size={25} />
                  <h3> 24/7 Support</h3>
                </div>
              </div>

              <div className="grid gap-2 my-4 px-6">
                <hr className="mb-4" />
                <h2 className="mb-6">
                  Quick group meetings for multiple teams
                </h2>
                <button className="mb-6 text-white p-2 px-4 rounded-full font-bold  bg-[rgb(39,48,83)]">
                  Buy Tickets
                </button>
              </div>
            </div>
            {/* End of Card */}
            {/* Start of card */}
            <div className="shadow-2xl px-6 ">
              <div className="py-3 px-6 w-full   rounded-xl bg-[rgb(39,48,83)] text-white font-bold text-2xl flex items-center justify-between ">
                <h1>Early Bird</h1>
                <h3>$640</h3>
              </div>

              <div className="grid gap-2 my-4 px-6">
                <div className="flex items-center gap-3">
                  <FiCoffee size={25} />
                  <h3>All-Day Coffee + Snacks</h3>
                </div>
                <div className="flex items-center gap-3">
                  <IoGameController size={25} />
                  <h3>After Party</h3>
                </div>
                <div className="flex items-center gap-3">
                  <TiMessage size={25} />
                  <h3> 24/7 Support</h3>
                </div>
              </div>

              <div className="grid gap-2 my-4 px-6">
                <hr className="mb-4" />
                <h2 className="mb-6">
                  Quick group meetings for multiple teams
                </h2>
                <button className="mb-6 text-white p-2 px-4 rounded-full font-bold  bg-[rgb(39,48,83)]">
                  Buy Tickets
                </button>
              </div>
            </div>
            {/* End of Card */}
            {/* Start of card */}
            <div className="shadow-2xl px-6 ">
              <div className="py-3 px-6 w-full   rounded-xl bg-[rgb(39,48,83)] text-white font-bold text-2xl flex items-center justify-between ">
                <h1>Early Bird</h1>
                <h3>$640</h3>
              </div>

              <div className="grid gap-2 my-4 px-6">
                <div className="flex items-center gap-3">
                  <FiCoffee size={25} />
                  <h3>All-Day Coffee + Snacks</h3>
                </div>
                <div className="flex items-center gap-3">
                  <IoGameController size={25} />
                  <h3>After Party</h3>
                </div>
                <div className="flex items-center gap-3">
                  <TiMessage size={25} />
                  <h3> 24/7 Support</h3>
                </div>
              </div>

              <div className="grid gap-2 my-4 px-6">
                <hr className="mb-4" />
                <h2 className="mb-6">
                  Quick group meetings for multiple teams
                </h2>
                <button className="mb-6 text-white p-2 px-4 rounded-full font-bold  bg-[rgb(39,48,83)]">
                  Buy Tickets
                </button>
              </div>
            </div>
            {/* End of Card */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tickets;
