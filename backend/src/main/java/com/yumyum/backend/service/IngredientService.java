package com.yumyum.backend.service;

import com.yumyum.backend.model.IngredientsCategory;
import com.yumyum.backend.model.IngredientsItem;

import java.util.List;

public interface IngredientService {

    public IngredientsCategory createIngredientCategory(String name, Long restaurantId) throws Exception;
    public IngredientsCategory findIngredientCategoryById(Long id) throws Exception;
    public List<IngredientsCategory> findIngredientCategoryByRestaurantId(Long id) throws Exception;
    public IngredientsItem createIngredientItem(Long restaurantId, String ingredientName, Long categoryId) throws Exception;
    public List<IngredientsItem> findRestaurantIngredients(Long restaurantId);
    public IngredientsItem updateStock(Long id) throws Exception;
}
