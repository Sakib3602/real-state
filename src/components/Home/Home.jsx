
import { useEffect } from "react";
import HomeCard from "./HomeCard";
import Review from "./Review";
import Slider from "./Slider";
import Aos from "aos";
import 'aos/dist/aos.css'
import {
  
    useLoaderData,
  } from "react-router-dom";

const Home = () => {
    Aos.init()
    useEffect(()=>{
        document.title = "DREAM_TULIP  | Home"
      },[])

    const data = useLoaderData()
   
    return (
        <div className="" >
        <Slider></Slider>
        <h1 className="text-center mt-[80px]"><span className="text-[38px] lg:text-[60px] font-[600]">Discover Luxury</span> <br /> <span className="text-[28px] lg:text-[35px] font-[400]">Exclusive Properties of Unrivaled Magnificence</span></h1>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-11 mt-11 lg:w-[95%] m-auto">
            {
                data.map((e)=> <HomeCard  key={e.id} e={e}></HomeCard>)
            }
        </div>

        <Review></Review>


        </div>
        


    );
};

export default Home;