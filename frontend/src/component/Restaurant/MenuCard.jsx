import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";
import { categorixedIngredients } from "../../utils/categorizedIngredients";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../State/Cart/Action";

const demo = [
  {
    category: "Nuts & seeds",
    ingredients: ["Cashews"],
  },
  {
    category: "Protein",
    ingredients: ["Ground beef", "Bacon Strips"],
  },
];

const MenuCard = ({ item }) => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const dispatch = useDispatch();

  const handleCheckBoxChange = (item) => {
   console.log("item", item);
    if (selectedIngredients.includes(item)) {
      setSelectedIngredients(
        selectedIngredients.filter((ingredient) => ingredient !== item)
      );
    } else {
      setSelectedIngredients([...selectedIngredients, item]);
    }
  };

  const handleAddToCart = (e) => {
      e.preventDefault();
    const reqData = {
      token: localStorage.getItem("jwt"),
      cartItem: {
         foodId: item.id,
        quantity: 1,
        ingredients: selectedIngredients,
      },
    };
    dispatch(addItemToCart(reqData));
    console.log("reqData", reqData);
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className="lg:flex items-center justify-between">
          <div className="lg:flex items-center lg:gap-5">
            <img
              src={item.images[0]}
              alt=""
              className="w-[7rem] h-[7rem] object-cover"
            />
            <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
              <p className="font-semibold text-xl">{item.name}</p>
              <p>{item.price}</p>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <form>
          <div className="flex gap-5 flex-wrap">
            {Object.keys(categorixedIngredients(item.ingredients)).map(
              (category) => (
                <div>
                  <p>{category}</p>
                  <FormGroup>
                    {categorixedIngredients(item.ingredients)[category].map(
                      (item) => (
                        <FormControlLabel
                          key={item.id}
                          control={
                            <Checkbox
                              onChange={() => handleCheckBoxChange(item.name)}
                            />
                          }
                          label={item.name}
                        />
                      )
                    )}
                  </FormGroup>
                </div>
              )
            )}
          </div>
          <div className="pt-5">
            <Button onClick={handleAddToCart} type="submit" variant="contained" disabled={false}>
              {true ? "Add To Cart" : "Out of Stock"}
            </Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuCard;
