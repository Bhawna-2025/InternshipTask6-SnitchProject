import { useState } from "react";
import AdBanner from "./Components/AdBanner";
import Banner from "./Components/Banner";
import Category from "./Components/Category";
import Nav from "./Components/Nav";
import Crousel from "./Components/Crousel";
// import PriceTags from "./Components/PriceTags"
import Trending from "./Components/Trending";
import Footer from "./Components/footer";
import Product from "./Components/Product";
import SearchResult from "./Components/SearchResult";
import SideBarMenu from "./Components/SideBarMenu";
import NewArrival from "./Components/NewArrival";
const App = () => {
  const [product, setProduct] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [openSearch, setOpenSearch] = useState(false);
  const [openMenuBar, setOpenMenuBar] = useState(false)
  const [category, setCategory] = useState("All");

  return (
    <>
      <Nav openSearch={openSearch} setOpenSearch={setOpenSearch} setOpenMenuBar={setOpenMenuBar}/>

      {openMenuBar && <SideBarMenu
        setOpenMenuBar={setOpenMenuBar} 
        selectedSizes={selectedSizes}
        setSelectedSizes={setSelectedSizes}
        setProduct={setProduct}
        />}

      {openSearch ? (
        <div className="md:mx-30 mx-5">
          <SearchResult
            setProduct={setProduct}
            selectedSizes={selectedSizes}
            setSelectedSizes={setSelectedSizes}
            setOpenSearch={setOpenSearch}
            openSearch={openSearch}
          />
        </div>
      ) : (
        <div className="md:mx-30 mx-5">
          <Banner />
          <Category 
          category={category} 
          setCategory={setCategory}/>
          <AdBanner />
          <Crousel />
          {/* <PriceTags/> */}
          <NewArrival 
           setProduct={setProduct}
            selectedSizes={selectedSizes}
            setSelectedSizes={setSelectedSizes}
            />
          <Trending
            setProduct={setProduct}
            selectedSizes={selectedSizes}
            setSelectedSizes={setSelectedSizes}
            category={category}
            setCategory={setCategory}
          />
          <Footer setCategory={setCategory}/>
        </div>
      )}

      {product && (
        <Product
          product={product}
          setProduct={setProduct}
          size={selectedSizes[product.id]}
        />
      )}
    </>
  );
};

export default App;
