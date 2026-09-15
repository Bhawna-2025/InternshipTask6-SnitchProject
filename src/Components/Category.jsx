import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Category = () => {
    return (
        <>

            <div className='mt-5 md:pl-20'>
                <p className='md:text-4xl text-2xl font-[200]'>SHOP BY</p>
                <p className='md:text-4xl text-2xl font-bold'>CATEGORY</p>
                <div className="h-[3px] w-80 bg-amber-600 mt-3"></div>
            </div>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                slidesPerView={5}

                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                speed={800}
                className='h-full w-full mt-2'
            >
                <SwiperSlide className='h-full w-full' >
                    <a href="#">
                        <img src="/CategoryImages/Category_cargoImage.webp" alt="" className='h-full w-full object-contain' />
                    </a>
                </SwiperSlide>

                <SwiperSlide className='h-full w-full'>
                    <a href="#">
                        <img src="/CategoryImages/Category_jeansImage.webp" alt="" className='h-full w-full object-contain ' />
                    </a>
                </SwiperSlide>

                <SwiperSlide className='h-full w-full'>
                    <a href="#">
                        <img src="/CategoryImages/Category_tshirtImage.webp" alt="" className='h-full w-full object-contain' />
                    </a>
                </SwiperSlide>

                <SwiperSlide className='h-full w-full'>
                    <a href="#">
                        <img src="/CategoryImages/Category_TrouserImage.webp" alt="" className='h-full w-full object-contain' />
                    </a>
                </SwiperSlide>

                <SwiperSlide className='h-full w-full'>
                    <a href="#">
                        <img src="/CategoryImages/Catogary_ShirtImage.webp" alt="" className='h-full w-full object-contain' />
                    </a>
                </SwiperSlide>

                <SwiperSlide className='h-full w-full'>
                    <a href="#">
                        <img src="/CategoryImages/Category_poloImage.webp" alt="" className='h-full w-full object-contain' />
                    </a>
                </SwiperSlide>

            </Swiper>

            <a href="#" className='inline-block md:text-sm text-xs md:pl-15 pl-5 underline'>SHOP ALL</a>


        </>
    )
}

export default Category
