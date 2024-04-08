
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
              'url("../../assets/samson-ZGjbiukp_-A-unsplash.jpg") center center / cover no-repeat ',
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
            backgroundImage:
              ' url("../../assets/main2.jpg") center center / cover no-repeat',
          }}
        >
           <div className="w-[400px] lg:w-[800px] m-auto space-y-10">
            <h1 className="text-[33px] lg:text-[50px] font-[600] mt-[120px] lg:mt-[200px]">
            Lavish Poolside Oasis
            </h1>

            <p>
            Immerse yourself in the epitome of luxury at our Lavish Poolside Oasis. This exclusive retreat offers a tranquil escape, with sparkling waters, lush landscapes, and unparalleled serenity. Experience the pinnacle of sophistication and leisure—where every moment becomes a cherished memory
            </p>
            <button className="btn btn-wide btn-outline">See Now</button>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              'url("../../assets/main4.jpg") center center / cover no-repeat',
          }}
        >
           <div className="w-[400px] lg:w-[800px] m-auto space-y-10">
            <h1 className="text-[33px] lg:text-[50px] font-[600] mt-[120px] lg:mt-[200px]">
            Royel Place
            </h1>

            <p>
            Step into a realm where luxury meets legacy at our Royal Places House. Designed for those who covet grandeur and exclusivity, each space is a testament to timeless elegance and unparalleled sophistication, offering a living experience that is as regal as it is refined.
            </p>
            <button className="btn btn-wide btn-outline">See Now</button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
