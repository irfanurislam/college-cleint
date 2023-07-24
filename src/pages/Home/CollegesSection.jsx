import React, { useEffect, useState } from 'react';
import CollegeCard from './CollegeCard';
import { Link } from 'react-router-dom';

const CollegesSection = () => {
    const [colleges,setColleges] = useState([])
     
    useEffect(() =>{
        fetch('colleges.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setColleges(data)
        })
    },[])

    return (
        <div className='mt-28'>
            <div className='grid md:grid-cols-3 gap-4'>
                {
                    colleges.map(college => <CollegeCard key={college.id} college={college}></CollegeCard>)
                }
            </div>

           <div className='flex items-center mt-10 justify-center'>
           <Link to='/college' className='btn btn-primary'> See More </Link>
           </div>
        </div>
    );
};

export default CollegesSection;