"use client"

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from '@mui/material/Button';


/* Icons */
import { FaWhatsapp } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

export default function Header() {

    const headerRef = useRef();

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            let position = window.pageYOffset;
            if(headerRef.current){
                if (position > 100){
                    headerRef.current.classList.add('scroll');
                }else {
                    headerRef.current.classList.remove('scroll')
                }
            }
        })
    })


    return (
        <header className='w-[100%] fixed top-0 left-0 z-[100] py-0 duration-1200' ref={ headerRef }>
            <div className="container flex items-center justify-between">
                <div className='logo w-[25%]'>
                    <Link href={"/"}>
                        <Image src={'/logoZumBurger.png'} width="100" height={"100"} alt="logo"/>
                    </Link>
                </div>
                <div className="ml-auto flex items-center justify-end gap-4 w-[75%]">
                    <nav>
                        <ul className="flex items-center gap-7 mb-0">
                            <li>
                                <Link href="/">
                                    home
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    sobre
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    menu
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    cardápio
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    delivery
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    contato
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <span className="text-y number flex items-center">
                        <FaWhatsapp className="text-y" /> &nbsp; 81 98753-1748
                    </span>
                    <Link href="/cart" className="relative cartTab">
                        <IoCartOutline /><span className="flex items-center justify-center rounded-full">0</span>
                    </Link>
                    <Button className="btn-border">
                        Entrar
                    </Button>
                </div>
            </div>
        </header>
    )
}