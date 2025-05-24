import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className='w-[100] fixed top-0 left-0 z-[100]'>
            <div className="container flex items-center justify-between">
                <div className='logo'>
                    <Link href={"/"}>
                        <Image src={'/logoZumBurger.png'} width="100" height={"100"}/>
                    </Link>
                </div>

            </div>
        </header>
    )
}