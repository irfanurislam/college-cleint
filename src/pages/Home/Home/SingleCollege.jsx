import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleCollege = () => {
  const singleCollege = useLoaderData();
  console.log(singleCollege);

  const {name,_id,admissionDates,events,researchHistory,image,facilities,sports} = singleCollege
  return (
    <div>

      <div className="hero h-[15rem] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">{singleCollege?.name}</h1>
            <p className="py-6">
              Discover thousands of Master's degrees worldwide!
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse gap-4">
            <img
              src={image}
              className="max-w-xl rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">{name}</h1>
              <p className="py-6">
             SPorts:  {sports}
              </p>
              <div>
              Facilites: 
                {
                  facilities.map((faci,index) => <>
                  <li key={index} className="py-1">
                 {faci}
                  </li>
                  </>)
                }
              </div>

              <p className="my-3">
                Research : {researchHistory}
              </p>
              <p className="my-3">
                Events : {events}
              </p>
              <button className="btn btn-primary">Booked</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SingleCollege;
