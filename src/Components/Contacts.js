import React from "react";
import bgImages from "../Assests/images/maria-stewart-p4tj0g-_aMM-unsplash.jpg";

const Contacts = () => {
  return (
    <>
      <div className="relative ">
        <img src={bgImages} alt="" />

        <div className="w-full absolute left-0 top-0">
          <h1 className="text-left pl-16 text-white font-bold text-4xl  py-4 bg-[rgb(39,48,83)]">Please Say Hi</h1>



        </div>
             {/* <form className="text-center absolute left-14 top-44">
                <div className="flex flex-col gap-6 mb-6" >

                 <input type="text" placeholder="Name" className="py-4 rounded-2xl " />
                 <input type="email" placeholder="Email" />
                 <input type="text" placeholder="Subject" />
                </div>
                 <textarea cols="" rows="" placeholder="Message"></textarea>
             </form> */}
      </div>
    </>
  );
};

export default Contacts;
