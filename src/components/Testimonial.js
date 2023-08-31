import React, { useState } from "react";
import Card from "./Card";

import {FiChevronLeft, FiChevronRight} from "react-icons/fi"

const Testimonial=(props)=>{
    let reviews=props.reviews;

    const [index,setIndex]=useState(0)

    function leftSwiftHandler(){
        if(index-1<0){
            setIndex(reviews.length-1);
        }
        else{
            setIndex(index-1)
        }

    }


    function rightSwiftHandler(){
        if(index+1>=reviews.length){
            setIndex(0)
        }
        else{
            setIndex(index+1)
        }

    }



    function surpriseHandler(){
      let randomIndex= Math.floor (Math.random()*reviews.length)
      setIndex(randomIndex)

    }

    return(
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center mt-10 p-10 transition-all duration-500 hover:shadow-xl rounded-lg">

          


            <Card review={reviews[index]}/>


            <div className=" cursor-pointer flex text-3xl mt-10 gap-5 text-violet-400 font-bold justify-center" >
                <button className="hover:text-violet-600">
                    <FiChevronLeft onClick={leftSwiftHandler}/>

                </button>
                <button className="hover:text-violet-600">
                    <FiChevronRight  onClick={rightSwiftHandler}/>
                </button>
            </div>

            <div>
                <button className="bg-violet-400 hover:bg-violet-600 transition-all font-bold   duration-600 cursor-pointer px-8 py-3 rounded-lg text-lg mt-5 hover:text-white" onClick={surpriseHandler}>
                    Surprise me
                </button>
            </div>
        </div>
    )

}
export default Testimonial;