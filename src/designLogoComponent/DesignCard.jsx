
function DesignCard({img , label_1 , label_2}) {
  return (
    <div className='grid grid-rows-1 justify-items-start' id='colloborate-card'>
    <div id="img-section" className='mx-auto sm:mx-0'>
        <img className='w-full' src={img} alt="" />
    </div>
    
    <div id="details" className='2xl:mt-[80px] xl:mt-[60px] md:mt-[50px] sm:mt-[30px] mt-[10px] text-center mx-auto sm:mx-0'>
        <p className='font-[poppins] 2xl:text-[20.64px] lg:text-[17px] sm:text-[15px] text-[14px] font-[500] 2xl:leading-[39.96px] xl:leading-[35px] lg:leading-[30px] sm:leading-[25px] leading-[20px]  lg:tracking-[2.96px] md:tracking-[2px] tracking-[1.5px] text-center md:text-left'>{label_1}</p>
        <p className="font-[poppins] sm:text-[12px] text-[10px] xl:text-[14px] 2xl:text-[16.77px] font-[500] leading-[25.16px] tracking-[2.96px] text-left">{label_2}</p>
    </div>
</div>
  )
}

export default DesignCard
