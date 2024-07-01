package com.yumyum.backend.controller;

import com.yumyum.backend.model.Food;
import com.yumyum.backend.model.Restaurant;
import com.yumyum.backend.model.User;
import com.yumyum.backend.request.CreateFoodRequest;
import com.yumyum.backend.service.FoodService;
import com.yumyum.backend.service.RestaurantService;
import com.yumyum.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/food")
public class FoodController {

    @Autowired
    private FoodService foodService;
    @Autowired
    private UserService userService;
    @Autowired
    private RestaurantService restaurantService;

    @GetMapping("/search")
    public ResponseEntity<List<Food>> searchFood(@RequestParam String name, @RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        List<Food> foods = foodService.searchFood(name);

        return new ResponseEntity<>(foods, HttpStatus.CREATED);
    }

    @GetMapping("/restaurant/{restaurantId}")
    public ResponseEntity<List<Food>> getRestaurantFood(@RequestParam boolean vegetarian, @RequestParam boolean Seasonal, @RequestParam boolean nonVegetarian, @RequestParam(required = false) String food_category, @PathVariable Long restaurantId, @RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        List<Food> foods = foodService.getRestaurantsFood(restaurantId, vegetarian, nonVegetarian, Seasonal, food_category);
        return new ResponseEntity<>(foods, HttpStatus.OK);
    }
}
