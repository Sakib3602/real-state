const Offer = () => {
  return (
    <div className="pt-24 pl-5 lg:pt-28 lg:pl-20 ">
      <div className="card w-[94%] glass">
        <figure>
          <img
          className="w-[600px]"
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8fDA%3D"
            alt="car!"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className=" text-center text-5xl">Best Offer in This Summer</h2>
          <h2 className=" text-center text-2xl">Ripton X House</h2>
          <h2 className=" text-center text-2xl font-[500]">Only : $23400000</h2>
          <div className="m-auto">
          <button className="btn btn-wide btn-outline">BUY</button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Offer;
