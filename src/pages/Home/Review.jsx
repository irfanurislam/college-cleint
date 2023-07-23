import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';

const Review = () => {

    const reviews = [
        {
          id: 1,
          college: "Example University",
          reviewer: "John Doe",
          rating: 4,
          reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          id: 2,
          college: "ABC College",
          reviewer: "Jane Smith",
          rating: 5,
          reviewText: "ABC College is an amazing place to study. I had a great experience with supportive professors and a friendly campus environment.",
        },
        {
          id: 3,
          college: "XYZ University",
          reviewer: "Mike Johnson",
          rating: 3.5,
          reviewText: "XYZ University has excellent facilities, but some courses need improvement. Overall, it was a decent experience.",
        },
        {
          id: 4,
          college: "123 Institute",
          reviewer: "Sarah Adams",
          rating: 4.5,
          reviewText: "I highly recommend 123 Institute. The faculty is knowledgeable, and there are numerous extracurricular activities to get involved in.",
        },
        // Add more reviews here...
      ];
      
    return (
      <div className='my-20'>
      <div className='text-center'>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiper"
        >
          <div
            slot="container-start"
            className="parallax-bg h-[40rem]"
            style={{
              'backgroundImage': 'url(https://i.ibb.co/JpZdkqM/OIP.jpg)',
            }}
            data-swiper-parallax="-23%"
          ></div>
          {reviews.map((review,index) => (
            <SwiperSlide key={index}>
              <div className="title" data-swiper-parallax="-300">
                {review.college}
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                {review.reviewer}
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                {review.rating}
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>{review.reviewText}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    );
};

export default Review;