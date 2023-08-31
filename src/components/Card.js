import React from "react";
import {FaQuoteLeft,FaQuoteRight,FaGem} from "react-icons/fa"



const Card=(props)=>{
    let review = props.review;
    return(
        <div className="flex flex-col md:relative">


            <div className="absolute top-[-6rem] z-[10] ">
                <img className="aspect-square rounded-full w-[140px] h-[140px] z-[25]"
                src= {review.image}>
                </img >
                <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-0.4rem] left-[0.5rem] z-[-1]">

                </div>
            </div>


            <div className="text-center mt-7 "> 
                <p className="capitalize text-3xl font-bold tracking-wide">
        {review.name}
                </p>
            </div>


            <div className="text-center mt-2 text-small "> 
                <p className="text-violet-400 uppercase">
        {review.job}
                </p>
            </div>


            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteLeft/>
            </div>


            <div className="text-center mt-4 text-slate-500">
                {review.text}
            </div>


            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteRight/>
            </div>


            
        </div>
    )

}
export default Card;