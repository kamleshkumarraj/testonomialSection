import { VscChevronRight } from "react-icons/vsc"
import wishlistLogo from '../../assets/EmptyWishlist/wishlist-logo.svg'
import { NavLink } from "react-router-dom"
import { MdOutlineLockClock } from "react-icons/md"
import { CiHeart } from "react-icons/ci"
import { GoPerson } from "react-icons/go"
import { PiSignOutFill } from "react-icons/pi"
function WishlistSection() {
  return (
    <div id="wishlist-section" className="w-full 2xl:p-[70px] xl:p-[65px] lg:p-[40px] md:p-[35px] sm:p-[30px] p-[20px] 2xl:py-[45px] xl:py-[40px] lg:py-[35px] md:py-[30px] sm:py-[25px] py-[25px]">
        <div id="location-header" className="flex items-center w-full 2xl:gap-[10px] xl:gap-[9px] lg:gap-[8px] md:gap-[7px] sm:gap-[6px] gap-[5px]">
            <p className="font-[DM Sans] font-[500] 2xl:text-[23.9px] xl:text-[21px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[12px] 2xl:leading-[31.12px] xl:leading-[28px] lg:leading-[25px] md:leading-[22px] sm:leading-[20px] leading-[18px] text-left text-[#807D7E]" >Home</p>
            <VscChevronRight size={'16px'} color="#807D7E"/>
            <p className="font-[DM Sans] font-[500] 2xl:text-[23.9px] xl:text-[21px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[12px] 2xl:leading-[31.12px] xl:leading-[28px] lg:leading-[25px] md:leading-[22px] sm:leading-[20px] leading-[18px] text-[#807D7E] text-left"  >My Account</p>
            <VscChevronRight size={'16px'} color="#807D7E"/>
            <p className="font-[DM Sans] font-[500] 2xl:text-[23.9px] xl:text-[21px] lg:text-[20px] md:text-[18px] sm:text-[16px] text-[12px] 2xl:leading-[31.12px] xl:leading-[28px] lg:leading-[25px] md:leading-[22px] sm:leading-[20px] leading-[18px] text-left" >Wishlist</p>
        </div>
        <main id="main-section" className="grid md:grid-cols-3 grid-cols-1 2xl:mt-[60px] xl:mt-[55px] lg:mt-[50px] md:mt-[45px] sm:mt-[40px] mt-[30px] gap-[40px] ">
            <div id="menu-main" className="w-full">
                <div id="header-menu" className="w-full">
                    <h1 className="font-[DM Sans] font-[700] 2xl:tracking-[2.1px] xl:tracking-[1.8px] lg:tracking-[1.6px] md:tracking-[1.4px] sm:tracking-[1.2px] tracking-[1px] 2xl:text-[37.18px] xl:text-[35px] lg:text-[32px] md:text-[30px] sm:text-[28px] text-[25px] 2xl:leading-[44.49px] xl:leading-[40px] lg:leading-[35px] md:leading-[30px] sm:leading-[25px] leading-[20px] relative text-left before:w-[10px] before:bg-[#8A33FD] before:h-[80%] before:left-[-5%] before:top-[50%] before:translate-y-[-50%] left-[5%] before:absolute before:rounded-[10px]">Hello Jhanvi</h1>
                    <p className="font-[DM Sans] font-[700] 2xl:text-[18.59px] xl:text-[17px] lg:text-[16px] md:text-[15px] sm:text-[14px] text-[13px] text-left 2xl:leading-[44.49px] xl:leading-[40px] lg:leading-[36px] md:leading-[32px] sm:leading-[28px] leading-[25px] 2xl:tracking-[2.1px] xl:tracking-[1.8px] lg:tracking-[1.6px] md:tracking-[1.4px] sm:tracking-[1.2px] tracking-[1px] text-[#807D7E]">Welcome to your Account</p>
                </div>
                <div id="menu" className="flex flex-col 2xl:mt-[40px] xl:mt-[36px] lg:mt-[32px] md:mt-[30px] sm:mt-[27px] mt-[25px] gap-[20px]">
                   <NavLink className='2xl:w-[391px] xl:w-[360px] sm:w-[250px] w-[250px]  md:w-[full] h-[58x] flex items-center gap-[15px] pl-[50px]'>
                        <div id="icon"><MdOutlineLockClock size={'22px'} color="#807D7E" /></div>
                        <div className="font-[DM Sans] font-[700] text-left 2xl:leading-[31.12px] xl:leading-[28px] lg:leading-[25px] md:leading-[22px] sm:leading-[18px] leading-[15px] 2xl:text-[23.9px] xl:text-[21px] lg:text-[19px] md:text-[17px] sm:text-[16px] text-[14px] text-[#807D7E]" id="para">My Orders</div>
                   </NavLink>
                   <NavLink className='2xl:w-[391px] xl:w-[360px] sm:w-[250px] w-[250px]  md:w-[full] h-[58px] flex items-center gap-[15px] px-[40px] bg-[#807d7e14] border-l-[3px] border-[#8A33FD]'>
                        <div id="icon"><CiHeart size={'30px'} color="#807D7E" /></div>
                        <div className="font-[DM Sans] font-[700] text-left 2xl:leading-[31.12px] xl:leading-[28px] lg:leading-[25px] md:leading-[22px] sm:leading-[18px] leading-[15px] 2xl:text-[23.9px] xl:text-[21px] lg:text-[19px] md:text-[17px] sm:text-[16px] text-[14px] text-[#807D7E] " id="para">Wishlist</div>
                   </NavLink>
                   <NavLink className='2xl:w-[391px] xl:w-[360px] sm:w-[250px] w-[250px]  md:w-[full] h-[58x] flex items-center gap-[15px] pl-[50px]'>
                        <div id="icon"><GoPerson size={'22px'} color="#807D7E" /></div>
                        <div className="font-[DM Sans] font-[700] text-left 2xl:leading-[31.12px] xl:leading-[28px] lg:leading-[25px] md:leading-[22px] sm:leading-[18px] leading-[15px] 2xl:text-[23.9px] xl:text-[21px] lg:text-[19px] md:text-[17px] sm:text-[16px] text-[14px] text-[#807D7E]" id="para">My Info</div>
                   </NavLink>
                   <NavLink className='2xl:w-[391px] xl:w-[360px] sm:w-[250px] w-[250px]  md:w-[full] h-[58x] flex items-center gap-[15px] pl-[50px]'>
                        <div id="icon"><PiSignOutFill size={'22px'} color="#807D7E" /></div>
                        <div className="font-[DM Sans] font-[700] text-left 2xl:leading-[31.12px] xl:leading-[28px] lg:leading-[25px] md:leading-[22px] sm:leading-[18px] leading-[15px] 2xl:text-[23.9px] xl:text-[21px] lg:text-[19px] md:text-[17px] sm:text-[16px] text-[14px] text-[#807D7E]" id="para">Sign Out</div>
                   </NavLink>
                </div>
            </div>
            <div id="wishlist" className="flex flex-col items-center px-[50px] 2xl:gap-[20px] xl:gap-[45px] lg:gap-[40px] md:gap-[35px] sm:gap-[30px] gap-[25px] shadow-md 2xl:p-[80px] xl:p-[70px] lg:p-[60px] md:p-[50px] sm:p-[40px] p-[30px] md:col-start-2 md:col-end-4">
                <div id="logo" className="w-[225px] h-[225px]">
                    <img className="w-full" src={wishlistLogo} alt="" />
                </div>
                <div id="details" className="flex flex-col gap-[5px]">
                  <h1 className="font-[700] font-[DM Sans] 2xl:text-[45.15px] xl:text-[42px] lg:text-[39px] md:text-[36px] sm:text-[34px] text-[30px] 2xl:leading-[58.79px] xl:leading-[55px] lg:leading-[50px] md:leading-[45px] sm:leading-[40px] leading-[35px] text-center" id="heading">Your wishlist is empty.</h1>
                    <p className="font-[DM Sans] font-[500] 2xl:tracking-[2.1px] xl:tracking-[1.8px] lg:tracking-[1.6px] md:tracking-[1.4px] sm:tracking-[1.2px] tracking-[1px] text-center 2xl:leading-[26.5px] xl:leading-[22px] lg:leading-[20px] md:leading-[18px] sm:leading-[15px] leading-[12px] 2xl:text-[21.25px] xl:text-[19px] lg:text-[18px] md:text-[17px] sm:text-[16px] text-[14px] text-[#807D7E]" id="para">You don’t have any products in the wishlist yet. You will find a lot
                    of interesting products on our Shop page.</p>
                    
                </div>
                <div id="btn" className="2xl:w-[349px] xl:w-[300px] lg:w-[250px] md:w-[220px] sm:w-[200px] w-[170px] h-[68px] bg-[#8A33FD] rounded-[10px] grid place-content-center">
                        <p className="font-[DM Sans] font-[700] text-[#fff] 2xl:text-[23.9px] xl:text-[21px] lg:text-[18px] md:text-[16px] sm:text-[15px] text-[14px] text-center 2xl:leading-[31.12px] xl:leading-[28px] lg:leading-[25px] md:leading-[22px] sm:leading-[19px] leading-[16px]" id="btn-lable">Continue Shopping</p>
                    </div>
            </div>
        </main>
    </div>
  )
}

export default WishlistSection
