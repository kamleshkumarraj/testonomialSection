import { RxCross2 } from 'react-icons/rx'
import order_image from '../../assets/EmptyWishlist/order-card-image.svg'
function OrderCard() {
  return (
    <>
    <div className='flex justify-between w-full  border-b-[.8px] border-[black] py-[20px] sm:flex-row flex-col gap-[20px]' id='order-card'>
      <div id="img-section" className='flex gap-[10px] grow-0'>
        <div id="img" className=''>
            <img className='w-full' src={order_image} alt="order-image" />
        </div>
        <div id="text" className='flex flex-col gap-[10px] '>
            <h1 className='font-[DM Sans] font-[700] text-left 2xl:text-[28.94px] xl:text-[26px] lg:text-[24px] md:text-[22px] sm:text-[20px] text-[18px] 2xl:leading-[37.7px] xl:leading-[34px] lg:leading-[31px] md:leading-[28px] sm:leading-[25px] leading-[22px]    tracking-[1px] text-[#3C4242]'>lorem ipseum</h1>
            <p className='font-[DM Sans] font-[700] text-left 2xl:text-[28.94px] xl:text-[26px] lg:text-[24px] md:text-[22px] sm:text-[20px] text-[18px] 2xl:leading-[37.7px] xl:leading-[34px] lg:leading-[31px] md:leading-[28px] sm:leading-[25px] leading-[22px]    tracking-[1px] text-[#3C4242]'>Color : <span className='text-[#3c42427d]'>Black</span></p>
        </div>
      </div>
      <div id="details" className='flex justify-between w-full sm:w-[50%]'>
        <div className='font-[DM Sans] font-[700] text-left 2xl:text-[28.94px] xl:text-[26px] lg:text-[24px] md:text-[22px] sm:text-[20px] text-[18px] 2xl:leading-[37.7px] xl:leading-[34px] lg:leading-[31px] md:leading-[28px] sm:leading-[25px] leading-[22px]    tracking-[1px] text-[#3C4242]' id="qty">Qty : <span className='font-[500]'>1</span></div>
        <div className='font-[DM Sans] font-[500] text-left 2xl:text-[28.94px] xl:text-[26px] lg:text-[24px] md:text-[22px] sm:text-[20px] text-[18px] 2xl:leading-[37.7px] xl:leading-[34px] lg:leading-[31px] md:leading-[28px] sm:leading-[25px] leading-[22px]    tracking-[1px] text-[#3c42427d]' id="price">$233.00</div>
        <div id="icon">
        <RxCross2 size={'30px'} color='#3C4242' />
      </div>
      </div>
      
    </div>
    <hr className='mt-[20px] text-[black]'/>
    </>
  )
}

export default OrderCard
