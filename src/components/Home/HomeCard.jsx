import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const HomeCard = ({ e }) => {
  const { estate_title, image, facilities , segment_name,
    location, id
  } = e;
  return (
    <div data-aos="fade-up"
    data-aos-anchor-placement="top-center" className="card card-compact w-full md:w-[80%] m-auto lg:w-[460px] bg-base-100 shadow-xl">
      
      <figure>
        <img
          className="transition-transform duration-500 ease-in-out transform hover:scale-125 hover:shadow-lg"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{estate_title}</h2>
        <div className="flex justify-between text-[16px]">
            <div>
                <h1>Segment : {segment_name}</h1>
            </div>
            <div>
                <h1 className="flex  items-center"><CiLocationOn></CiLocationOn> {location}</h1>
            </div>
        </div>
        <h1 className="text-[27px] ">Facilities : </h1>
       
        <ul className="flex-grow">
            {
                facilities.map((e,i)=> <li className="text-[20px] mt-2" key={i}> {"** "}{e}</li>)
            }

        </ul>
        <div className="card-actions justify-end ">
          <Link to={`/details/${id}`}><button className="cursor-pointer font-semibold overflow-hidden relative z-100 border border-black group px-8 py-2 ">
  <span className="relative z-10 text-black group-hover:text-white text-xl duration-500">View Details</span>
  <span className="absolute w-full h-full bg-black -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
  <span className="absolute w-full h-full bg-black -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
</button>

</Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
