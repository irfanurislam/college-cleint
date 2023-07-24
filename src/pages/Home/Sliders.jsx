import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';
import SectionTitle from '../../components/hooks/UseTittle';

const Sliders = () => {
    const imageUrls = [
        'https://i.ibb.co/JW1DFt8/v1.jpg',
        'https://i.ibb.co/LpVtTwP/v5.jpg',
        'https://i.ibb.co/fY3GR71/v4.jpg',
        'https://i.ibb.co/CKmYSLh/v6.jpg',
        'https://i.ibb.co/JW1DFt8/v1.jpg',
        'https://i.ibb.co/5TgD9Vb/v2.jpg',
      ];
    return (
        <div className='mt-28'>
           <SectionTitle
                subHeading="Graduate Celebrations"
                heading={'Image Gallery'}
            ></SectionTitle>
            <div>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
       
       {
        imageUrls.map((imageUrl,index) => <>
         <SwiperSlide key={index}><img className='' src={imageUrl} alt="all image" /> </SwiperSlide>
        </>)
       }
      
      </Swiper>
            </div>
        </div>
    );
};

export default Sliders;
