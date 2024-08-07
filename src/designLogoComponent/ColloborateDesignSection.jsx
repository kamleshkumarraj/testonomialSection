import design_img_1 from '../assets/DesignAndLogoImg/collobarate-img-1.svg'
import design_img_2 from '../assets/DesignAndLogoImg/collobarate-img-2.svg'
import design_img_3 from '../assets/DesignAndLogoImg/collobarate-img-3.svg'
import design_img_4 from '../assets/DesignAndLogoImg/collobarate-img-4.svg'
import ColloborateCard from './ColloborateCard.jsx';

function ColloborateDesignSection() {
    const imgArr = [design_img_1 , design_img_2 , design_img_3 , design_img_4];
    const labelArr = ['Choose a product based on your unique needs.' ,'Fill out a brief and share your project details with your designer.','Work with your designer on feedback and revisions.','Your designer will provide you with files ready to print.']

  return (
    <section id="colloborate-design-section" className='w-full text-[#000000] 2xl:mt-[100px] xl:mt-[80px] lg:mt-[70px] md:mt-[60px] sm:mt-[55px] mt-[50px] 2xl:px-[80px] xl:p-[40px] p-[20px]'>
        <header id="heading">
            <h1 id="main-heading" className='font-[poppins] 2xl:text-[56.24px] xl:text-[52px] lg:text-[48px] sm:text-[43px] text-[40px] leading-[50px] font-[500] 2xl:leading-[84.36px] tracking-[2.96] text-center' >Collaborate with a designer</h1>
            <h3 id="sub-heading" className='font-[poppins] 2xl:text-[26.64px] xl:text-[23px] lg:text-[20px] sm:text-[18px] text-[15px] font-[500] 2xl:leading-[39.96px] xl:leading-[35px] lg:leading-[32px] sm:leading-[28px] leading-[22px] tracking-[2.96] text-center mt-[10px] md:pt-0' >{`Getting professional design has never been easier. Here's how it's done:`}</h3>
        </header>
        <section id="product-section" className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:mt-[100px] xl:mt-[80px] 2xl:gap-[40px] xl:gap-[35px] md:gap-[30px] gap-[25px]'>
            {
                imgArr.map((img , idx) =>{
                    return <ColloborateCard
                                key={idx}
                                img = {img}
                                label = {labelArr[idx]}
                            />
                })
            }
        </section>
        <footer className='font-[poppins] text-[26.64px] font-[500] leading-[39.96px] tracking-[2.96003] text-center 2xl:mt-[100px] xl:mt-[80px]'>Choose a product to get started</footer>

    </section>
  )
}

export default ColloborateDesignSection
