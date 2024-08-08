import { HiArrowLongRight } from "react-icons/hi2"

function BestesellerCard({img , label_1 , label_2}) {
  return (
    <div className="flex flex-col 2xl:gap-[20px] xl:gap-[18px] lg:gap-[16px] md:gap-[15px] sm:gap-[14px] gap-[12px]" id="best-seller-card" >
      <div id="img-section" className="w-full">
        <img src={img} alt="" />
      </div>
      <div id="detail" className="flex items-center justify-between w-full px-[20px]">
        <div id="text">
            <p className="font-[poppins] font-500 2xl:tracking-[2.1px] xl:tracking-[1.8px] lg:tracking-[1.6px] md:tracking-[1.4px] sm:tracking-[1.2px] tracking-[1px] text-left 2xl:text-[31.57px] xl:text-[29px] lg:text-[27px] md:text-[25px] sm:text-[22px] text-[20px] 2xl:leading-[49.33px] xl:leading-[45px] lg:leading-[40px] md:leading-[35px] sm:leading-[30px] leading-[25px] " id="title">{label_1}</p>
            <div id="info-exp">
                <p className="font-[poppins] font-[500] 2xl:tracking-[2.1px] xl:tracking-[1.8px] lg:tracking-[1.6px] md:tracking-[1.4px] sm:tracking-[1.2px] tracking-[1px] 2xl:leading-[49.3px] xl:leading-[45px] lg:leading-[40px] md:leading-[35px] sm:leading-[30px] leading-[25px] 2xl:text-[23.68px] xl:text-[22px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[15px] text-[#7F7F7F]">{label_2}</p>
            </div>
        </div>
        <div id="icon">
            <HiArrowLongRight size={'25px'} color="#7F7F7F" />
        </div>
      </div>
    </div>
  )
}

export default BestesellerCard
