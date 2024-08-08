
function Subscribe() {
  return (
    <div id="subscribe" className="2xl:px-[70px] xl:px-[60px] lg:px-[50px] md:px-[40px] sm:px-[30px] px-[20px] w-full 2xl:mt-[70px] xl:mt-[60px] lg:mt-[50px] md:mt-[40px] sm:mt-[30px] mt-[30px]">

        <div id="heading">
            <h1 className="font-[Roboto] 2xl:text-[49.33px] xl:text-[45px] lg:text-[42px] md:text-[38px] sm:text-[35px] text-[30px] font-[500] text-center 2xl:leading-[57.81px] xl:leading-[50px] lg:leading-[45px] md:leading-[40px] sm:leading-[32px] leading-[25px]">Or subscribe to the newsletter</h1>
        </div>

        <div id="form" className="text-center">
            <form action="" className="flex gap-[20px] my-[30px] justify-center flex-wrap ">
                <div id="email" className="2xl:w-[600px] xl:w-[500px] lg:w-[450px] md:w-[400px] sm:w-[300px] w-[250px]">
                    <input className="focus:outline-none border-b-[.5px] border-[#000] px-[10px] py-[5px] w-full text-[1.4rem]" type="email" placeholder="Enter your Email Address ..."/>
                </div>
                <div id="submit" className="2xl:w-[89px] xl:w-[85px] lg:w-[78px] md:w-[70px] sm:w-[65px] w-[60px]">
                    <input className="focus:outline-none border-b-[.5px] border-[#000] w-full text-[1.4rem] px-[10px] py-[5px]" type="submit" placeholder="submit"/>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default Subscribe
