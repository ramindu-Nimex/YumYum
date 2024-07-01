package com.yumyum.backend.service;

import com.yumyum.backend.dto.RestaurantDto;
import com.yumyum.backend.model.Restaurant;
import com.yumyum.backend.model.User;
import com.yumyum.backend.request.CreateRestaurantRequest;

import java.util.List;

public interface RestaurantService {
    public Restaurant createRestaurant(CreateRestaurantRequest request, User user);
    public Restaurant updateRestaurant(Long restaurantId, CreateRestaurantRequest updateRestaurant) throws  Exception;
    public void deleteRestaurant(Long restaurantId) throws Exception;
    public List<Restaurant> getAllRestaurant();
    public List<Restaurant> searchRestaurant(String keyword);
    public Restaurant findRestaurantById(Long id) throws Exception;
    public Restaurant getRestaurantById(Long userId) throws Exception;
    public RestaurantDto addToFavorites(Long restaurantId, User user) throws Exception;
    public Restaurant updateRestaurantStatus(Long id) throws Exception;
}
