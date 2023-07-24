import React, { useContext, useEffect, useState } from 'react';
import { AuthConext } from '../../Providers/AuthProviders';

const MyCollege = () => {
    
    const { user } = useContext(AuthConext);
  const [mycollege, setMyCollege] = useState([]);



  const url = `https://college-server-rouge.vercel.app/addmissonform?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyCollege(data);
      });
  }, [url]);



    return (
        <div className='my-32'>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         SL
        </th>
        <th>Name</th>
        <th>college Name</th>
        <th>Department</th>
        <th>Admisson</th>
        <th>feedback</th>
      </tr>
    </thead>
    <tbody>
     {
        mycollege.map((singlecollege,index) => <>
         <tr  key={singlecollege?._id}>
        <th>
          <label>
           {index + 1}
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={singlecollege?.image} />
              </div>
            </div>
            <div>
              <div className="font-bold">{singlecollege.name}</div>
              <div className="text-sm opacity-50">{singlecollege.adress}</div>
            </div>
          </div>
        </td>
        <td>
         {singlecollege.collegeName}
          <br/>
        
        </td>
        <td>{singlecollege.birth}</td>
        <th>
          {singlecollege.subject}
        </th>
        <th>
          <button className="btn btn-xs btn-primary">review</button>
        </th>
      </tr>
        </>)
     }
      
    </tbody>
   
   
  </table>
</div>
        </div>
    );
};

export default MyCollege;