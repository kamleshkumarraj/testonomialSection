import orderimage from '../../assets/EmptyWishlist/order-image.svg'
function OrderCard() {
  return (
    <>
    <div id="order-1">
        <div id="order-details" className="p-[20px] bg-[#00000027] flex justify-between items-end rounded-[10px] flex-wrap gap-[8px]">
          <div id="left" className="flex flex-col lg:gap-[5px] gap-[8px]">
            <h1 className='font-[DM Sans] font-[700]  2xl:text-[26.56px] xl:text-[24px] lg:text-[22px] md:text-[20px] sm:text-[18px] text-[18px] 2xl:leading-[34.58px] xl:leading-[30px] lg:leading-[26px] md:leading-[22px] sm:leading-[18px] leading-[15px]' >Order no: #23241dmfeng3v</h1>
            <p className='font-[DM Snas] font-[700] text-[#807D7E] 2xl:text-[18.59px] xl:text-[17px] lg:text-[16px] md:text-[15px] sm:text-[14.5px] text-[14px] 2xl:leading-[24.21px] xl:leading-[22px] lg:leading-[20px] md:leading-[17px] sm:leading-[15px] leading-[12px]'>Order Date : <span className='text-[#3c424244]'>28/08/2020</span></p>
            <p className='font-[DM Sans] font-[700]  2xl:text-[18.59px] xl:text-[17px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] 2xl:leading-[24.21px] xl:leading-[22px] lg:leading-[20px] md:leading-[18px] sm:leading-[16px] leading-[14px] text-[#807D7E]'>Estimated Delivery Date : <span className='text-[#3c424239]'>22/03/2024</span></p>
          </div>
          <div id="right" className="flex flex-col md:gap-[5px] gap-[8px]">
          <p className='font-[DM Sans] font-[700]  2xl:text-[18.59px] xl:text-[17px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] 2xl:leading-[24.21px] xl:leading-[22px] lg:leading-[20px] md:leading-[18px] sm:leading-[16px] leading-[14px] text-[#807D7E]'>Order Status :  <span className='text-[#3c424239]'>Confirmed</span></p>
          <p className='font-[DM Sans] font-[700]  2xl:text-[18.59px] xl:text-[17px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] 2xl:leading-[24.21px] xl:leading-[22px] lg:leading-[20px] md:leading-[18px] sm:leading-[16px] leading-[14px] text-[#807D7E]'>Payment Method : <span className='text-[#3c424239]'>Cash on delivery</span></p>
          </div>
        </div>
        <div id="order-image" className='flex items-center sm:justify-between mt-[25px] flex-wrap gap-[15px] justify-center'>
          <div id="img-section" className='flex gap-[10px] items-center '>
            <div id="img" className='w-full'>
              <img className='w-full' src={orderimage} alt="" />
            </div>
            <div id="img-detail" className='flex flex-col w-full gap-[8px]'>
              <p className='font-[DM Sans] font-[700] 2xl:text-[21.25px] xl:text-[20px] lg:text-[19px] md:text-[18px] sm:text-[17px] text-[16px] 2xl:leading-[27.66px] xl:leading-[25px] lg:leading-[22px] md:leading-[20px] sm:leading-[18px] leading-[16px] text-[#3C4242]'>Black Printed T shirt</p>
              <p className='font-[DM Sans] font-[700]  2xl:text-[18.59px] xl:text-[17px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] 2xl:leading-[24.21px] xl:leading-[22px] lg:leading-[20px] md:leading-[18px] sm:leading-[16px] leading-[14px] text-[#807D7E]'>Color : <span className='text-[#3c424239]'>Black</span></p>
              <p className='font-[DM Sans] font-[700]  2xl:text-[18.59px] xl:text-[17px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] 2xl:leading-[24.21px] xl:leading-[22px] lg:leading-[20px] md:leading-[18px] sm:leading-[16px] leading-[14px] text-[#807D7E]'>Quantity :  <span className='text-[#3c424239]'>1</span></p>
              <p className='font-[DM Sans] font-[700]  2xl:text-[18.59px] xl:text-[17px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[14px] 2xl:leading-[24.21px] xl:leading-[22px] lg:leading-[20px] md:leading-[18px] sm:leading-[16px] leading-[14px] text-[#3c42424e]'>Total : <span className='text-[#3c424258]'>$233</span></p>
            </div>
          </div>
          <div id="btn" className='2xl:w-[200px] xl:w-[180px] lg:w-[160px] md:w-[140px] sm:w-[120px] w-[120px] md:h-[68px] h-[55px] bg-[#8A33FD] rounded-[10px] grid place-content-center px-[10px] self-center'>
            <p className='font-[DM Sans] font-[500] text-[#fff] text-center  2xl:text-[23.0px] xl:text-[22px] lg:text-[21px] md:text-[20px] sm:text-[19px] text-[18px] 2xl:leading-[31.12px] xl:leading-[28px] lg:leading-[25px] md:leading-[22px] sm:leading-[19px] leading-[16px]'>View Details</p>
          </div>
        </div>
      </div>
      <hr className='mt-[20px]'/>
      </>
  )
}

export default OrderCard
