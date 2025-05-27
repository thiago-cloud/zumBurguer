import React from 'react';
import Image from "next/image";

import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { IoCartOutline } from "react-icons/io5";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const ProductItemV1 = () => {

    return(
        <div className='product_item_v1'>
            <div className="imgWrapper relative  p-3">
                  <Checkbox 
                    {...label} 
                    icon={<FavoriteBorder />} 
                    checkedIcon={<Favorite />} 
                    className='wishList absolute -top-[0px] -right-[210px] z-[99]' 
                    />
                <Image src="/bigtiBurger.png" alt="img" width={'100'} height={'100'}/>
                <div className="flex items-center justify-between mt-3">
                    <span className="price flex items-center justify-normal p-2 px-3 py-1 text-y text-lg font-weight-bold bg-brown rounded-md">
                        R$ 10,90
                    </span>
                     <Rating name="half-rating" defaultValue={2.5} precision={0.5} size="small" readOnly/>
                
                </div>
            </div>
            <div className='info text-center'>
                <h4 className="mt-2 font-weight-bold">
                    Bigti Burger
                </h4>
                <p className="text-black/60 mt-2 mb-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit mollitia delectus numqua.
                </p>
                <Button><IoCartOutline /> 
                    Comprar
                </Button>
            </div>
        </div>
    )

}
