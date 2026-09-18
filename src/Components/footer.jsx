
import { Link } from "react-router-dom";

const Footer = ({setCategory}) => {
  return (
    <div className="mt-15 bg-[#F8F1E9] text-black w-full min-h-[50vh] py-10 px-10 flex flex-col gap-8 ">
      <h1 className="font-bold">More about shopping At Snitch for men</h1>

      <div>
        <h2 className="font-bold text-xs uppercase mb-2">TOP CATEGORIES</h2>
        <div className="grid md:grid-cols-7 grid-cols-2 gap-4 mt-2">
          <div>
            <a href="#trending" onClick={(e)=>{
              // e.preventDefault();
              setCategory("T-shirts");
            }}>
              <p className="text-[12px] text-gray-800">T-shirts</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">Bags</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">Co-ord Sets</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">Accessories</p>
            </a>
          </div>

          <div>
            <a  href="#trending" onClick={(e)=>{
              // e.preventDefault();
              setCategory("Shirts");
            }}>
              <p className="text-[12px] text-gray-800">Shirts</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">Hoodies</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">Shorts</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">Flip Flops</p>
            </a>
          </div>

          <div>
            <a href="#trending" onClick={(e)=>{
              // e.preventDefault();
              setCategory("Shoes");
            }}>
              <p className="text-[12px] text-gray-800">Shoes</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">Sneakers</p>
            </a>
            <a  href="#trending" onClick={(e)=>{
              // e.preventDefault();
              setCategory("Trousers");
            }}>
              <p className="text-[12px] text-gray-800">Trousers</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">Jacket</p>
            </a>
          </div>

          <div>
            <a href="#">
              <p className="text-[12px] text-gray-800">TrackPants</p>
            </a>
            <a href="#trending" onClick={(e)=>{
              // e.preventDefault();
              setCategory("Shorts");
            }}>
              <p className="text-[12px] text-gray-800">Shorts</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">Jackets</p>
            </a>
          </div>

          <div>
            <a href="#trending" onClick={(e)=>{
              // e.preventDefault();
              setCategory("Jeans");
            }}>
              <p className="text-[12px] text-gray-800">Jeans</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">Sunglasses</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">Jackets</p>
            </a>
          </div>

          <div>
            <a href="#trending" onClick={(e)=>{
              // e.preventDefault();
              setCategory("Jeans");
            }}>
              <p className="text-[12px] text-gray-800">Jeans</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">Sunglasses</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">Jackets</p>
            </a>
          </div>

          <div>
            <a href="#">
              <p className="text-[12px] text-gray-800">TrackPants</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">Sunglasses</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">Jackets</p>
            </a>
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-bold text-xs uppercase mb-2">POPULAR SEARCHES</h2>
        <div className="grid md:grid-cols-7 grid-cols-2 gap-4 mt-2">
          <div>
            <a href="#">
              <p className="text-[12px] text-gray-800">shirts for men</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">straight fit jeans</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">formal shirts</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">bootcut jeans for men</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">korean trousers</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">sling bag for men</p>
            </a>
          </div>

          <div>
            <a href="#">
              <p className="text-[12px] text-gray-800">jeans for men</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">bootcut jeans</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">crochet shirts</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">office wear shirts</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">baggy pants men</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">cotton shirts for men</p>
            </a>
          </div>

          <div>
            <a href="#">
              <p className="text-[12px] text-gray-800">trousers for men</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">korean pants</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">striped shirts</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">korean pants for men</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">linen pants</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">cotton shirts for men</p>
            </a>
          </div>

          <div>
            <a href="#">
              <p className="text-[12px] text-gray-800">white shirt</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">gurkha pants</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">printed shirts</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">sunglasses for men</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">chinos for men</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">kurta for men</p>
            </a>
          </div>

          <div>
            <a href="#">
              <p className="text-[12px] text-gray-800">black shirt</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">cargo pants</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">formal pants for men</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">perfume for men</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">striped shirt men</p>
            </a>
          </div>

          <div>
            <a href="#">
              <p className="text-[12px] text-gray-800">overshirt men</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">linen shirts</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">concert outfits men</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">polo t-shirts</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">embroidery shirt men</p>
            </a>
          </div>

          <div>
            <a href="#">
              <p className="text-[12px] text-gray-800">baggy jeans</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">denim shirts</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">club wear for men</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">oversized t-shirts</p>
            </a>
            <a href="#">
              <p className="text-[12px] text-gray-800">chelsea boots men</p>
            </a>
          </div>
        </div>
      </div>

      <div>

        <h2 className="font-bold text-xs uppercase mb-2">
          Company
        </h2>
        <div className="flex md:flex-row flex-col md:justify-between md:items-center md:gap-15 gap-5">

          <div className="flex md:flex-row flex-col md:justify-center md:items-center md:gap-10 gap-4">
            
            <Link to="/about">
              <p className="text-[12px] text-gray-800">
                About Us
              </p>
            </Link>

            <a href="#">
              <p className="text-[12px] text-gray-800">
                Privacy Policy
              </p>
            </a>

            <a href="#">
              <p className="text-[12px] text-gray-800">
                Terms & Conditions
              </p>
            </a>

            <a href="#">
              <p className="text-[12px] text-gray-800">
                Return & Exchange Policy
              </p>
            </a>

            <Link to="/contact">
              <p className="text-[12px] text-gray-800">
                Contact Us
              </p>
            </Link>
          </div>

          <div>
            <a href="#"><i className="ri-instagram-line text-2xl"></i></a>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Footer;
