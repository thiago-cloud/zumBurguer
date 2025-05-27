import React from 'react';
import Image from 'next/image';
import Rating from "@mui/material/Rating";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import { IoCartOutline } from "react-icons/io5";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const ProductItemV2 = () => {
    return (
        <div className="productItemV2">
            <div className="imgWrapper relative w-[100%] rounded-md">
                <Image src="/panishBurger.jpg" alt="image" width="100" height="100"/>
            </div>

            <div className="info p-3 relative overflow-hidden">
                <div className="flex items-center justify-between">
                    <Rating name="half-rating"
                        defaultValue={2.5}
                        precision={0.5}
                        size="small"
                        readOnly
                    />
                    <Checkbox 
                        {...label} 
                        icon={<FavoriteBorder />} 
                        checkedIcon={<Favorite />} 
                        className='wishList absolute -top-[0px] -right-[5px] z-[99]' 
                    />
                </div>

                <h3 className="text-brown text-lg mb-2">
                    panish burger
                </h3>
                <p>
                    Mushroom patty, vegan cheese, lettuce, tomatoes, avocado ligula
                </p>
                <div className="flex item-center justify-between mt-3">
                    <span className="price flex items-center justify-normal p-2 px-3 py-1 text-y text-lg font-weight-bold bg-brown rounded-md">
                        R$ 10,90
                    </span>
                    <Button className="btn-y">
                        <IoCartOutline /> 
                        Comprar
                    </Button>
                </div>
            </div>
        </div>
    )
}