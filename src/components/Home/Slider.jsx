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
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[500px] lg:h-[695px] bg-slate-100"
      >
      
       
      
        {/* try */}
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/tqQsN9V/anna-demianenko-X912jiy57-JU-unsplash.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold "> Skyline Penthouse In  NewYork</h1>
                <p className="mb-5 ">
                Discover luxury living in the heart of New York. Elevate your
              lifestyle in a dream apartment that promises unmatched elegance
              and comfort. Your metropolitan sanctuary awaits.
                </p>
                 <button className="btn  btn-wide btn-success">See Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1526825250684-7482c1c58de7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          >
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold "> Lavish Poolside Oasis</h1>
                <p className="mb-5 ">
                Immerse yourself in the epitome of luxury at our Lavish Poolside
              Oasis. This exclusive retreat offers a tranquil escape, with
              sparkling waters, lush landscapes, and unparalleled serenity.
              Experience the pinnacle of sophistication and leisure—where every
              moment becomes a cherished memory
                </p>
                 <button className="btn  btn-wide btn-success">See Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          >
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold ">Royel Place</h1>
                <p className="mb-5 ">
                Step into a realm where luxury meets legacy at our Royal Places
              House. Designed for those who covet grandeur and exclusivity, each
              space is a testament to timeless elegance and unparalleled
              sophistication, offering a living experience that is as regal as
              it is refined.
                </p>
                 <button className="btn  btn-wide btn-success ">See Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* try end */}
      </Swiper>
    </>
  );
};

export default Slider;
