import { X } from "lucide-react";

const Product = ({ product, setProduct, size }) => {
  return (
    <section
      className="fixed inset-0 flex backdrop-blur-xl justify-center items-center z-100 bg-black/50 animate-backdrop"
      onClick={() => setProduct(null)}
    >
      <div
        className="md:h-[600px] md:w-[900px] rounded-lg  bg-white overflow-hidden animate-popup-card"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex md:flex-row flex-col md:gap-8 ">
          <div className="flex flex-col gap-3">
            <div className="md:h-[700px] md:w-[350px] ">
              <img
                src={product.images[0]}
                alt={product.name}
                className="h-[100%] w-[100%] object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col md:gap-15 py-5 md:pr-10 pr-3 text-start">
            <div
              className="w-fit cursor-pointer ml-115"
              onClick={() => {
                setProduct(null);
              }}
            >
              <X />
            </div>
            <div className="flex flex-col gap-2 md:px-0 px-5">
              <h2 className="text-[30px] text-[#000]">{product.name}</h2>
              <h3 className="text-[18px] text-[#000] font-bold">
                ₹{product.price}
              </h3>
              <p className="text-[16px] text-[#000]">{product.category}</p>
              <p className="text-[16px] text-[#000]">Size: {size}</p>
              <div className="border border-gray-300 rounded-full w-fit py-2  px-3 hover:bg-[#25D366] hover:text-white cursor-pointer transition-all flex gap-2 items-center group">
                <i className="ri-whatsapp-line text-lg  text-[#25D366] group-hover:text-white "></i>
                <a href="wa" >Send us message</a>
                <i class="ri-arrow-right-up-line pl-1 group-hover:text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
