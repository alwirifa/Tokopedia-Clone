import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";
import SwiperCore from 'swiper/core';
import { useRef, useState } from 'react';

// register Navigation module
SwiperCore.use([Navigation]);

const images = [
  "https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/12/14/8a47d5c4-e2c6-4288-b8ba-4721c82ba4f4.jpg.webp?ect=4g",
  "https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/12/14/076d8fff-74e9-4740-8211-1b070fb9535b.jpg.webp?ect=4g",
  "https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/12/6/b886a409-4e68-4059-8e38-93decaed42f3.jpg.webp?ect=4g",
  "https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/12/7/29308839-43ee-46e6-8da5-76ee135b72b4.jpg.webp?ect=4g",
  "https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/12/7/390b5c18-f9e4-438f-ab29-9919cbfd4a64.jpg.webp?ect=4g",
  "https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/12/13/eb96a3b7-9266-4175-b6af-c8622cecac50.jpg.webp?ect=4g",
  "https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/12/14/dc70533a-5cf8-4d95-8fe7-cc5e743f8ec9.jpg.webp?ect=4g",
  "https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/12/18/f9935213-0f5c-4d7b-8cfe-352a8ddd28ed.jpg.webp?ect=4g"
];

const Slider = () => {
  // use refs for navigation buttons
  const swiper = useSwiper();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  // use state to force re-render
  const [init, setInit] = useState(false);

  return (
    <div className="relative max-w-7xl w-full mx-auto rounded-xl overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        slidesPerView="auto"
        loop
        autoplay={{ delay: 2000 }}
        speed={1000}
        // use refs for navigation elements
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        // update state on swiper initialization
        onInit={() => setInit(true)}
        className='group'
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className='w-full h-auto mx-auto z-10 object-cover' />
          </SwiperSlide>
        ))}

        <button
          ref={prevRef}
          onClick={() => swiper.slidePrev()}
          className='absolute top-1/2 left-10 -translate-y-1/2 w-10 h-10 flex justify-center items-center rounded-full text-zinc-500 bg-zinc-100 z-50 opacity-0 group-hover:opacity-100 duration-300 transition-all group-hover:-translate-x-8 hover:scale-110 '
        >
          <IoChevronBackOutline size={24} />
        </button>
        <button
          ref={nextRef}
          onClick={() => swiper.slideNext()}
          className='absolute top-1/2 right-10 -translate-y-1/2 w-10 h-10 flex justify-center items-center rounded-full text-zinc-500 bg-zinc-100 z-50 opacity-0 group-hover:opacity-100 duration-300 transition-all group-hover:translate-x-8 hover:scale-110 '
        >
          <IoChevronForwardOutline size={24} />
        </button>

      </Swiper>

    </div>
  );
}

export default Slider;
