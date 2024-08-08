import design_img_1 from '../../assets/ClothingAndBag/collection-img-1.svg'
import design_img_2 from '../../assets/ClothingAndBag/collection-img-2.svg'
import design_img_3 from '../../assets/ClothingAndBag/collection-img-3.svg'
import design_img_4 from '../../assets/ClothingAndBag/collection-img-4.svg'
import design_img_5 from '../../assets/ClothingAndBag/collection-img-5.svg'
import design_img_6 from '../../assets/ClothingAndBag/collection-img-6.svg'
import design_img_7 from '../../assets/ClothingAndBag/collection-img-7.svg'
import design_img_8 from '../../assets/ClothingAndBag/collection-img-8.svg'
import CollectionCard from './CollectionCard'
function CollectionSection() {
    const imgArr = [design_img_1, design_img_2, design_img_3, design_img_4, design_img_5, design_img_6, design_img_7, design_img_8];
    const label_1Arr = ['New Arrivals', 'No Minimum Order Quantity','100% Cotton T-shirts','Soccer Kits','Basketball Kits','Custom Work Uniforms','Our Bestsellers','Express Shipping']
    const label_2Arr = ['5 days turnaround','5 days turnaround','5 days turnaround','5 days turnaround','5 days turnaround','5 days turnaround','5 days turnaround','5 days turnaround']
  return (
    <section id="design-section" className='w-full text-[#000000] 2xl:mt-[40px] xl:mt-[35px] lg:mt-[30px] md:mt-[25px] sm:mt-[20px] mt-[20px] 2xl:px-[70px] xl:p-[50px] p-[20px]'>
        <header id="heading">
            <h1 id="main-heading" className='font-[poppins] 2xl:text-[42.24px] xl:text-[40px] lg:text-[38px] sm:text-[35px] text-[30px] leading-[50px] font-[500] 2xl:leading-[84.36px] tracking-[2.96] text-left' >Can’t-miss collections</h1>
            <h3 id="sub-heading" className='font-[poppins] 2xl:text-[18px] xl:text-[16px] lg:text-[15px] sm:text-[14px] text-[13px] font-[500] 2xl:leading-[39.96px] xl:leading-[35px] lg:leading-[32px] sm:leading-[28px] leading-[22px]  text-left md:pt-0 2xl:tracking-[2.1px] xl:tracking-[1.8px] lg:tracking-[1.6px] md:tracking-[1.4px] sm:tracking-[1.2px] tracking-[1px]' >From daily wear to travel bags, we’ve got you covered.</h3>
        </header>
        <section id="product-section" className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:mt-[60px] xl:mt-[50px] md:mt-[30px] mt-[20px] 2xl:gap-[60px] xl:gap-[45px] md:gap-[35px] gap-[30px] md:justify-items-center md:items-center lg:justify-items-center'>
            {
                imgArr.map((img , idx) =>{
                    return <CollectionCard
                                key={idx}
                                img = {img}
                                label_1 = {label_1Arr[idx]}
                                label_2={label_2Arr[idx]}
                            />
                })
            }
        </section>
        

    </section>
  )
}

export default CollectionSection
