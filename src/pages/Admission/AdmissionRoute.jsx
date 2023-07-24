import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const AdmissionRoute = () => {
    const [collegeNames, setCollegeNames] = useState([])

    useEffect(() =>{
        fetch('https://college-server-rouge.vercel.app/college')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCollegeNames(data)
        })
    },[])
  return (
    <div>
     <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Admission</th>
        <th>Admission</th>
      </tr>
    </thead>
    <tbody>
    {
         collegeNames.map((names,index) => <>
          <tr key={index}>
        <th>{index + 1}</th>
        <td>{names.name}</td>
        <td>{names.admissionDates}</td>
        <td><Link to={`/admissionform/${names._id}`} className='btn btn-primary'>Applicant</Link></td>
      </tr>
         
         </>)
        }
     
    </tbody>
  </table>


      <div className="overflow-x-auto">
  
</div>

    </div>
  );
};

export default AdmissionRoute;
