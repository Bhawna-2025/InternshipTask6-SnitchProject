import AdBanner from "./Components/AdBanner"
import Banner from "./Components/Banner"
import Category from "./Components/Category"
import Nav from "./Components/Nav"
import Crousel from "./Components/Crousel"
import PriceTags from "./Components/PriceTags"
import Trending from "./Components/Trending"

const App = () => {
  return (
    <>
      <Nav/>
      <div className="mx-30">
        <Banner/>
        <Category/>
        <AdBanner/>
        <Crousel/>
        <PriceTags/>
        <Trending/>
      </div>
    </>
  )
}

export default App
