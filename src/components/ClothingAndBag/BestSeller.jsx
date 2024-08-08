import bestseller_img_1 from '../../assets/ClothingAndBag/bestseller-image-1.svg'
import bestseller_img_2 from '../../assets/ClothingAndBag/bestseller-image-2.svg'
import bestseller_img_3 from '../../assets/ClothingAndBag/bestseller-image-3.svg'
import BestesellerCard from './BestesellerCard'
function BestSeller() {
    const imgArr = [bestseller_img_1, bestseller_img_2, bestseller_img_3]
    const labelArr_1 = ['Hoodies & Sweetshirt','Coats & Parkas','Tees & T-Shirt'];
    const labelArr_2 = ['Explore Now!','Explore Now!','Explore Now!']
  return (
    <div id="personal-section" className='w-full 2xl:p-[70px] xl:p-[65px] lg:p-[40px] md:p-[35px] sm:p-[30px] p-[20px] 2xl:py-[45px] xl:py-[40px] lg:py-[35px] md:py-[30px] sm:py-[25px] py-[25px] '>
      <div id="heading" className="font-[poppins] font-[500] 2xl:text-[47.9px] xl:text-[45px] lg:text-[42px] md:text-[40px] sm:text-[38px] text-[35px] 2xl:leading-[50.86px] xl:leading-[48px] lg:leading-[45px] md:leading-[40px] sm:leading-[35px] leading-[30px] 2xl:tracking-[2.1px] xl:tracking-[1.8px] lg:tracking-[1.6px] md:tracking-[1.4px] sm:tracking-[1.2px] tracking-[1px] text-left">
        <h1>Best Sellers</h1>
      </div>

      <div id="img-section" className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:gap-[40px] xl:gap-[35px] lg:gap-[30px] md:gap-[28px] sm:gap-[25px] gap-[20px] 2xl:mt-[70px] xl:mt-[60px] lg:mt-[50px] md:mt-[45px] sm:mt-[40px] mt-[30px] justify-items-center'>
        {
            imgArr.map((img , idx) => {
                return <BestesellerCard
                    key={idx}
                    img={img}
                    label_1={labelArr_1[idx]}
                    label_2={labelArr_2[idx]}
                />
            })
        }
      </div>
    </div>
  )
}

export default BestSeller
