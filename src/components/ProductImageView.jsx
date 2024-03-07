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
import useSwiperDirection from "../hooks/useSwiperDirection";

const ProductImageView = ({ productId }) => {
  const [product, setProduct] = useState(null)
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const { direction } = useSwiperDirection()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${productId}`)
        const data = await response.json()
        setProduct(data)
        // console.log(data.images)
      } catch (error) {
        console.error("Error fetching product:", error)
      }
    }
    fetchProduct()
  }, [])


  return (
    <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-6 md:grid-flow-col-dense">
      <div className="h-[300px] md:order-last bg-gray-100  rounded-md shadow-lg  md:col-span-5  md:h-[450px] xl:h-[550px] ">
        <Swiper
          modules={[FreeMode, Navigation, Thumbs]}
          className=" h-full  "
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
                <div className=" overflow-hidden text-sm  rounded-md  relative w-full h-full ">
                  <Image src={image} layout="fill" className="object-contain" alt={product?.title.slice(0, 6)} />
                </div>
              </SwiperSlide>
            })
          }
          ...
        </Swiper>
      </div>
      <div className=" md:h-[450px] xl:h-[550px] ">
        <Swiper
          className="w-full  rounded-md h-full"
          onSwiper={setThumbsSwiper}
          spaceBetween={`${direction === 'horizontal' ? 10 : 15} `}
          // spaceBetween={10}
          slidesPerView={4}
          direction={direction}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
        >
          {
            product?.images.map((x, i) => {
              return <SwiperSlide className="h-full    " key={i} >
                <div className="h-full overflow-hidden rounded-md   w-full  relative  ">
                  <Image src={x} alt={product?.title.slice(0, 6)} className="object-contain" layout="fill" />
                </div>
              </SwiperSlide>
            })
          }
        </Swiper>
      </div>

    </div>
  );
}


export default ProductImageView;