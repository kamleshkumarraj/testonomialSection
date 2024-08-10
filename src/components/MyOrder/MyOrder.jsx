import { NavLink, Outlet } from "react-router-dom"

function MyOrder() {
  const navHandler = (status) =>{
    if(status) return 'bg-[#0000002c] border-b-[2px] border-[black] px-[20px] py-[1px] rounded-[5px]'
  }
  return (
    <div id="my-order" className="w-full md:col-start-2 md:col-end-4">
      <h1 className="font-[DM Sans] font-[700] text-left 2xl:text-[37.18px] xl:text-[35px] lg:text-[33px] md:text-[30px] sm:text-[28px] text-[25px] 2xl:leading-[44.49px] pb-[10px] xl:leading-[40px] lg:leading-[36px] md:leading-[32px] sm:leading-[28px] leading-[25px] 2xl:tracking-[2.1px] xl:tracking-[1.8px] lg:tracking-[1.6px] md:tracking-[1.4px] sm:tracking-[1.2px] tracking-[1px] ">My Orders</h1>

      <div id="order-header" className="flex sm:flex-row flex-col justify-around w-full mt-[30px] border-b-[.5px] border-[#0000001a]">
          <NavLink to={'/my-orders/active'} className={(status) => 
            navHandler(status.isActive)
            }>
            <p className="font-[DM Sans] font-[700] 2xl:leading-[44.49px] pb-[10px] xl:leading-[40px] lg:leading-[36px] md:leading-[32px] sm:leading-[28px] leading-[25px] 2xl:tracking-[2.1px] xl:tracking-[1.8px] lg:tracking-[1.6px] md:tracking-[1.4px] sm:tracking-[1.2px] tracking-[1px] 2xl:text-[29.22px] xl:text-[27px] lg:text-[25px] md:text-[23px] sm:text-[20px] text-[18px]">Active</p>
          </NavLink>
          <NavLink to={'/my-orders/canclled'} className={(status) => 
            navHandler(status.isActive)
          } >
            <p className="font-[DM Sans] font-[700] 2xl:leading-[44.49px] pb-[10px] xl:leading-[40px] lg:leading-[36px] md:leading-[32px] sm:leading-[28px] leading-[25px] 2xl:tracking-[2.1px] xl:tracking-[1.8px] lg:tracking-[1.6px] md:tracking-[1.4px] sm:tracking-[1.2px] tracking-[1px] 2xl:text-[29.22px] xl:text-[27px] lg:text-[25px] md:text-[23px] sm:text-[20px] text-[18px]">Canclled</p>
          </NavLink>
          <NavLink className={(status) => navHandler(status.isActive)} to={'/my-orders/completed'}>
            <p className="font-[DM Sans] font-[700] 2xl:leading-[44.49px] pb-[10px] xl:leading-[40px] lg:leading-[36px] md:leading-[32px] sm:leading-[28px] leading-[25px] 2xl:tracking-[2.1px] xl:tracking-[1.8px] lg:tracking-[1.6px] md:tracking-[1.4px] sm:tracking-[1.2px] tracking-[1px] 2xl:text-[29.22px] xl:text-[27px] lg:text-[25px] md:text-[23px] sm:text-[20px] text-[18px]">Completed</p>
          </NavLink>
          
      </div>
      <Outlet />
      
    </div>
  )
}

export default MyOrder
