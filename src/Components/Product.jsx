import { X } from "lucide-react";

const Product = ({ product, setProduct, size }) => {
  const whatsappNumber = "918397818419";

  const sendToWhatsApp = () => {
    const message = `Hi, I'm interested in this product: 
    Product: ${product.name} 
    Price: ₹${product.price}
    Category: ${product.category} 
    Selected Size: ${size} 
    Please share more details.`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };


  return (
    <section
      className="fixed inset-0 flex backdrop-blur-xl justify-center items-center z-100 bg-black/50 animate-backdrop"
      onClick={() => setProduct(null)}
    >
      <div
        className="md:h-[600px] md:w-[900px] rounded-lg  bg-white overflow-hidden animate-popup-card"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex md:flex-row flex-col md:gap-8  ">

          {/* image section */}
          <div className="flex flex-col gap-3 ">
            <div className="md:h-[700px] h-[400px]  md:w-[350px]  ">
              <img
                src={product.images[0]}
                alt={product.name}
                className="md:h-[100%] h-[100%] w-[100%]  md:object-cover object-contain"
              />
            </div>
          </div>

          {/* product details section */}
          <div className="flex flex-col md:gap-15 md:py-5 py-10 md:pr-10 pr-15 text-start ">
            {/* close button */}
            <div
              className="w-fit cursor-pointer md:ml-115 ml-84"
              onClick={() => {
                setProduct(null);
              }}
            >
              <X />
            </div>
            <div className="flex flex-col gap-2 md:px-0 px-5">
              <h2 className="md:text-[30px] text-[18px] text-black">
                {product.name}
              </h2>
              <h3 className="md:text-[18px] text-black font-bold">
                ₹{product.price}
              </h3>
              <p className="md:text-[16px] text-black">{product.category}</p>
              <p className="md:text-[16px] text-black">Size: {size}</p>

             <button
                onClick={sendToWhatsApp}
                className="border border-gray-300 rounded-full w-fit py-2 px-3 hover:bg-[#25D366] hover:text-white cursor-pointer transition-all flex gap-2 items-center group"
              >
                <i className="ri-whatsapp-line md:text-lg text-sm text-[#25D366] group-hover:text-white"></i>

                <span>Send us message</span>

                <i className="ri-arrow-right-up-line pl-1 group-hover:text-white"></i>
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Product;
