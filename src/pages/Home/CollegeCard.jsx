import React from "react";
import { Link } from "react-router-dom";

const CollegeCard = ({college}) => {
    const {_id,name,events,admissionDates,researchHistory,image,sports} = college
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-start text-start">
          <h2 className="card-title">{name}</h2>
          <p><span className="text-black text-md font-bold">Admission Dates: </span> {admissionDates}</p>
          <p><span className="text-black text-md font-bold">Events:</span>  {events}</p>
          <p> <span className="text-black text-md font-bold">Reasearch: </span> {researchHistory}</p>
       
          <div className="card-actions">
            <Link to={`/college/${_id}`} className="btn btn-primary btn-block">Apply</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
