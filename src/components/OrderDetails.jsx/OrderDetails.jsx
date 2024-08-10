import { FaChevronLeft } from "react-icons/fa"
import OrderCard from "./OrderCard"

function OrderDetails() {
  return (
    <div id="my-order" className="w-full md:col-start-2 md:col-end-4">
      <div id="heading" className="flex items-center gap-[20px]">
      <div id="icon">
      <FaChevronLeft size={'20px'} color="#3C4242" />
    </div>
    <h1 className="font-[DM Sans] font-[700] text-left 2xl:text-[37.18px] xl:text-[35px] lg:text-[33px] md:text-[30px] sm:text-[28px] text-[25px] 2xl:leading-[44.49px] pb-[10px] xl:leading-[40px] lg:leading-[36px] md:leading-[32px] sm:leading-[28px] leading-[25px] 2xl:tracking-[2.1px] xl:tracking-[1.8px] lg:tracking-[1.6px] md:tracking-[1.4px] sm:tracking-[1.2px] tracking-[1px] ">Order Details</h1>
    
    </div>
    <div id="order-details-body" className="2xl:mt-[50px] xl:mt-[45px] lg:mt-[40px] md:mt-[35px] sm:mt-[30px] mt-[25px] ">
      <div id="order-no" className="flex justify-between w-full md:p-[30px] p-[20px] rounded-[10px] bg-[#0000000d] items-center">
        <div id="left" className="flex flex-col gap-[8px]">
          <h1 className='font-[DM Sans] font-[700]  2xl:text-[26.56px] xl:text-[24px] lg:text-[22px] md:text-[20px] sm:text-[18px] text-[18px] 2xl:leading-[34.58px] xl:leading-[30px] lg:leading-[26px] md:leading-[22px] sm:leading-[18px] leading-[15px]' >Order no: #23241dmfeng3v</h1>
          <p className='font-[DM Sans] font-[500]  2xl:text-[21.59px] xl:text-[18px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] 2xl:leading-[24.21px] xl:leading-[22px] lg:leading-[20px] md:leading-[18px] sm:leading-[16px] leading-[14px] px-[20px] text-[#3c42424e]'>Placed On  2 June 2023 2:40 PM</p>
        </div>
        <div id="right">
        <p className='font-[DM Sans] font-[500]  2xl:text-[21.59px] xl:text-[18px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] 2xl:leading-[24.21px] xl:leading-[22px] lg:leading-[20px] md:leading-[18px] sm:leading-[16px] leading-[14px] text-[#3c42424e]'>Total : <span className='text-[#3c4242cd]'>$233</span></p>
        </div>
      </div>
      <div id="order-progress-bar" className="mx-auto mt-[60px]">
        <p className="before:absolute before:w-[20px] before:h-[20px] before:rounded-full before:bg-[black] left-0 top-0 relative w-[70%] h-[5px] bg-[#BEBCBD] rounded-[20px] before:translate-x-[-50%] before:translate-y-[-40%] mx-auto after:absolute after:w-[20px] after:h-[20px] after:rounded-full after:bg-[#BEBCBD] after:right-0 after:translate-y-[-40%] ">
        <p className="absolute w-[20px] h-[20px] rounded-full bg-[#000000cd] translate-y-[-40%] left-[33.33%]"></p>
        <p className="absolute w-[20px] h-[20px] rounded-full bg-[#77737395] translate-y-[-40%] left-[66.66%]"></p>
        </p>
        <div id="order-status" className="w-[75%] my-[20px] flex justify-between mx-auto">
          <p className="2xl:text-[18px] xl:text-[17px] lg:text-[16px] md:text-[15.5px] sm:text-[15px] text-[15px] font-[Dm Sans] font-[700] 2xl:leading-[23px] xl:leading-[21px] lg:leading-[19px] md:leading-[17px] sm:leading-[15px] leading-[14px]">Order Placed</p>
          <p className="2xl:text-[18px] xl:text-[17px] lg:text-[16px] md:text-[15.5px] sm:text-[15px] text-[15px] font-[Dm Sans] font-[700] 2xl:leading-[23px] xl:leading-[21px] lg:leading-[19px] md:leading-[17px] sm:leading-[15px] leading-[14px]">In Progress</p>
          <p className="2xl:text-[18px] xl:text-[17px] lg:text-[16px] md:text-[15.5px] sm:text-[15px] text-[15px] font-[Dm Sans] font-[700] 2xl:leading-[23px] xl:leading-[21px] lg:leading-[19px] md:leading-[17px] sm:leading-[15px] leading-[14px]">Shipped</p>
          <p className="2xl:text-[18px] xl:text-[17px] lg:text-[16px] md:text-[15.5px] sm:text-[15px] text-[15px] font-[Dm Sans] font-[700] 2xl:leading-[23px] xl:leading-[21px] lg:leading-[19px] md:leading-[17px] sm:leading-[15px] leading-[14px]">Delivered</p>
        </div>
      </div>
      <div id="notification" className="mt-[60px] bg-[#00000023] flex p-[20px] md:p-[30px] gap-[40px] rounded-[10px] z-[10000] relative">
      <p id="size" className="absolute left-[18%] top-[-25%] z-[-11] w-[25px] h-[25px] bg-[#DCDCDC]" style={{clipPath : 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></p>
      <p className='font-[DM Sans] font-[500]  2xl:text-[21.59px] xl:text-[18px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] 2xl:leading-[24.21px] xl:leading-[22px] lg:leading-[20px] md:leading-[18px] sm:leading-[16px] leading-[14px] px-[20px] text-[#3c424275]'>2 June 2023 2:40 PM</p>
      <h1 className='font-[DM Sans] font-[700]  2xl:text-[21.56px] xl:text-[19px] lg:text-[17px] md:text-[16px] sm:text-[15px] text-[14px] 2xl:leading-[21px] xl:leading-[19px] lg:leading-[17px] md:leading-[15px] sm:leading-[14px] leading-[12px]' >Your order has been successfully verified.</h1>
      </div>
      <div id="order-body" className="mt-[60px] bg-[#0000001c] rounded-[10px]2xl:px-[50px] xl:px-[45px] lg:px-[40px] md:px-[35px] sm:px-[30px] px-[25px] rounded-[10px] py-[10px]">
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </div>
      </div>
    
  )
}

export default OrderDetails
