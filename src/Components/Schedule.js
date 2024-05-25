import React from "react";
import person1 from "../Assests/images/avatar/happy-asian-man-standing-with-arms-crossed-grey-wall.jpg";
import person3 from "../Assests/images/avatar/portrait-good-looking-brunette-young-asian-woman.jpg";
import person5 from "../Assests/images/avatar/senior-man-white-sweater-eyeglasses.jpg";
import { MdOutlineWatchLater } from "react-icons/md";
import { GiVideoConference } from "react-icons/gi";
import schedule3 from "../Assests/images/schedule/business-woman-making-presentation-office.jpg"
import schedule2 from "../Assests/images/schedule/clayton-cardinalli-JMoFpdqL3XM-unsplash.jpg"
import schedule1 from "../Assests/images/schedule/fabian-friedrich-JDUVM9_VaZE-unsplash.jpg"


const Schedule = () => {
  return (
    <div className="max-w-[1300px] mx-auto">
      <div className="px-8 my-20 grid gap-10 grid-cols-1 text-center">
        <h1 className="text-4xl font-bold   ">
          Next{" "}
          <span className="border-b  border-[rgb(116,213,235)] text-[rgb(116,213,235)]">
            Schedule
          </span>{" "}
        </h1>

        <div className=" grid grid-cols-2 gap-4 md:grid-cols-4 items-center">
          <div className="shadow-xl px-2 py-2 rounded-lg ">
            <h1 className="text-4xl font-bold text-[rgb(116,213,235)]">
              Day One
            </h1>
            <h3 className="text-gray-400">July 12,2022</h3>
          </div>
          <div>
            <h1 className="text-4xl font-bold">Day Two</h1>
            <h3 className="text-gray-400">July 14,2022</h3>
          </div>
          <div>
            <h1 className="text-4xl font-bold">Day Three</h1>
            <h3 className="text-gray-400">July 16,2022</h3>
          </div>
          <div>
            <h1 className="text-4xl font-bold">Day Four</h1>
            <h3 className="text-gray-400">July 18,2022</h3>
          </div>
        </div>
      </div>

      {/* 2ND cards */}

      <div className="max-w-[1300px] mx-auto my-20 grid gap-8">
        {/* 1st cards */}
        <div className="px-4 grid md:grid-cols-2 grid-cols-1 gap-10 items-center" >
          <img src={schedule1} alt="" className="rounded-lg " />
          <div className="grid gap-6">
            <h1 className="font-bold text-4xl ">Startup Development Ideas</h1>
            <p className="text-gray-400 text-xl" >
              You are free to download any HTML CSS template from TemplateMo
              website. You can use any template for business purposes. You are
              not allowed to redistribute the downloadable ZIP file on any other
              template website. Thank you.
            </p>
            <div  className="flex gap-6 items-center">
                <img src={person1} alt="" className="h-14 w-14 rounded-full object-cover" />
                 <div  className="">
                    <h1>Logan Wilson</h1>
                    <h3>CEO/Founder</h3>
                 </div>
                 <div className="flex gap-4 items-center">
                 <MdOutlineWatchLater />
                   <h3>9:00 - 9:45 AM</h3>
                 </div>
                 <div className="flex gap-4 items-center " >
                 <GiVideoConference />
                   <h2>Conference Hall 3</h2>
                 </div>
            </div>
          </div>
        </div>
        {/* end of cards */}
        {/* 1st cards */}
        <div className="px-4 grid md:grid-cols-2 grid-cols-1 gap-10 items-center" >
          <img src={schedule2} alt="" className="rounded-lg " />
          <div className="grid gap-6">
            <h1 className="font-bold text-4xl ">Introduction to Online Businesses</h1>
            <p className="text-gray-400 text-xl" >
            Quisque mollis, ante non semper ultricies, nulla sapien sollicitudin augue, id scelerisque nunc turpis nec urna. Class aptent taciti sociosqu ad litora.
            </p>
            <div  className="flex gap-6 items-center">
                <img src={person5} alt="" className="h-14 w-14 rounded-full object-cover" />
                 <div  className="">
                    <h1>Logan Wilson</h1>
                    <h3>CEO/Founder</h3>
                 </div>
                 <div className="flex gap-4 items-center">
                 <MdOutlineWatchLater />
                   <h3>9:00 - 9:45 AM</h3>
                 </div>
                 <div className="flex gap-4 items-center " >
                 <GiVideoConference />
                   <h2>Conference Hall 3</h2>
                 </div>
            </div>
          </div>
        </div>
        {/* end of cards */}
        {/* 1st cards */}
        <div className="px-4 grid md:grid-cols-2 grid-cols-1 gap-10 items-center " >
          <img src={schedule3} alt="" className="rounded-lg  bg-cover mx-auto" />
          <div className="grid gap-6">
            <h1 className="font-bold text-4xl ">Bootstrapping Startup</h1>
            <p className="text-gray-400 text-xl" >
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut consequat purus posuere tortor efficitur, sit amet dignissim libero aliquam.
            </p>
            <div  className="flex gap-6 items-center">
                <img src={person3} alt="" className="h-14 w-14 rounded-full object-cover" />
                 <div  className="">
                    <h1>Logan Wilson</h1>
                    <h3>CEO/Founder</h3>
                 </div>
                 <div className="flex gap-4 items-center">
                 <MdOutlineWatchLater />
                   <h3>9:00 - 9:45 AM</h3>
                 </div>
                 <div className="flex gap-4 items-center " >
                 <GiVideoConference />
                   <h2>Conference Hall 3</h2>
                 </div>
            </div>
          </div>
        </div>
        {/* end of cards */}
      </div>
    </div>
  );
};

export default Schedule;
