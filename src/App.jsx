// import Section_1 from "./components/Section_1"
// import ClothingAndBags from "./pages/ClothingAndBags.jsx"
import { Outlet } from "react-router-dom"
import CommonHeader from "./components/EmptyWishlist/CommonHeader.jsx"
import Header from "./components/EmptyWishlist/Header.jsx"
import SideMenu from "./components/EmptyWishlist/SideMenu.jsx"
// import EmptyWishlist from "./pages/EmptyWishlist.jsx"
// import TestomonialSection from "./components/testomonial/TestomonialSection"
// import DesignAndLogo from "./pages/DesignAndLogo"
import { useLocation } from "react-router-dom"
import RecentView from "./components/EmptyWishlist/RecentView.jsx"
function App() {
  const location = useLocation()
  
  return (
    <>
      <Header />
      <div className="w-full 2xl:p-[70px] xl:p-[65px] lg:p-[40px] md:p-[35px] sm:p-[30px] p-[20px] 2xl:py-[45px] xl:py-[40px] lg:py-[35px] md:py-[30px] sm:py-[25px] py-[25px]">
      <main id="main-section" className="grid md:grid-cols-3 grid-cols-1 2xl:mt-[60px] xl:mt-[55px] lg:mt-[50px] md:mt-[45px] sm:mt-[40px] mt-[30px] gap-[40px] ">
          <SideMenu />
          <Outlet />
      </main>
      {
        location.pathname == '/empty-wishlist' ? <RecentView /> : ''
      }
      
      </div>
      
    </>
  )
}

export default App
