import React, { useEffect, useState } from 'react';
import CollegeCard from './CollegeCard';

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
        </div>
    );
};

export default CollegesSection;