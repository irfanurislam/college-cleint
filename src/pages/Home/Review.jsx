import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax } from 'react-parallax';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Navigation } from "swiper/modules";
import SectionTitle from "../../components/hooks/UseTittle";

const Review = () => {
  const reviews = [
    {
      id: 1,
      college: "yangzou  University",
      reviewer: "Rakibul Islam",
      rating: 4,
      reviewText: "yangzou University is an amazing place to study. I had a great experience with supportive professors and a friendly campus environment.",
    },
    {
      id: 2,
      college: "Northean College",
      reviewer: "Jane Smith",
      rating: 5,
      reviewText:
        "Northean College is an amazing place to study. I had a great experience with supportive professors and a friendly campus environment.",
    },
    {
      id: 3,
      college: "Asian University",
      reviewer: "Mike Johnson",
      rating: 3.5,
      reviewText:
        "Asian University has excellent facilities, but some courses need improvement. Overall, it was a decent experience.",
    },
    {
      id: 4,
      college: "Southeast University",
      reviewer: "Sarah Adams",
      rating: 4.5,
      reviewText:
        "I highly recommend 123 Institute. The faculty is knowledgeable, and there are numerous extracurricular activities to get involved in.",
    },
    // Add more reviews here...
  ];

  return (
    <div className="my-20">
       <SectionTitle
                subHeading="What Our Apply FeedBack"
                heading={'FeedBack'}
            ></SectionTitle>
      <Parallax
        blur={1}
        bgImage="https://i.ibb.co/6shMTBX/p1.jpg"
        bgImageAlt="the cat"
        strength={10}
      >
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center justify-center mx-24 my-16">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <p className="py-8 text-white">{review.reviewText}</p>
                <h3 className="text-2xl text-orange-400">{review.college}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Parallax>
    </div>
  );
};

export default Review;
