import React from 'react';
import Image from "next/image";

import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const ProductItemV1 = () => {

    return(
        <div className='product_item_v1 p-4'>
            <div className="imgWrapper relative">
                  <Checkbox 
                    {...label} 
                    icon={<FavoriteBorder />} 
                    checkedIcon={<Favorite />} 
                    className='wishList absolute -top-[0px] -right-[190px] z-[99]' 
                    />
                <Image src="/panishBurger.jpg" alt="img" width={'100'} height={'100'}/>
                <div className="flex items-center justify-between mt-3">
                    <span className="price flex items-center justify-normal p-2 px-3 py-1 text-y text-lg font-weight-bold bg-brown rounded-md">R$ 10,90</span>
                </div>
            </div>
        </div>
    )

}
