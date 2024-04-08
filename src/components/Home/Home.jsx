import HomeCard from "./HomeCard";
import Slider from "./Slider";
import {
  
    useLoaderData,
  } from "react-router-dom";

const Home = () => {

    const data = useLoaderData()
    console.log(data)
    return (
        <div className="" >
        <Slider></Slider>
        <h1 className="text-center mt-[80px]"><span className="text-[38px] lg:text-[60px] font-[600]">Discover Luxury</span> <br /> <span className="text-[28px] lg:text-[35px] font-[400]">Exclusive Properties of Unrivaled Magnificence</span></h1>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-11 mt-11 lg:w-[95%] m-auto">
            {
                data.map((e)=> <HomeCard key={e.id} e={e}></HomeCard>)
            }
        </div>


        </div>
        


    );
};

export default Home;