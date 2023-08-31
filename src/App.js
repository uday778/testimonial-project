import React from "react";
import Testimonial from "./components/Testimonial";
import reviews from "./data";

const App = () => {
  return <div className="flex flex-col w-[100%] h-[100vh] justify-center items-center bg-gray-300 ">

    <div className="text-center">
      <h1 className="text-4xl font-bold">Our Testimonial</h1>
      <div className="bg-violet-600 h-[4px] w-[140px] mt-1 mx-auto"></div>
      <Testimonial reviews={reviews}/>
    </div>
  </div>;
};

export default App;
