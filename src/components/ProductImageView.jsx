"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import "../../src/app/globals.css";


import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const ProductImageView = ({ productId }) => {
  const [product, setProduct] = useState(null)
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [direction, setDirection] = useState('vertical');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${productId}`)
        const data = await response.json()
        setProduct(data)
        console.log(data.images)
      } catch (error) {
        console.error("Error fetching product:", error)
      }
    }
    fetchProduct()
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        console.log('window width is less than 768')
        setDirection('vertical')
      } else {
        console.log('window width is greater than 768')
        setDirection('horizontal')
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [direction]);




  return (
    <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-6 md:grid-flow-col-dense">
      <div className="h-72 bg-gray-100 rounded-md md:col-span-5 md:h-96 lg:h-[450px] xl:h-[500px] ">
        <Swiper
          modules={[FreeMode, Navigation, Thumbs]}
          className=" h-full tetx-sm"
          spaceBetween={13}
          slidesPerView={1}
          navigation={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          thumbs={{
            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
          }}
        >
          {
            product?.images.map((image, index) => {
              return <SwiperSlide key={index}>
                <div className="bg-transparent relative w-full h-full ">
                  <Image src={image} layout="fill" objectFit="containe" alt={product?.title} />
                </div>
              </SwiperSlide>
            })
          }
          ...
        </Swiper>
      </div>
      <div className="h-20 md:h-[450px] xl:h-[500px] ">
        <Swiper
          className="w-full h-full"
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          // direction={'vertical'}
          direction={direction}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {
            product?.images.map((x, i) => {
              return <SwiperSlide className="h-full overflow-hidden w-full rounded-lg relative bg-green-800  " key={i} >
                <Image src={x} alt={x} className="" layout="fill" objectFit="cover" />
              </SwiperSlide>
            })
          }
        </Swiper>
      </div>

    </div>
  );
}


export default ProductImageView;