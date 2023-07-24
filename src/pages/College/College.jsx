import React, { useEffect, useState } from "react";
import CollegeCard from "../Home/CollegeCard";

const College = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("https://college-server-rouge.vercel.app/college")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setColleges(data);
      });
  }, []);

  return (
    <div className="my-20">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: "url(https://i.ibb.co/6shMTBX/p1.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Your Dream College</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-32">
        <div className="grid md:grid-cols-3 gap-4">
          {colleges.map((college) => (
            <CollegeCard key={college._id} college={college}></CollegeCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default College;
