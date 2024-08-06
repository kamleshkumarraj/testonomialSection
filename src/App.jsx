import Section_1 from "./components/Section_1"
import TestomonialSection from "./components/testomonial/TestomonialSection"

function App() {

  return (
    <>
      <div id="main-section" className="w-[100%] bg-[#524BAD]">
        <Section_1 />
      </div>
      <div id="testnomial-section">
        <TestomonialSection />
      </div>
    </>
  )
}

export default App
