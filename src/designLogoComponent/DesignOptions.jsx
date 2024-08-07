import { MdOutlineArrowRightAlt } from "react-icons/md"
import logo_1 from '../assets/DesignAndLogoImg/logo-img-1.svg'
import logo_2 from '../assets/DesignAndLogoImg/logo-img-2.svg'
import logo_3 from '../assets/DesignAndLogoImg/logo-img-3.svg'
import logo_4 from '../assets/DesignAndLogoImg/logo-img-4.svg'
import logo_5 from '../assets/DesignAndLogoImg/logo-img-5.svg'
import logo_6 from '../assets/DesignAndLogoImg/logo-img-6.svg'
function DesignOptions() {
    const imgArr = [logo_1, logo_2, logo_3, logo_4 , logo_5, logo_6]
    const labelArr = ['folded leaflet design' , 'letterhead design' , 'postcard design' , 'rectangle banner design' , 'return label address design' , 'wedding invitation design']
  return (
    <div id="design-option-section" className="mt-[60px] w-full 2xl:px-[40px] xl:px-[30px] px-[20px]" >
        <header id="heading" className="flex flex-wrap items-center justify-between gap-[20px]">
            <h1 className="font-[poppins] font-[500] xl:leading-[80px] lg:leading-[75px] md:leading-[72px] sm:leading-[68px] leading-[50px] 2xl:leading-[84.36px] tracking-[2.96px] text-left 2xl:text-[56.24px] xl:text-[52px] lg:text-[49px] md:text-[47px] sm:text-[45px] text-[40px]">More design options</h1>
            <div id="sub-deading" className="flex items-center">
            <h5 className="font-[poppins] font-[500] 2xl:leading-[22.2px] lg:tracking-[15px] 2xl:tracking-[2.96px] lg:text-[12px] sm:text-[11px] text-[10px] lg:leading-[17px] sm:leading-[14px] leading-[12px] 2xl:text-[14.8px] tracking-[1px] ">see all design options </h5>
            <MdOutlineArrowRightAlt size={'14.8px'}/>
            </div>
        </header>
        <div id="design-section" className="grid 2xl:grid-cols-6 gap-[60px] mt-[50px] xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {
                imgArr.map((img , idx) => {
                    return <div key={idx} id='card'>
                        <div className="2xl:w-[188px] lg:w-[175px] sm:w-[165px] w-[160px]  2xl:h-[189px] lg:h-[174px] sm:h-[166px] h-[161px]  rounded-full bg-[#00000013] grid place-content-center mx-auto" id="img">
                            <img className="2xl:w-[108px] lg:w-[90px] sm:w-[85px] w-[80px]" src={img} alt="logo" />
                        </div>
                        <div id="para" className="mt-[40px]">
                            <p className="font-[poppins] text-[15.79px] font-[500] leading-[23.68px] tracking-[2.96] text-center">{labelArr[idx]}</p>
                        </div>
                    </div>
                })
            }   
        </div>
    </div>
  )
}

export default DesignOptions
