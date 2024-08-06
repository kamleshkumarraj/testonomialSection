import comma_l from '../assets/images/comma-left.svg'
import comma_r from '../assets/images/comma-right.svg'
function TestCard() {
  return (
    <div className="flex-col flex items-center max-w-[36.1rem] p-[1rem]" id='testo-box'>

    <div className="text-section w-[100%] ">
      <img className='relative top-[2.5rem]' src={comma_l} alt="" />
      
        <p className='font-[poppins] text-[1.579rem] font-[400] leading-[2.5rem] text-center pl-[5rem]'>Lorem Ipsum is simply dummy text of the printing and  ypesetting industry. Lorem Ipsum is simply dummy . </p>
        
        <p className='relative '><img className='relative left-[35rem] top-[-2rem]' src={comma_r} alt="" /></p>
       
    </div>
    <div className="image-section flex gap-[1rem] items-center mx-auto">
        <img className='w-[4.8rem] h-[4.8rem]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZOwv-ThhfOYXCq8h5NY-EIB1-S6r1M6CwA&usqp=CAU" alt="" />
        <div className="text">
            <h3 className='text-[1.5rem] font-[700] font-[poppins] leading-[2.3rem]'>John Doe</h3>
           
            <p className='text-[1.3rem] font-[400] leading-[2.07rem] font-[poppins]' >Enterpenuer</p>
        </div>
    </div>
  </div>  
  )
}

export default TestCard
