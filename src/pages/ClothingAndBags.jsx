import Banner from "../components/ClothingAndBag/Banner"
import BestSeller from "../components/ClothingAndBag/BestSeller"
import CollectionSection from "../components/ClothingAndBag/CollectionSection"
import Discount from "../components/ClothingAndBag/Discount"
import HeroSection from "../components/ClothingAndBag/HeroSection"
import PersonalSection from "../components/ClothingAndBag/PersonalSection"
import Subscribe from "../components/ClothingAndBag/Subscribe"

function ClothingAndBags() {
  return (
    <div id="clothing-bag-pages">
      <div id="hero-section">
        <HeroSection />
      </div>
      <div id="personal-section">
        <PersonalSection />
      </div>
      <div id="best-seller-section">
        <BestSeller />
      </div>
      <div id="banner-section">
        <Banner />
      </div>
      <div id="collection-design">
        <CollectionSection />
      </div>
      <div id="discount-section">
        <Discount />
      </div>
      <div id="subscribe-section">
        <Subscribe />
      </div>
      
    </div>
  )
}

export default ClothingAndBags
