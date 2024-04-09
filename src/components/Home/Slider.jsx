
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[695px] bg-slate-100"
      >
        <SwiperSlide
          className=""
          style={{
            background:
              'url("https://i.ibb.co/tqQsN9V/anna-demianenko-X912jiy57-JU-unsplash.jpg") center center / cover no-repeat ',
          }}
        >
          <div className="w-[400px] lg:w-[800px] m-auto space-y-10">
            <h1 className="text-[33px] lg:text-[50px] font-[600] mt-[120px] lg:mt-[200px]">
            Skyline Penthouse In <br /> NewYork
            </h1>

            <p>
              Discover luxury living in the heart of New York. Elevate your
              lifestyle in a dream apartment that promises unmatched elegance
              and comfort. Your metropolitan sanctuary awaits.
            </p>
            <button className="btn btn-wide btn-outline">See Now</button>
          </div>



        </SwiperSlide>
        <SwiperSlide
          style={{
            background:
              'url("https://images.unsplash.com/photo-1526825250684-7482c1c58de7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") center center / cover no-repeat ',
          }}
        >
           <div className="w-[400px]  font-[700] lg:w-[800px] m-auto space-y-10">
            <h1 className="text-[33px] lg:text-[50px] font-[600] mt-[120px] lg:mt-[200px]">
            Lavish Poolside Oasis
            </h1>

            <p>
            Immerse yourself in the epitome of luxury at our Lavish Poolside Oasis. This exclusive retreat offers a tranquil escape, with sparkling waters, lush landscapes, and unparalleled serenity. Experience the pinnacle of sophistication and leisure—where every moment becomes a cherished memory
            </p>
            <button className="btn  btn-wide btn-danger">See Now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            background:
              'url("https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") center center / cover no-repeat ',
          }}
        >
           <div className="w-[400px] lg:w-[800px] text-white font-[700] m-auto space-y-10">
            <h1 className="text-[43px] lg:text-[50px] font-[600] mt-[120px] lg:mt-[200px]">
            Royel Place
            </h1>

            <p>
            Step into a realm where luxury meets legacy at our Royal Places House. Designed for those who covet grandeur and exclusivity, each space is a testament to timeless elegance and unparalleled sophistication, offering a living experience that is as regal as it is refined.
            </p>
            <button className="btn  btn-wide btn-danger">See Now</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
