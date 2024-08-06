import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Navigation } from 'swiper/modules';
import TestCard from '../TestCard';
import { useEffect, useState } from 'react';

function TestomonialSection() {
  const [WindowWidth , setWindowWidth] = useState(window.innerWidth);

  useEffect(() =>{
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[])
  return (
    <div className='max-w-[146rem] mx-auto mt-[7.8rem] overflow-hidden'>
      <div id="header">
     
        <h1 className='font-[DMSans] leading-[3.2rem] tracking-[-0.09rem] text-center font-[400] text-[3.97rem]'>Testimonials</h1>

        <p className='font-[poppins] my-[1rem] leading-[3.2rem] tracking-[-0.09rem] text-center font-[400] text-[1.97rem]'>Our customers speak for us</p>
      </div>
      
      
          <Swiper slidesPerView={WindowWidth <= 800 ? 1 : WindowWidth <= 1400 ? 2 : WindowWidth > 1400 ? 3 : ''}
          spaceBetween={30} navigation={true} modules={[Navigation]} className="mySwiper px-[4rem]">
            <SwiperSlide><TestCard />  </SwiperSlide>
            <SwiperSlide><TestCard /></SwiperSlide>
            <SwiperSlide><TestCard /></SwiperSlide>
            <SwiperSlide><TestCard /></SwiperSlide>
            <SwiperSlide><TestCard /></SwiperSlide>
            <SwiperSlide><TestCard /></SwiperSlide>
            <SwiperSlide><TestCard /></SwiperSlide>
           
          </Swiper>
       
    </div>
  )
}

export default TestomonialSection
