import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'

const demo = [
   {
      category: "Nuts & seeds",
      ingredients: ["Cashews"]
   },
   {
      category: "Protein",
      ingredients: ["Ground beef", "Bacon Strips"]
   },
]

const MenuCard = () => {
   const handleCheckBoxChange = (item) => {
      console.log("item");
   }
  return (
   <Accordion>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel1-content"
     id="panel1-header"
   >
     <div className='lg:flex items-center justify-between'>
         <div className='lg:flex items-center lg:gap-5'>
            <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D" alt="" className="w-[7rem] h-[7rem] object-cover" />
            <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
               <p className="font-semibold text-xl">Pizza</p>
               <p>₹2000</p>
               <p className='text-gray-400'>nice food</p>
            </div>
         </div>
     </div>
   </AccordionSummary>
   <AccordionDetails>
     <form>
      <div className="flex gap-5 flex-wrap">
         {
            demo.map((item) =>
               <div>
                  <p>{item.category}</p>
                  <FormGroup>
                     {
                        item.ingredients.map((item) => <FormControlLabel control={<Checkbox onChange={() =>handleCheckBoxChange(item)}/>} label={item} />)
                     }
                  </FormGroup>
               </div>
            )
         }
      </div>
      <div className='pt-5'>
         <Button type='submit' variant='contained' disabled={false}>{true ? "Add To Cart": "Out of Stock"}</Button>
      </div>
     </form>
   </AccordionDetails>
 </Accordion>
  )
}

export default MenuCard