import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
{/* Same as */}

const Deatails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const data1 = data.find((e) => e.id == parseInt(id));

  function handle(){
     

     let book = JSON.parse(localStorage.getItem("Booked")) || []
     const book1 = book.find(e => e.id == data1.id)
     if(book1){
        toast("All Ready Booked ! Contact With Us.");

     }
     else{
        book.push(data1)
        let local = JSON.stringify(book)
        localStorage.setItem("Booked",local)
        toast("Booked !");
     }

  }

  return (
    <div className="pt-32 rounded-3xl font-sans ">
      <div className="w-[95%] flex flex-col lg:flex-row h-[560px] rounded-3xl   m-auto ">
        <div className="w-full lg:w-[45%] lg:h-full">
          <img className="w-full h-full rounded-3xl" src={data1.image} alt="" />
        </div>

        <div className="lg:ml-10 space-y-2">
          <h1 className="text-[40px]">{data1.estate_title}</h1>
          <hr />

          <h1 className="text-[30px]">Segment : {data1.segment_name}</h1>
          <hr />
          <div className="flex space-x-20">
            <h1 className="flex items-center">
              <CiLocationOn></CiLocationOn>
              {data1.location}
            </h1>
            <h1>Area : {data1.area}</h1>
          </div>
          <hr />

          <p className="text-[20px]">{data1.description}</p>
          <hr />

          <ul>
            <h1 className="text-[24px] font-[400]">
              Facilities You Will Get :
            </h1>
            {data1.facilities.map((e, i) => (
              <li key={i} className="mt-2">
                {e}
              </li>
            ))}
          </ul>
          <hr />

          <h1>It's For {data1.status}.</h1>
          <hr />
          <h1 className="text-[33px] font-[600]">{data1.price}</h1>

          <button onClick={handle} className="btn btn-wide ">Book This</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Deatails;
