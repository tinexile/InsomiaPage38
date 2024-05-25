import React from "react";
import person1 from "../Assests/images/avatar/happy-asian-man-standing-with-arms-crossed-grey-wall.jpg";
import person2 from "../Assests/images/avatar/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university.jpg";
import person3 from "../Assests/images/avatar/portrait-good-looking-brunette-young-asian-woman.jpg";
import person4 from "../Assests/images/avatar/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction.jpg";
import person5 from "../Assests/images/avatar/senior-man-white-sweater-eyeglasses.jpg";
const Speakers = () => {
  return (
    <div className="w-full bg-gray-300 my-10">
      <div className=" px-6 max-w-[1300px] mx-auto py-8 grid grid-cols-1 gap-4">
        <div className="grid sm:grid-cols-2 gap-6 items-center">
          <div className="grid gap-5">
            <h1 className="text-5xl font-bold">
              Our <span className="text-[rgb(116,213,235)]">Speakers</span>{" "}
            </h1>
            <p className="text-gray-400 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut dolore
            </p>
          </div>
          <div>
            <img src={person1} alt="person1" className="rounded-md" />
            <div className="max-w-[90%] mx-auto rounded-lg bg-white w-full relative bottom-[130px] px-6 py-4">
              <h1 className="text-3xl font-bold">Logan Wilson</h1>
              <h3 className="text-gray-400">CEO/FOUNDER</h3>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-4">
          <div>
            <img src={person2} alt="perosn" className="rounded-md" />
            <div className="max-w-[90%] mx-auto rounded-lg bg-white w-full relative bottom-[70px] px-6 ">
              <h1 className="text-xl font-bold">Natalie</h1>
              <h3 className="text-gray-400 capitalize">Event Planner</h3>
            </div>
          </div>

          <div>
            <img src={person3} alt="perosn" className="rounded-md" />
            <div className="max-w-[90%] mx-auto rounded-lg bg-white w-full relative bottom-[70px] px-6 ">
              <h1 className="text-xl font-bold">Thomas</h1>
              <h3 className="text-gray-400">STARTUP COACH</h3>
            </div>
          </div>

          <div>
            <img src={person4} alt="perosn" className="rounded-md" />
            <div className="max-w-[90%] mx-auto rounded-lg bg-white w-full relative bottom-[70px] px-6 ">
              <h1 className="text-xl font-bold">Isabella</h1>
              <h3 className="text-gray-400">EVENT MANAGER</h3>
            </div>
          </div>

          <div>
            <img src={person5} alt="perosn" className="rounded-md" />
            <div className="max-w-[90%] mx-auto rounded-lg bg-white w-full relative bottom-[70px] px-6 ">
              <h1 className="text-xl font-bold">SAMANTHA</h1>
              <h3 className="text-gray-400">TOP LEVEL SPEAKER</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
