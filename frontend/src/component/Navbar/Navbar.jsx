import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Avatar, Badge, IconButton } from '@mui/material';
import { pink } from '@mui/material/colors';
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='px-5 z-50 py-[.2rem] bg-[#e91e63] lg:px-20 flex justify-between sticky top-0'>
      <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
         <li className='logo font-semibold text-gray-300 text-2xl'>
            Yum Yum
         </li>
      </div>
      <div className="flex items-center space-x-2 lg:space-x-10">
         <div className="">
            <IconButton>
               <SearchIcon sx={{fontSize: "1.5rem"}}/>
            </IconButton>
         </div>
         <div className="">
            <IconButton>
               <Avatar sx={{bgcolor:"white",color:pink.A400}}>
                  R
               </Avatar>
            </IconButton>
         </div>
         <div className="">
            <IconButton>
               <Badge color='primary' badgeContent={3}>
                  <ShoppingCartIcon sx={{fontSize: "1.5rem"}}/>
               </Badge>
            </IconButton>
         </div>
      </div>
    </div>
  )
}

export default Navbar