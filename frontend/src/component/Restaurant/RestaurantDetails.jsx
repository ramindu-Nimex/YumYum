import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import React, { useState } from 'react'
import MenuCard from './MenuCard';

const categories = [
   "pizza",
   "burger",
   "biriyani",
   "chicken",
   "rice",
]

const foodTypes = [
   {
      label: "All", value: "all"
   },
   {
      label: "Vegetarian only", value: "vegetarian"
   },
   {
      label: "Non-Vegetarian", value: "non_vegetarian"
   },
   {
      label: "Seasonal", value: "seasonal"
   },
]

const menu = [1,1,1,1,1,1]

const RestaurantDetails = () => {
   const [foodType, setFoodType] = useState('all')

   const handleFilter = (e) => {
      console.log(e.target.value, e.target.name);
   }
  return (
    <div className='px-5 lg:px-20'>
      <section>
         <h3 className='text-gray-500 py-2 mt-10'>Home/Sri Lanka/Sri Lankan Fast Food/3</h3>
         <div>
            <Grid container spacing={2}>
               <Grid item xs={12}>
                  <img src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D" alt="" className='w-full h-[40vh] object-cover'/>
               </Grid>
               <Grid item xs={12} lg={6}>
                  <img src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D" alt="" className='w-full h-[40vh] object-cover'/>
               </Grid>
               <Grid item xs={12} lg={6}>
                  <img src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D" alt="" className='w-full h-[40vh] object-cover'/>
               </Grid>
            </Grid>
         </div>
         <div className="pt-3 pb-5">
            <h1 className='text-4xl font-semibold'>Sri Lankan Fast Food</h1>
            <p className='text-gray-500 mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur at voluptas animi eveniet aliquam porro laboriosam expedita voluptatem accusantium libero?</p>
            <div className='space-y-3 mt-3'>
               <p className="text-gray-500 flex items-center gap-3">
                  <LocationOnIcon />
                  <span>
                     Colombo, Sri Lanka
                  </span>
               </p>
               <p className="text-gray-500 flex items-center gap-3">
                  <CalendarTodayIcon />
                  <span>
                     Mon-Sun 9:00 AM - 9:00 PM(Today)
                  </span>
               </p>
            </div>
         </div>
      </section>
      <Divider />
      <section className='pt-[2rem] lg:flex relative'>
         <div className="space-y-10 lg:w-[20%] filter">
            <div className="box space-y-5 lg:sticky top-28">
               <div className="">
                  <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
                     Food Type
                  </Typography>
                  <FormControl className='py-10 space-y-5' component={"fieldset"}>
                     <RadioGroup onChange={handleFilter} name='food_type' value={foodType}>
                        {
                           foodTypes.map((item) => <FormControlLabel key={item.value} value={item.value} control={<Radio />} label={item.label} />)
                        }
                     </RadioGroup>
                  </FormControl>
               </div>
               <Divider />
               <div className="">
                  <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
                     Food Category
                  </Typography>
                  <FormControl className='py-10 space-y-5' component={"fieldset"}>
                     <RadioGroup onChange={handleFilter} name='food_type' value={foodType}>
                        {
                           categories.map((item) => <FormControlLabel key={item} value={item} control={<Radio />} label={item} />)
                        }
                     </RadioGroup>
                  </FormControl>
               </div>
            </div>
         </div>
         <div className="space-y-10 lg:w-[80%] lg:pl-10">
            {
               menu.map((item) => <MenuCard />)
            }
         </div>
      </section>
    </div>
  )
}

export default RestaurantDetails