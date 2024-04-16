const Look = () => {
  return (
    <div>
      <h1 className="text-center mt-10">We're Here To Help You</h1>
      <h1 className="text-[30px] mt-5 font-[600] lg:text-[44px] text-center">
        What Are You Looking For?
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="mx-auto my-20 w-[70%] lg:max-w-[350px] space-y-6 rounded-xl bg-white px-4 pb-8 pt-4 font-sans shadow-lg ">
          <div className="relative flex h-48 w-full justify-center lg:h-[280px]">
            <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
              {/* love  */}
              <div className="flex items-center">
                <svg
                  width={30}
                  className="fill-transparent stroke-white stroke-2 hover:fill-red-500 hover:stroke-red-500 "
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ cursor: "pointer" }}
                >
                  {" "}
                  <g strokeWidth="0"></g>{" "}
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>{" "}
                  <g id="SVGRepo_iconCarrier">
                    <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path>
                  </g>
                </svg>
              </div>
              <button className="rounded-xl bg-[#0095FF] px-3 py-1 font-medium text-white duration-200 hover:bg-[#0095FF]/90">
                30% EMI
              </button>
            </div>
            <img
              width={300}
              height={300}
              className="h-full w-full rounded-lg bg-black/40"
              src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGx1eHVyeSUyMGJhc2ljJTIwaG9tZSUyMHBpYyUyMG91dGRvcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="card navigate ui"
            />
          </div>
          <div className="mx-auto w-[85%] space-y-2 text-center font-semibold">
            <h6 className="text-sm md:text-base lg:text-lg">
              Need Basic Luxury House?
            </h6>
            <p className="text-xs font-semibold text-gray-400 md:text-sm">
              Starts From Only $1000000
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base">
            <button className="rounded-lg bg-[#49B2FF] px-4 py-2 font-sans font-semibold text-white duration-300 hover:scale-105 hover:bg-sky-600 btn-wide ">
              View 
            </button>
            
          </div>
        </div>
        {/*  */}
        <div className="mx-auto  my-20 w-[70%] lg:max-w-[350px] space-y-6 rounded-xl bg-white px-4 pb-8 pt-4 font-sans shadow-lg ">
        <div className="relative flex h-48 w-full justify-center lg:h-[280px]">
            <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                {/* love  */}
                <div className="flex items-center"><svg width={30} className="fill-transparent stroke-white stroke-2 hover:fill-red-500 hover:stroke-red-500 " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ cursor: 'pointer' }}> <g strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"><path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path></g></svg></div>
                <button className="rounded-xl bg-[#111112] px-3 py-1 font-medium text-white duration-200 hover:bg-[#0095FF]/90">10% EMI</button>
            </div>
            <img width={300} height={300} className="h-full w-full rounded-lg bg-black/40" src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bHV4dXJ5JTIwcGVudCUyMGhvdXNlJTIwcGljJTIwb3V0ZG9yfGVufDB8fDB8fHww" alt="card navigate ui" />
        </div>
        <div className="mx-auto w-[85%] space-y-2 text-center font-semibold">
            <h6 className="text-sm md:text-base lg:text-lg">Need Basic Pent Houses?</h6>
            <p className="text-xs font-semibold text-gray-400 md:text-sm">Starts From Only $6000000</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base">
            <button className="rounded-lg btn-wide  bg-[#49B2FF] px-4 py-2 font-sans font-semibold text-white duration-300 hover:scale-105 hover:bg-sky-600">View </button>
           
        </div>
    </div>
    {/*  */}
    <div className="mx-auto my-20  w-[70%] lg:max-w-[350px] space-y-6 rounded-xl bg-white px-4 pb-8 pt-4 font-sans shadow-lg ">
        <div className="relative flex h-48 w-full justify-center lg:h-[280px]">
            <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                {/* love  */}
                <div className="flex items-center"><svg width={30} className="fill-transparent stroke-white stroke-2 hover:fill-red-500 hover:stroke-red-500 " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ cursor: 'pointer' }}> <g strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"><path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path></g></svg></div>
                <button className="rounded-xl bg-[#0095FF] px-3 py-1 font-medium text-white duration-200 hover:bg-[#0095FF]/90">0% EMI</button>
            </div>
            <img width={300} height={300} className="h-full w-full rounded-lg bg-black/40" src="https://plus.unsplash.com/premium_photo-1681922761648-d5e2c3972982?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGx1eHVyeSUyMGJlYWNoJTIwaG91c2UlMjBwaWMlMjBvdXRkb3J8ZW58MHx8MHx8fDA%3D" alt="card navigate ui" />
        </div>
        <div className="mx-auto w-[85%] space-y-2 text-center font-semibold">
            <h6 className="text-sm md:text-base lg:text-lg">Need Basic Luxury Beach House?</h6>
            <p className="text-xs font-semibold text-gray-400 md:text-sm">Starts From Only $9070000</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base">
            <button className="rounded-lg btn-wide  bg-[#49B2FF] px-4 py-2 font-sans font-semibold text-white duration-300 hover:scale-105 hover:bg-sky-600">View </button>
            
        </div>
    </div>
      </div>
    </div>
  );
};

export default Look;
