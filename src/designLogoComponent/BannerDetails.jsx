import banner_1 from '../assets/DesignAndLogoImg/slide-img-1.svg'
import banner_2 from '../assets/DesignAndLogoImg/slide-img-2.svg'
import banner_3 from '../assets/DesignAndLogoImg/slide-img-3.svg'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css'


// import required modules
import { Navigation , Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
function BannerDetails() {
  const [WindowWidth , setWindowWidth] = useState(window.innerWidth);

  useEffect(() =>{
    const hanldleWindow = () =>{
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize' , hanldleWindow)

    return () =>{
      window.removeEventListener('resize' , hanldleWindow)
    }
  },[])

  return (
    <div className="bg-[#524BAD] w-full font-[poppins] lg:items-center pr-[1rem] gap-[2rem] grid lg:grid-cols-4 grid-cols-2 grid-row-2 lg:grid-rows-1  pl-[1rem] py-[2rem] 2xl:mt-[80px] px-[20px]" id="banner-details">
      <div id="detils" className="w-full col-start-1 col-end-3 lg:col-span-1 lg:col-end-2 p-[20px]">
     
        <h1 className="2xl:text-[44.4px] xl:text-[40px] lg:text-[37px] md:text-[35px] sm:text-[32px] text-[35px] font-[poppins] font-[700] leading-[54.17px] text-left text-[#3A3A3A]">Stand out with a custom, budget-friendly design.</h1>
        <p className="text-[15.79px] font-[poppins] text-[#fff] leading-[23.68px] text-left mt-[20px]">Give your business card a professional finish. Fill out a quick brief to receive concepts from our in-house designer within 24 hours </p>
        <div id="btn" className='my-[3rem]'>
        <button>
          <p className=' text-[15.79px] leading-[23.68px] px-[15px] py-[10px] text-left text-[#fff] bg-[#FF7D04]'>Work With Designer</p>
        </button>
      </div>
      </div>
      <div className='w-full col-start-1 col-end-3 mx-auto lg:col-start-2 lg:col-end-5'>
        <Swiper slidesPerView={WindowWidth <= 550 ? 1 : WindowWidth <= 1400 ? 2 : WindowWidth > 1400 ? 3 : ''}
        spaceBetween={20} pagination={true} navigation={true} modules={[Navigation,Pagination]} className="mySwiper px-[10px] mx-auto">
          <SwiperSlide> <div id="banner-1" className='w-full'>
          <img className='w-full' src={banner_1} alt="" />
        </div> </SwiperSlide>
          <SwiperSlide> <div id="banner-1" className='w-full'>
          <img className='w-full' src={banner_2} alt="" />
        </div></SwiperSlide>
          <SwiperSlide> <div id="banner-1" className='w-full'>
          <img className='w-full' src={banner_3} alt="" />
        </div></SwiperSlide>
          <SwiperSlide> <div id="banner-1" className='w-full'>
          <img className='w-full' src={banner_1} alt="" />
        </div></SwiperSlide>
          <SwiperSlide> <div id="banner-1" className='w-full'>
          <img className='w-full' src={banner_2} alt="" />
        </div></SwiperSlide>
          <SwiperSlide> <div id="banner-1" className='w-full'>
          <img className='w-full' src={banner_3} alt="" />
        </div></SwiperSlide>
          <SwiperSlide> <div id="banner-1" className='w-full'>
          <img className='w-full' src={banner_1} alt="" />
        </div></SwiperSlide>
         
        </Swiper>
        </div>
    </div>
  )
}

export default BannerDetails
