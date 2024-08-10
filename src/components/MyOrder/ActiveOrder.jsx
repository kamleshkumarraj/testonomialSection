
import OrderCard from './OrderCard'
function ActiveOrder() {
  return (
    <div className="mt-[50px] text-[16px] font-[DM Sans] flex flex-col gap-[30px]" id="order-all" >
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
    </div>
  )
}

export default ActiveOrder
