import Nav from "../Components/Nav";
import Footer from "../Components/footer";

const Contact = () => {
  const whatsappNumber = "918397818419";

  const sendToWhatsApp = () => {
    const message = `Hi, I'm interested in buying your product. 
    Please share more details.`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };
  return (
    <div>
      <Nav />
      <div className="pt-24 pb-20 md:mx-30 mx-5">
        <a href="/" className="text-gray-500 hover:text-black cursor-pointer ">
          <button className=" flex gap-2 items-center">
            <i className="ri-arrow-left-line"></i>
            <span>Go back</span>
          </button>
        </a>
        <h1 className="text-center text-3xl font-bold text-neutral-800">
          CONTACT US
        </h1>
        <div className="flex items-center justify-center gap-10">
          <a href="#">
            <div className="my-2 flex items-center gap-2">
              <i className="ri-instagram-line text-2xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"></i>
              <span className="md:text-[11px] text-[9px] text-gray-500 hover:text-black cursor-pointer">
                Follow us on instagram
              </span>
            </div>
          </a>
          <a href="#" onClick={sendToWhatsApp}>
            <div className="my-2 flex items-center gap-2">
              <i className="ri-whatsapp-line md:text-2xl text-sm  text-[#25D366] "></i>
              <span className="md:text-[11px] text-[9px] text-gray-500 hover:text-black cursor-pointer">
                Message us on whatsapp
              </span>
            </div>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
