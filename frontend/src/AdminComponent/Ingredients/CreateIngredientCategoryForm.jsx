import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createIngredientCategory } from "../../component/State/Ingredients/Action";

const CreateIngredientCategoryForm = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem('jwt');
  const { restaurant } = useSelector((store) => store);
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    const data = {name: formData.name, restaurantId: restaurant.userRestaurant.id};
    dispatch(createIngredientCategory({ data: data, jwt }));
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="">
      <div className="">
        <h1 className="text-gray-400 text-center text-xl pb-10">
          Create Ingredient Category
        </h1>
        <form onSubmit={handleSubmit} action="" className="space-y-4">
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Category"
            variant="outlined"
            onChange={handleInputChange}
            value={formData.name}
          ></TextField>
          <Button variant="contained" type="submit">
            Create Ingredient Category
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateIngredientCategoryForm;
