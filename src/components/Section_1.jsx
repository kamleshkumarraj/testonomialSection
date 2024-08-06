import img_1 from '../assets/images/img-1.svg'
import img_2 from '../assets/images/img-2.svg'
import img_3 from '../assets/images/img-3.svg'
import img_4 from '../assets/images/img-4.svg'
import img_5 from '../assets/images/img-5.svg'
import img_6 from '../assets/images/img-6.svg'
import img_7 from '../assets/images/img-7.svg'
import img_8 from '../assets/images/img-8.svg'
import img_9 from '../assets/images/img-9.svg'

function Section_1() {
  const rightImages = [img_1, img_2, img_3, img_4]
  const leftImages = [img_6, img_7, img_8, img_9]
  return (
    <div id="main-section" className="min-h-[77.8rem] pt-[5.92rem] pr-[0rem] pb-[8.88rem] pl-[0rem] font-[DMSans] w-[100%] mx-auto max-w-[189.4rem] gap-[4rem] flex flex-col ">
    <div id="header" className="mx-auto gap-[1rem] lg:gap-[4rem] p-[.9rem] flex items-center max-w-[152.4rem] lg:justify-between flex-col lg:flex-row text-center lg:text-start">
      <div id="details-section" className=" gap-[0.98rem] ">
        <h1 className="text-[3.947rem] font-[400] lg:leading-[3.207rem] tracking-[-.09866] text-[#FFFFFF] leading-[4.5rem]">Made by you, #MadeWithOscarPrint</h1>
        
        <p className="tracking-[-0.0986679] lg:leading-[3.207rem] font-[400] text-[1.773rem] font-[poppins] text-[#ffffff] py-[1rem] lg:p-0">We love to see your custom creations. Post a photo on social media and add @OscarPrint and #MadeWithOscarPrint for a chance to be featured here.</p>
      </div>
      <div id="btn" className="min-w-[10.01rem] h-[5.273rem] px-[1.973rem] border-[0.099rem] text-[#ffffff] flex mx-[1rem]">
        <p className="font-[poppins] text-[1.9rem] font-[400] leading-[3.207rem] tracking-[-0.09866rem] text-center text-[#fffff] my-auto">See All</p>
      </div>
      </div>
      <div id="product-section" className='max-w-[152.4rem] mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[.9rem] justify-items-center p-[2rem] 2xl:p-0'>
        <div id="left" className='grid grid-cols-2 grid-rows-2 gap-[.9rem] w-[100%] justify-items-center items-center '> 
          {
            leftImages.map((img , idx) =>{
              return <img src={img} key={idx} alt="images" />
            })
          }
        </div>
        <div id="middle"><img  src={img_5} alt="images" /></div>
        <div id="right" className='grid grid-cols-2 grid-rows-2 gap-[.9rem] w-[100%] justify-items-center items-center '>
          {
            rightImages.map((img,idx) =>{
              return <img src={img} key={idx} alt="images" />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Section_1
