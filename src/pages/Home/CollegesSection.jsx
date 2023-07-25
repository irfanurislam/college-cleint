import React, { useEffect, useState } from 'react';
import CollegeCard from './CollegeCard';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';

const CollegesSection = () => {
    const [colleges,setColleges] = useState([])
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() =>{
        fetch('https://college-server-rouge.vercel.app/topcollege')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setColleges(data.slice(0,3))
            setFilteredData(data.slice(0,3))
        })
    },[])

    const handleSearch = (searchTerm) => {
        const filteredColleges = filteredData.filter((college) =>
          college.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setColleges(filteredColleges);
      };
    return (
        <div className='mt-14'>
            <Searchbar onSearch={handleSearch}></Searchbar>
            {colleges.length > 0 ? (
        <div className='grid md:grid-cols-3 gap-4'>
          {colleges.map((college) => (
            <CollegeCard key={college._id} college={college} />
          ))}
        </div>
      ) : (
        <p className='text-center text-red-500 mt-4'>
          No colleges available for the given search term.
        </p>
      )}

           <div className='flex items-center mt-10 justify-center'>
           <Link to='/college' className='btn btn-primary'> See More </Link>
           </div>
        </div>
    );
};

export default CollegesSection;