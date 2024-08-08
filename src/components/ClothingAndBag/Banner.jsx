import banner_img from '../../assets/ClothingAndBag/banner-img.png'
import star from "../../assets/ClothingAndBag/Star.svg"
function Banner() {
  return (
    <div className="2xl:m-[40px] xl:m-[35px] lg:m-[30px] md:m-[28px] sm:m-[25px] pt-[50px]  grid grid-cols-1 xl:grid-cols-2 items-end  md:items-center bg-[#FAE157] 2xl:gap-[30px] xl:gap-[28px] lg:gap-[25px] md:gap-[22px] sm:gap-[20px] gap-[20px]  ">
      <div id="img-section" className='relative top-0 self-end'>
        <img className='self-end w-full' src={banner_img} alt="banner-image" />
        <img className='absolute 2xl:block sm:block xl:hidden hidden top-[180px] left-[150px]' src={star} alt="" />
        <img className='absolute 2xl:block sm:block xl:hidden hidden top-[500px] left-[200px] w-[6%]' src={star} alt="" />
        <img className='absolute 2xl:block sm:block xl:hidden hidden right-[150px] top-[100px]' src={star} alt="" />
        <img className='absolute 2xl:block sm:block xl:hidden hidden top-[620px] right-[85px] w-[6%]' src={star} alt="" />
      </div>
      <div id="details" className='flex flex-col w-full 2xl:gap-[30px] xl:gap-[27px] lg:gap-[25px] md:gap-[22px] sm:gap-[20px] gap-[15px] 2xl:pr-[150px] xl:pr-[120px] lg:pr-[100px] md:pr-[80px] sm:pr-[70px] pr-[60px] mx-auto p-[20px] sm:p-[40px] md:px-[60px]'>
            <div id="heading">
                <h1 className='font-[poppins] font-[900] text-left 2xl:text-[102.05px] xl:text-[90px] lg:text-[85px] md:text-[80px] sm:text-[75px] text-[70px] 2xl:leading-[125.44px] xl:leading-[115px] lg:leading-[105px] md:leading-[100px] sm:leading-[90px] leading-[80px] '><span className='bg-[#ffffff] px-[15px] 2xl:text-[102.05px] xl:text-[90px] lg:text-[85px] md:text-[80px] sm:text-[75px] text-[50px]'>PAYDAY </span><br />
                <span className='block mt-[15px] md:mt-[30px] 2xl:text-[102.05px] xl:text-[90px] lg:text-[85px] md:text-[80px] sm:text-[75px] text-[40px]'>SALE NOW</span></h1>            
            </div>
            <div id="para">
                <p className='font-[poppins] font-[500] 2xl:tracking-[2.1px] xl:tracking-[1.8px] lg:tracking-[1.6px] md:tracking-[1.4px] sm:tracking-[1.2px] tracking-[1px] text-left 2xl:text-[32.59px] xl:text-[30px] lg:text-[28px] md:text-[26px] sm:text-[25px] text-[22px] 2xl:leading-[47px] xl:leading-[43px] lg:leading-[40px] md:leading-[35px] sm:leading-[30px] leading-[25px]'>Spend minimal $100 get 30% off
                voucher code for your next purchase</p>
            </div>
            <div id="term">
                <h1 className='font-[poppins] font-[700] text-left 2xl:tracking-[2.1px] xl:tracking-[1.8px] lg:tracking-[1.6px] md:tracking-[1.4px] sm:tracking-[1.2px] tracking-[1px] 2xl:text-[32.59px] xl:text-[30px] lg:text-[28px] md:text-[26px] sm:text-[25px] text-[22px] 2xl:leading-[47px] xl:leading-[43px] lg:leading-[40px] md:leading-[35px] sm:leading-[30px] leading-[25px]'>1 June - 10 June 2021</h1>
                <p className='font-[poppins] font-[400] text-left 2xl:tracking-[2.1px] xl:tracking-[1.8px] lg:tracking-[1.6px] md:tracking-[1.4px] sm:tracking-[1.2px] tracking-[1px] 2xl:text-[32.59px] xl:text-[30px] lg:text-[28px] md:text-[26px] sm:text-[25px] text-[22px] 2xl:leading-[47px] xl:leading-[43px] lg:leading-[40px] md:leading-[35px] sm:leading-[30px] leading-[25px]'>*Terms & Conditions apply</p>
            </div>
            <div id="bnt" className='rounded-[7.44px] 2xl:w-[242.88px] xl:w-[220px] lg:w-[200px] md:w-[190px] sm:w-[180px] w-[160px] 2xl:h-[87.17px] xl:h-[80px] lg:h-[70px] md:h-[60px] sm:h-[55px] h-[50px] bg-[#000000] grid place-content-center'>
           
            <p className='uppercase font-[poppins] 2xl:tracking-[2.1px] xl:tracking-[1.8px] lg:tracking-[1.6px] md:tracking-[1.4px] sm:tracking-[1.2px] tracking-[1px] text-center text-[#ffff] 2xl:leading-[38.27px] xl:leading-[35px] lg:leading-[32px] md:leading-[28px] sm:leading-[25px] leading-[20px] 2xl:text-[25.51px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[15px]'>Shop Now</p>
            </div>
      </div>
    </div>
  )
}

export default Banner
