import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import Marquee from "react-fast-marquee";

const Review = () => {
  const [rev, setRev] = useState([]);
  useEffect(() => {
    fetch("review.js")
      .then((res) => res.json())
      .then((data) => setRev(data));
  }, []);
  return (
    <div>
      <h1 className="text-[44px] font-[700] text-center mt-7 border-b-2">
        Customer Review
      </h1>
      <div className="flex">
        <Marquee speed={100}>

        {
        rev.map((e, i) => (
          <ReviewCard key={i} e={e}></ReviewCard>
        ))
        }

        </Marquee>
      </div>
    </div>
  );
};

export default Review;
