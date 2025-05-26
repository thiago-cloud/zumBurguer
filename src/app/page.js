"use client"
import { BannerSlider } from "@/components/BannerSlider";
import { ProductItemV1 } from '@/components/Product_Item_V1';

import Image from "next/image";
import { useState } from 'react';
import Button from '@mui/material/Button';

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

      <section className="section2 text-center">
        <div className="container">
          <div className="info w-75 m-auto">
            <h2 className="text-brown mb-4">
              O sabor do hambúrguer fica melhor quando <br/> você come com sua família
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type 
              specimen book.
            </p>
            <Button className="btn-red btn-lg no-radius">
              Ver Mais
            </Button>
          </div>
        </div>
      </section>

      <section className="section3 text-center bg-brown py-5 bg-y">
        <div className="container flex items-center justify-between">
          <div className="box p-5 w-[33%] text-center">
            <Image src="/recipe-book.png" width={100} height={100} alt="icon" className="m-auto"/>
            <h3 className="mt-4"> Receitas Originais</h3>
            <p className="mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type 
              specimen book.
            </p>
          </div>
          <div className="box p-5 w-[33%] text-center">
            <Image src="/quality-food.png" width={100} height={100} alt="icon" className="m-auto"/>
            <h3 className="mt-4">Comida de Qualidade</h3>
            <p className="mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type 
              specimen book.
            </p>
          </div>
          <div className="box p-5 w-[33%] text-center">
            <Image src="/fast-delivery.png" width={100} height={100} alt="icon" className="m-auto"/>
            <h3 className="mt-4">Entrega Mais Rápida </h3>
            <p className="mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type 
              specimen book.
            </p>
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