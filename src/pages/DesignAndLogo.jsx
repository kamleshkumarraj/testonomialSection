
import BannerDetails from "../designLogoComponent/BannerDetails.jsx"
import ColloborateDesignSection from "../designLogoComponent/ColloborateDesignSection.jsx"
import DesignOptions from "../designLogoComponent/DesignOptions.jsx"
import DesignSection from "../designLogoComponent/DesignSection.jsx"
import HeroSection from "../designLogoComponent/HeroSection.jsx"

function DesignAndLogo() {
  return (
    <div id="design-logo-page" className="w-full">
      <div id="hero-section">
        <HeroSection />
      </div>
      <div id="colloborate-section">
        <ColloborateDesignSection />
      </div>
      <div id="design-section">
        <DesignSection />
      </div>
      <div id="banner-details-section" className="2xl:px-[4rem] xl:p-[3rem] px-[2rem]">
        <BannerDetails />
      </div>
      <div id="design-section">
        <DesignOptions />
      </div>
    </div>
  )
}

export default DesignAndLogo
