import React from "react";
import person1 from "../Assests/images/avatar/happy-asian-man-standing-with-arms-crossed-grey-wall.jpg";
import person2 from "../Assests/images/avatar/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university.jpg";
import person3 from "../Assests/images/avatar/portrait-good-looking-brunette-young-asian-woman.jpg";
import person4 from "../Assests/images/avatar/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction.jpg";
import person5 from "../Assests/images/avatar/senior-man-white-sweater-eyeglasses.jpg";

const Story = () => {
  return (
    <div className=" max-w-[1300px] px-6 mx-auto my-24 grid sm:grid-cols-2 gap-10"  >
      <div className="grid gap-5" >
        <h1 className="text-4xl font-bold" >
          Our <span className="text-[rgb(116,213,235)] border-b-4  border-[rgb(116,213,235)]" >Story</span>
        </h1>
        <h3 className="text-4xl font-bold" >The importance of Leadership Conference in 2022</h3>
        <p className="text-gray-400 text-xl" >
          Leadership Event is one-page Bootstrap v5.1.3 CSS layout for your
          website. Thank you for choosing TemplateMo website where you can
          instantly download free CSS templates at no cost.
        </p>
     
      <div className="grid grid-cols-2 gap-8">
        <button className="p-2 text-md font-semibold text-[rgb(116,213,235)]  border-2 border-[rgb(116,213,235)] rounded-full" >Meet Speakers</button>
        <button className="bg-[rgb(39,48,83)] rounded-full p-2 px-4 text-white font-semibold" >Check Out Schedule</button>
      </div>
      </div>
      {/* 2nd side */}
      <div className="grid gap-4" >
        <h1 className="text-3xl font-bold " >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut dolore
        </h1>
        <hr />

        <div className="flex items-center">
          <img
            src={person2}
            alt="person2"
            className="h-12 w-12 rounded-full object-cover"
          />
          <img
            src={person3}
            alt="person3"
            className="h-12 w-12 rounded-full object-cover"
          />
          <img
            src={person4}
            alt="person4"
            className="h-12 w-12 rounded-full object-cover"
          />
          <img
            src={person5}
            alt="person5"
            className="h-12 w-12 rounded-full object-cover"
          />
          <img
            src={person1}
            alt="person1"
            className="h-12 w-12 rounded-full object-cover"
          />

          <span className="ml-8">120+ People are attending with us</span>
        </div>
      </div>
    </div>
  );
};

export default Story;
