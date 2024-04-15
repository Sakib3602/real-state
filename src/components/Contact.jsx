import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import "leaflet/dist/leaflet.css";
import { Marker, Popup } from "react-leaflet";
import { useEffect, useState } from 'react';
import moment from 'moment';
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    const [currentTime, setCurrentTime] = useState(moment().format('h:mm:ss a'));
    useEffect(()=>{
        document.title = "DREAM_TULIP | Contact With Us"
        setInterval(() => {
            setCurrentTime(moment().format('h:mm:ss a')); // Update time every second
        }, 1000);

       
      },[])
  const position = [24.0218, 90.2972];
  return (
    <div className="grid w-[88%] grid-cols-1  lg:grid-cols-2 pl-16 pt-24 lg:pt-28 lg:pl-24">
      <div className="w-full lg:h-[500px] ">
        <h1 className="text-center text-[36px] lg:text-[46px] font-[600]">
          Contact Us
        </h1>

            
        <form>
          <div className="p-5 space-y-6">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="unknown@gmail.com" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input type="text" className="grow" placeholder="Your Name" />
            </label>

            <input
              type="text"
              placeholder="Your Message"
              className="input input-bordered input-lg w-full "
            />
            <button className="btn w-full btn-outline">Send A Email</button>
          </div>
        </form>

        <h1>Our Opening Time Is 10.00 am To 10.00 pm</h1>
        {
            <h1>Now Time is, {currentTime}</h1>
        }


        <h1 className='flex items-center mt-3'><FaPhoneAlt className='mr-3'></FaPhoneAlt> +880 1234567886</h1>
        <h1 className='flex items-center'><FaPhoneAlt className='mr-3'></FaPhoneAlt> +880 1937503849</h1>
        <h1 className='flex items-center'><FaWhatsapp  className='mr-3'></FaWhatsapp> +880 1937503849</h1>
        
      </div>


      <div className="w-full h-[500px] bg-slate-200 rounded-xl">
        <div>
          <MapContainer className={"w-full h-[500px] rounded-xl"} center={position} zoom={16} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                Location Of Our Office.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Contact;
