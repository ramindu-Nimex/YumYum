import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createIngredient, createIngredientCategory } from "../../component/State/Ingredients/Action";

const CreateIngredientForm = () => {
  const dispatch = useDispatch();
  const { restaurant, ingredients } = useSelector((store) => store);
  const jwt = localStorage.getItem('jwt');
  const [formData, setFormData] = useState({
    name: "",
    categoryId: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      restaurantId: restaurant.userRestaurant.id,
    };
    dispatch(createIngredient({ data: data, jwt }));
    console.log(data);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="">
      <div className="">
        <h1 className="text-gray-400 text-center text-xl pb-10">
          Create Ingredient
        </h1>
        <form onSubmit={handleSubmit} action="" className="space-y-4">
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            variant="outlined"
            onChange={handleInputChange}
            value={formData.name}
          ></TextField>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="category"
              value={formData.ingredientCategoryId}
              label="Category"
              onChange={handleInputChange}
              name="categoryId"
            >
              {ingredients.category.map((item) => (
                <MenuItem value={item.id}>{item.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant="contained" type="submit">
            Create Ingredient
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateIngredientForm;
