import personal_img_1 from '../../assets/ClothingAndBag/personal-img-1.svg'
import personal_img_2 from '../../assets/ClothingAndBag/personal-img-2.svg'
import personal_img_3 from '../../assets/ClothingAndBag/personal-img-3.svg'
import personal_img_4 from '../../assets/ClothingAndBag/personal-img-4.svg'
import personal_img_5 from '../../assets/ClothingAndBag/personal-img-5.svg'
import personal_img_6 from '../../assets/ClothingAndBag/personal-img-6.svg'
import personal_img_7 from '../../assets/ClothingAndBag/personal-img-7.svg'
import personal_img_8 from '../../assets/ClothingAndBag/personal-img-8.svg'
import PersonalCard from './PersonalCard'
function PersonalSection() {
    const imgArr = [personal_img_1, personal_img_2, personal_img_3 , personal_img_4, personal_img_5 , personal_img_6 , personal_img_7, personal_img_8]
    const labelArr = ['Polo Shirts' , 'T-Shirts','Jackets','Sweatshirts','Bags','Hats','Activewear','Dress Shirts']
  return (
    <div id="personal-section" className='w-full 2xl:p-[70px] xl:p-[60px] lg:p-[40px] md:p-[35px] sm:p-[30px] p-[20px] 2xl:py-[45px] xl:py-[40px] lg:py-[35px] md:py-[30px] sm:py-[25px] py-[25px]'>
        <div id="heading-section" className='2xl:mt-[40px] xl:mt-[38px] lg:mt-[35px] md:mt-[32px] sm:mt-[30px] mt-[25px] flex-col flex 2xl:gap-[25px] xl:gap-[22px] lg:gap-[18x] md:gap-[15px] sm:gap-[12px] gap-[10px] '>
            <div id="heading" className='font-[poppins] font-[500] 2xl:text-[42.9px] xl:text-[40px] lg:text-[37px] md:text-[35px] sm:text-[30px] text-[25px] 2xl:leading-[55.86px] xl:leading-[50px] lg:leading-[45px] md:leading-[40px] sm:leading-[35px] leading-[30px] 2xl:tracking-[2.1px] xl:tracking-[1.8px] lg:tracking-[1.6px] md:tracking-[1.4px] sm:tracking-[1.2px] tracking-[1px] text-left'><h1>Personalize clothes, bags & more</h1></div>
            <div id="sub-heaidng">
                <h3  className='font-[poppins] font-[500] 2xl:text-[19.23px] xl:text-[18px] lg:text-[16px] md:text-[15px] sm:text-[14.5px] text-[14px] 2xl:leading-[28.85px] xl:leading-[26px] lg:leading-[24px] md:leading-[22px] sm:leading-[20px] leading-[18px] 2xl:tracking-[2.1px] xl:tracking-[1.8px] lg:tracking-[1.6px] md:tracking-[1.4px] sm:tracking-[1.2px] tracking-[1px] '>From daily wear to travel bags, we’ve got you covered.</h3>
            </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 2xl:gap-[60px] xl:gap-[55px] lg:gap-[40px] md:gap-[30px] sm:gap-[25px] gap-[40px] 2xl:mt-[30px] xl:mt-[28px] lg:mt-[26px] md:mt-[24px] sm:mt-[22px] mt-[20px]">
        {
        imgArr.map((img, idx) =>{
            return <PersonalCard 
                key={idx}
                label={labelArr[idx]}
                img={img}    
            />
        })
        }
    </div>
    </div>
  )
}

export default PersonalSection
