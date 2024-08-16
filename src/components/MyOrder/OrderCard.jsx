import orderimage from '../../assets/EmptyWishlist/order-image.svg';

function OrderCard() {
  return (
    <>
      <div id="order-1" className="p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-lg">
        <div id="order-details" className="p-5 bg-white flex justify-between items-end rounded-lg flex-wrap gap-4 shadow-md">
          <div id="left" className="flex flex-col lg:gap-2 gap-3">
            <h1 className="font-poppins font-bold text-xl lg:text-2xl">Order no: #23241dmfeng3v</h1>
            <p className="font-roboto font-semibold text-gray-500 text-base lg:text-lg">
              Order Date: <span className="text-gray-400">28/08/2020</span>
            </p>
            <p className="font-roboto font-semibold text-gray-500 text-base lg:text-lg">
              Estimated Delivery Date: <span className="text-gray-400">22/03/2024</span>
            </p>
          </div>
          <div id="right" className="flex flex-col gap-2 lg:gap-3">
            <p className="font-roboto font-semibold text-gray-500 text-base lg:text-lg">
              Order Status: <span className="text-gray-400">Confirmed</span>
            </p>
            <p className="font-roboto font-semibold text-gray-500 text-base lg:text-lg">
              Payment Method: <span className="text-gray-400">Cash on delivery</span>
            </p>
          </div>
        </div>

        <div id="order-image" className="flex items-center sm:justify-between mt-6 flex-wrap gap-4 justify-center">
          <div id="img-section" className="flex gap-3 items-center">
            <div id="img" className="w-full">
              <img className="w-full rounded-lg shadow-md" src={orderimage} alt="Order item" />
            </div>
            <div id="img-detail" className="flex flex-col w-full gap-3">
              <p className="font-poppins font-semibold text-lg lg:text-xl text-gray-800">Black Printed T-shirt</p>
              <p className="font-roboto font-medium text-gray-500 text-base lg:text-lg">
                Color: <span className="text-gray-400">Black</span>
              </p>
              <p className="font-roboto font-medium text-gray-500 text-base lg:text-lg">
                Quantity: <span className="text-gray-400">1</span>
              </p>
              <p className="font-roboto font-bold text-lg text-gray-700">
                Total: <span className="text-purple-600">$233</span>
              </p>
            </div>
          </div>
          <div id="btn" className="w-[80px] md:w-[100px] lg:w-[120px] xl:w-[140px] 2xl:w-[160px] h-[45px] md:h-[55px] bg-purple-500 hover:bg-purple-600 rounded-lg grid place-content-center px-3 self-center transition-colors">
  <p className="font-poppins font-bold  text-white text-center text-base lg:text-lg">View Details</p>
</div>

        </div>
      </div>
      <hr className="mt-6" />
    </>
  );
}

export default OrderCard;
