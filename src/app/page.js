"use client"
import { BannerSlider } from "@/components/BannerSlider";
import { ProductItemV1 } from '@/components/Product_Item_V1';

import Image from "next/image";
import { useState } from 'react';

export default function Home(){

  const [isActiveTab, setIsActiveTab] = useState(0);
  const filterProducts = (index) => {
    setIsActiveTab(index);
  }

  return(
    <>
      <BannerSlider/>
      
      <section className="filterProducts py-5">
        <div className="container">
          <ul className="list list-inline text-center mb-5">
            <li className={` list-inline-item cursor-pointer ${isActiveTab===0 && 'active'} `} onClick={ () => filterProducts(0) }>
              <Image src={'/burger.png'} width="70" height={"70"} alt="icon" className="m-auto"/>
              <h4 className="text-lg py-2 mb-0 font-weight-bold">Burgers</h4>
            </li>
            <li className={` list-inline-item cursor-pointer ${isActiveTab===1 && 'active'} `} onClick={ () => filterProducts(1) }>
              <Image src={'/dessert.png'} width="70" height={"70"} alt="icon"/>
              <h4 className="text-lg py-2 mb-0 font-weight-bold">Doces</h4>
            </li>
            <li className={` list-inline-item cursor-pointer ${isActiveTab===2 && 'active'} `} onClick={ () => filterProducts(2) }>
              <Image src={'/salad.png'}  width="70" height={"70"} alt="icon"/>
              <h4 className="text-lg py-2 mb-0 font-weight-bold">Saladas</h4> 
            </li>
            <li className={` list-inline-item cursor-pointer ${isActiveTab===3 && 'active'} `} onClick={ () => filterProducts(3) }>
              <Image src={'/sodaAndPotatos.png'} width="70" height={"70"} alt="icon"/>
              <h4 className="text-lg py-2 mb-0 font-weight-bold">Bebidas</h4>
            </li>
          </ul>
          <div className="productsList">
            <div className="container flex items-center gap-7 justify-between">            
              <ProductItemV1/>
              <ProductItemV1/>
              <ProductItemV1/>
              <ProductItemV1/>
            </div>
          </div>
        </div>
      </section>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  );
}