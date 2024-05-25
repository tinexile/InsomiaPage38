import React from "react";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <div className="max-w-[1300px] mx-auto mb-14">
        <div className=" py-10 px-6 my-10 flex justify-between items-center ">
          <h1 className="uppercase font-bold text-[rgb(27,202,241)] text-xl font-sans">
            Leadership <br />
            Event
          </h1>

          <div className="flex items-center gap-4 ">
            <FaFacebook size={30} />
            <IoLogoInstagram size={30} />
            <FaWhatsapp size={30} />
            <CiYoutube size={30} />
          </div>

          
        </div>
        <hr className="mb-10" />

        <div className="flex flex-col sm:flex-row gap-6 justify-between items-center">
          <div className="flex items-center gap-5">
            <h3>Our Story</h3>
            <h3>Code Of Conduct</h3>
            <h3>Privacy and Terms</h3>
            <h3>Contact</h3>
          </div>

          <div>
            <h1>
              Copyright © 2022 Leadership Event Co., Ltd. All Rights Reserved.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
