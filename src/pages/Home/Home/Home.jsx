import React from 'react';
import Searchbar from '../Searchbar';
import CollegesSection from '../CollegesSection';
import Sliders from '../Sliders';
import ResearchPaper from '../ResearchPaper';
import Review from '../Review';

const Home = () => {
    return (
        <div>
           <CollegesSection />
           <Sliders />
            <ResearchPaper />
            <Review />
        </div>
    );
};

export default Home;