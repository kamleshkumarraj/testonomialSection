
function CollectionCard({img , label_1 , label_2}) {
  return (
    <div className='grid grid-rows-1 justify-items-start' id='colloborate-card'>
    <div id="img-section" className='w-full mx-auto sm:mx-0'>
        <img className='w-full' src={img} alt="" />
    </div>
    
    <div id="details" className='2xl:mt-[55px] xl:mt-[50px] md:mt-[45px] sm:mt-[40px] mt-[20px] text-center mx-auto sm:mx-0 px-[10px]'>
        <p className='font-[poppins] 2xl:text-[18.64px] lg:text-[16px] sm:text-[15px] text-[14px] font-[500] 2xl:leading-[27px] xl:leading-[25px] lg:leading-[20px] sm:leading-[15px] leading-[10px]  lg:tracking-[2.96px] md:tracking-[2px] tracking-[1.5px] text-center md:text-left'>{label_1}</p>
        <p className="font-[poppins] sm:text-[12px] text-[11px] xl:text-[13px] 2xl:text-[14.77px] font-[500] leading-[25.16px] tracking-[2.96px] text-left ">{label_2}</p>
    </div>
</div>
  )
}

export default CollectionCard
