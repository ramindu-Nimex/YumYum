import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5'>
      <div className="flex items-center space-x-5">
         <img className='h-16 w-16' src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D" alt="" />
         <div className="">
            <p>Pizza</p>
            <p>₹2000</p>
         </div>
      </div>
      <div>
         <Button className='cursor-not-allowed'>Completed</Button>
      </div>
    </Card>
  )
}

export default OrderCard