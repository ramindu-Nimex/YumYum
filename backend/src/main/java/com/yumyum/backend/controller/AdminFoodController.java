package com.yumyum.backend.controller;

import com.yumyum.backend.model.Food;
import com.yumyum.backend.model.Restaurant;
import com.yumyum.backend.model.User;
import com.yumyum.backend.request.CreateFoodRequest;
import com.yumyum.backend.response.MessageResponse;
import com.yumyum.backend.service.FoodService;
import com.yumyum.backend.service.RestaurantService;
import com.yumyum.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/food")
public class AdminFoodController {

    @Autowired
    private FoodService foodService;
    @Autowired
    private UserService userService;
    @Autowired
    private RestaurantService restaurantService;

    @PostMapping
    public ResponseEntity<Food> createFood(@RequestBody CreateFoodRequest request, @RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Restaurant restaurant = restaurantService.getRestaurantById(user.getId());
        Food food = foodService.createFood(request, request.getCategory(), restaurant);

        return new ResponseEntity<>(food, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<MessageResponse> deleteFood(@PathVariable Long id, @RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        foodService.deleteFood(id);
        MessageResponse response = new MessageResponse();
        response.setMessage("Food deleted successfully");
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Food> updateFoodAvailabilityStatus(@PathVariable Long id, @RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Food food = foodService.updateAvailabilityStatus(id);
        return new ResponseEntity<>(food, HttpStatus.CREATED);
    }
}
