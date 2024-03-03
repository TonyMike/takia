"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const ProductImageView = ({ productId }) => {
  console.assert(productId)
  const [product, setProduct] = useState(null)
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


  return (
    <div className="grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-6 md:grid-flow-col-dense">
      <div className="h-72 bg-gray-100 rounded-md md:col-span-5 md:h-96 lg:h-[450px] xl:h-[500px] ">
        <Swiper
          modules={[Navigation, Pagination]}
          className=" h-full tetx-sm"
          spaceBetween={50}
          slidesPerView={1}
          // scrollbar={{ draggable: true }}
          pagination={{ type: 'fraction' }}
          navigation={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
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
          {/* <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide> */}
          ...
        </Swiper>
      </div>
      <div className="h-20  md:order-first md:col-span-1 md:h-96 lg:h-[450px] xl:h-[500px] grid  grid-cols-4 grid-rows-1 md:grid-cols-1 md:grid-rows-4 md:grid-flow-col-dense gap-2  ">
        {
          // Array(4).fill(0).map((x, i) => {
          //   return <div className="bg-gray-100 rounded-md relative" key={i}>{i}</div>
          // })
          product?.images.map((x, i) => {
            return <div className="bg-gray-100 overflow-hidden shadow-md rounded-md relative" key={i}>
              <Image src={x} alt={x} layout="fill" objectFit="cover" />
            </div>
          })
        }

      </div>
    </div>
  );
}

export default ProductImageView;