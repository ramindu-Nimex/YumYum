import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCategoryAction } from "../../component/State/Restaurant/Action";

const CreateFoodCategoryForm = () => {
  const { restaurant } = useSelector((store) => store);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    categoryName: "",
    restaurantId: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: formData.categoryName,
      restaurantId: {
        id: 1,
      },
    };
    dispatch(createCategoryAction({reqData: data, jwt: localStorage.getItem("jwt")}));
    console.log(data);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="">
      <div className="">
        <h1 className="text-gray-400 text-center text-xl pb-10">
          Create Food Category
        </h1>
        <form onSubmit={handleSubmit} action="" className="space-y-4">
          <TextField
            fullWidth
            id="categoryName"
            name="categoryName"
            label="Food Category"
            variant="outlined"
            onChange={handleInputChange}
            value={formData.categoryName}
          ></TextField>
          <Button variant="contained" type="submit">
            Create Food Category
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateFoodCategoryForm;
