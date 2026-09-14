import AdBanner from "./Components/AdBanner"
import Banner from "./Components/Banner"
import Category from "./Components/Category"
import Nav from "./Components/Nav"
import Crousel from "./Components/Crousel"
import PriceTags from "./Components/PriceTags"
import Trending from "./Components/Trending"
import Footer from "./Components/footer"

const App = () => {
  return (
    <>
      <Nav/>
      <div className="md:mx-30 mx-5">
        <Banner/>
        <Category/>
        <AdBanner/>
        <Crousel/>
        {/* <PriceTags/> */}
        <Trending/>
        <Footer/>
      </div>
    </>
  )
}

export default App
