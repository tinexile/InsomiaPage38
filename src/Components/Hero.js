import React from "react";
import video from "../Assests/videos/video.mp4";
import { GoArrowDown } from "react-icons/go";
import Nineten from "../Assests/images/highlight/2019Highlights.jpg"
import Twenty from "../Assests/images/highlight/2020Highlights.jpg"
import TwentyOne from "../Assests/images/highlight/2021Highlights.jpg"

const Hero = () => {
  return (
    <>
      <div>


        <div className="bg-black/50  h-screen flex items-center justify-center">
          <video autoplay muted controls class="w-full h-full object-cover">
            <source src={video} type="video/mp4" />
          </video>
        </div>

        <div className="absolute left-[50%] top-[30%] translate-x-[-50%] text-center">
          <div className="text-center flex flex-col justify-center items-center gap-6">
            <h1 className="text-4xl font-bold text-[rgb(116,213,235)]">
              LEADERSHIP
            </h1>
            {/* <div className='border- border-[rgb(27,202,241)]' ></div> */}
            <h1 className="text-4xl font-bold text-white">CONFERENCE 2022</h1>
            <div className=" mt-4 flex gap-8 text-white font-bold">
              <div className="border-2 border-white-500  ">
                <h3 className="px-4 py-4">July 12 to 18,2022</h3>
              </div>
              <div className="border-2 border-white-500  ">
                <h3 className="px-4 py-4">July 12 to 18,2022</h3>
              </div>
            </div>

            <GoArrowDown className="mt-6  bg-white rounded-full " size={30} />
          </div>


        </div>

            {/* 3.Cards */}

            {/* <div className="  px-6 w-full relative top-[-150px]  left-[50%] translate-x-[-50%]  grid md:grid-cols-3 grid-cols-1 gap-2  " >
                <img src={Nineten} alt="hello" className="max-w-[400px] rounded-lg hover:scale-105 ease-in duration-300" />
                <img src={Twenty} alt="hello 1"  className="max-w-[400px] rounded-lg hover:scale-105 ease-in duration-300"/>
                <img src={TwentyOne} alt="hello 2" className="max-w-[400px] rounded-lg hover:scale-105 ease-in duration-300" />
            </div> */}
         
         

      </div>
    </>
  );
};

export default Hero;
