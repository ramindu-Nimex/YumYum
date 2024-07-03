import React from 'react'
import { Card, Chip, IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const RestaurantCard = () => {
  return (
    <Card className='w-[18rem]'>
      <div className={`${true ? 'cursor-pointer' : 'cursor-not-allowed'} relative`}>
         <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D" alt="" className='w-full h-[10rem] rounded-t-md object-cover' />
         <Chip size='small' className='absolute top-2 left-2' color={true ? "success" : "error"} label={true ? "Open" : "Closed"}/>
      </div>
      <div className="p-4 textPart lg:flex justify-between  w-full">
         <div className="space-y-1">
            <p className='font-semibold text-lg'>Sri Lankan Fast Food</p>
            <p className='text-gray-500 text-sm'>Craving it all? Dive into Our global fla...</p>
         </div>
         <div className="">
            <IconButton>
               {true ? <FavoriteIcon color='error' /> : <FavoriteBorderIcon />}
            </IconButton>
         </div>
      </div>
    </Card>
  )
}

export default RestaurantCard