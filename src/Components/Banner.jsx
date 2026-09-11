import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
  return (
     <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      slidesPerView={1}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      loop={true}
      autoplay={{
        delay :2000,
        disableOnInteraction : false,
    
      }}
      speed={1000}
      className='h-[90vh] w-[97vw]'
    >
      <SwiperSlide className='h-full w-full' ><img src="/BannerImages/banner1Image.jpeg" alt="" className='h-full w-full object-cover' /></SwiperSlide>
      <SwiperSlide><img src="/BannerImages/banner2Image.jpeg" alt="" className='h-full w-full object-cover ' /></SwiperSlide>
      <SwiperSlide><img src="/BannerImages/banner3Image.jpeg" alt="" className='h-full w-full object-cover' /></SwiperSlide>
      <SwiperSlide><img src="/BannerImages/banner4Image.jpeg" alt="" className='h-full w-full object-cover' /></SwiperSlide>
    </Swiper> 
  )
}

export default Banner
