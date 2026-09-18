import { Link } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/footer";

const AboutUs = () => {
  return (
    <div>
      <Nav />
      <div className="pt-24 md:pb-10 md:mx-30 mx-5">
        <Link
          to="/"
          className="text-gray-500 hover:text-black cursor-pointer md:mx-20 inline-block"
        >
          <button className=" flex gap-2 items-center">
            <i className="ri-arrow-left-line"></i>
            <span>Back to home</span>
          </button>
        </Link>
        <h1 className="text-center text-3xl font-bold text-neutral-800 pt-3">
          ABOUT US
        </h1>
        <p className="text-neutral-700 md:mt-8 mt-5 text-sm md:mx-20">
          At SNITCH, we redefine the modern shopping experience, merging
          seamless digital convenience with engaging in-store interactions.
          Whether you're shopping online or visiting our immersive retail
          spaces, we ensure a smooth, stylish, and hassle-free journey that
          caters to today's fashion-forward men. 
        </p>
        <p className="text-neutral-700 md:mt-4 mt-2 text-sm md:mx-20">
            Our direct-to-consumer (D2C)
          approach eliminates traditional retail barriers, giving you complete
          control over how and where you engage with our trend-driven menswear
          collections. From effortless online browsing to hands-on in-store
          exploration, SNITCH lets you shop on your terms, at your pace. Shop
          Anytime, Anywhere - The Digital Shopping Experience.
        </p>
        <p className="text-neutral-800 md:mt-4 mt-2 text-lg md:mx-20">
           Shop Anytime, Anywhere - The Digital Shopping Experience 
        </p>
        <p className="text-neutral-800 md:mt-4 mt-2 text-sm md:mx-20">
            <span className="font-bold"> 24/7 Accessibility - Fashion at Your Fingertips:</span>
            Gone are the days of restrictive store hours. SNITCH online shopping allows you to browse, select, and purchase from our curated menswear collections anytime, anywhere. Whether you're searching for sharp formalwear, contemporary casual styles, or trend-forward accessories, our website provides an intuitive, fast, and stylish experience.
        </p>
        <div className="text-neutral-600 md:mt-4 mt-2 text-sm md:mx-20">
          <span className="font-bold text-neutral-800">Key Features of SNITCH Online Shopping:</span>
          <ul className="list-disc list-inside mt-2 space-y-2 text-neutral-600">
            <li>
              <span className="font-semibold text-neutral-700">User-Friendly Navigation</span> - Explore categories effortlessly, from joggers and co-ords to sunglasses and accessories.
            </li>
            <li>
              <span className="font-semibold text-neutral-700">AI-Powered Recommendations</span> - Get personalized outfit suggestions based on your style preferences.
            </li>
          </ul>
        </div>
        <div className="h-[1px] w-full bg-gray-300 mt-10 "></div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
