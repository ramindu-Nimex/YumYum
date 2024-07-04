import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const EventCard = () => {
  return (
    <div>
      <Card sx={{width:345}}>
         <CardMedia sx={{height:345}} image='https://images.unsplash.com/photo-1530554764233-e79e16c91d08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVyZ2VyfGVufDB8fDB8fHww'/>
         <CardContent>
            <Typography variant='h5'>
               Sri Lankan Fast Food
            </Typography>
            <Typography variant='body2'>
               50% off on your first order
            </Typography>
            <div className="py-2 space-y-2">
               <p>{"Colombo"}</p>
               <p className='text-sm text-blue-500'>August 01, 2024 12.00 AM</p>
               <p className='text-sm text-red-500'>August 02, 2024 12.00 AM</p>
            </div>
         </CardContent>
         {
            true && (
               <CardActions>
                  <IconButton>
                     <DeleteIcon />
                  </IconButton>
               </CardActions>
            )
         }
      </Card>
    </div>
  )
}

export default EventCard