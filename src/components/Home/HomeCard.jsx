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
        <div className="card-actions justify-end">
          <Link to={`/details/${id}`}><button className="btn  btn-outline btn-full">See Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
