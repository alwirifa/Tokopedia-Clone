import { useState, useEffect } from 'react';
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";



const Carousel = () => {
  const images = [
    "https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/12/14/8a47d5c4-e2c6-4288-b8ba-4721c82ba4f4.jpg.webp?ect=4g",
    "https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/12/14/076d8fff-74e9-4740-8211-1b070fb9535b.jpg.webp?ect=4g",
    "https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/12/6/b886a409-4e68-4059-8e38-93decaed42f3.jpg.webp?ect=4g",
    "https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/12/7/29308839-43ee-46e6-8da5-76ee135b72b4.jpg.webp?ect=4g",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (<div >

    <div className="max-w-screen-xl mx-auto my-4 relative overflow-hidden rounded-lg group">
      <div className="w-full h-auto flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 0.5s ease' }}>
        {images.map((image, index) => (
          <img key={index} className="h-full w-full object-contain " src={image} alt={`${index + 1}`} />
        ))}
      </div>
      <div className="opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out z-40">
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-10 -translate-y-1/2 w-10 h-10 flex justify-center items-center rounded-full text-zinc-500 bg-zinc-100 z-50 transition duration-300 ease-in-out hover:scale-110 group-hover:-translate-x-8"
        >
          <IoChevronBackOutline size={24} />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-10 -translate-y-1/2 w-10 h-10 flex justify-center items-center rounded-full text-zinc-500 bg-zinc-100 z-50 transition duration-300 ease-in-out hover:scale-110 group-hover:translate-x-8"
        >
          <IoChevronForwardOutline size={24} />
        </button>
      </div>
      <div className="absolute bottom-0 left-0  p-4 flex gap-3 w-full">
        {images.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrentIndex(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-[6px] h-[6px] cursor-pointer  ${i == currentIndex ? "bg-white" : "bg-zinc-500"
                }`}
            ></div>
          );
        })}
      </div>
    </div>

  </div>
  );
};

export default Carousel;
