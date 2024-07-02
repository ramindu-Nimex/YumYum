package com.yumyum.backend.controller;

import com.yumyum.backend.model.IngredientsCategory;
import com.yumyum.backend.model.IngredientsItem;
import com.yumyum.backend.request.IngredientCategoryRequest;
import com.yumyum.backend.request.IngredientItemRequest;
import com.yumyum.backend.service.IngredientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/ingredients")
public class IngredientController {
    @Autowired
    private IngredientService ingredientService;

    @PostMapping("/category")
    public ResponseEntity<IngredientsCategory> createIngredientCategory(@RequestBody IngredientCategoryRequest request) throws Exception {
        IngredientsCategory ingredientsCategory = ingredientService.createIngredientCategory(request.getName(), request.getRestaurantId());
        return new ResponseEntity<>(ingredientsCategory, HttpStatus.CREATED);
    }

    @PostMapping()
    public ResponseEntity<IngredientsItem> createIngredientItem(@RequestBody IngredientItemRequest request) throws Exception {
        IngredientsItem ingredientsItem = ingredientService.createIngredientItem(request.getRestaurantId(), request.getName(), request.getCategoryId());
        return new ResponseEntity<>(ingredientsItem, HttpStatus.CREATED);
    }

    @PutMapping("/{id}/stoke")
    public ResponseEntity<IngredientsItem> updateIngredientStoke(@PathVariable Long id) throws Exception {
        IngredientsItem ingredientsItem = ingredientService.updateStock(id);
        return new ResponseEntity<>(ingredientsItem, HttpStatus.OK);
    }

    @GetMapping("/restaurant/{id}")
    public ResponseEntity<List<IngredientsItem>> getRestaurantIngredients(@PathVariable Long id) throws Exception {
        List<IngredientsItem> ingredientsItems = ingredientService.findRestaurantIngredients(id);
        return new ResponseEntity<>(ingredientsItems, HttpStatus.OK);
    }

    @GetMapping("/restaurant/{id}/category")
    public ResponseEntity<List<IngredientsCategory>> getRestaurantIngredientCategory(@PathVariable Long id) throws Exception {
        List<IngredientsCategory> ingredientsCategory = ingredientService.findIngredientCategoryByRestaurantId(id);
        return new ResponseEntity<>(ingredientsCategory, HttpStatus.OK);
    }
}
