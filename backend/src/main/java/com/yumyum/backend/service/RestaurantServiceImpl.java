package com.yumyum.backend.service;

import com.yumyum.backend.dto.RestaurantDto;
import com.yumyum.backend.model.Address;
import com.yumyum.backend.model.Restaurant;
import com.yumyum.backend.model.User;
import com.yumyum.backend.repository.AddressRepository;
import com.yumyum.backend.repository.RestaurantRepository;
import com.yumyum.backend.repository.UserRepository;
import com.yumyum.backend.request.CreateRestaurantRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class RestaurantServiceImpl implements RestaurantService {
    @Autowired
    private RestaurantRepository restaurantRepository;
    @Autowired
    private AddressRepository addressRepository;
    @Autowired
    private UserRepository userRepository;

    @Override
    public Restaurant createRestaurant(CreateRestaurantRequest request, User user) {
        Address address = addressRepository.save(request.getAddress());
        Restaurant restaurant = new Restaurant();
        restaurant.setAddress(address);
        restaurant.setContactInformation(request.getContactInformation());
        restaurant.setCuisineType(request.getCuisineType());
        restaurant.setDescription(request.getDescription());
        restaurant.setImages(request.getImages());
        restaurant.setName(request.getName());
        restaurant.setOpeningHours(request.getOpeningHours());
        restaurant.setRegistrationDate(LocalDateTime.now());
        restaurant.setOwner(user);
        return restaurantRepository.save(restaurant);
    }

    @Override
    public Restaurant updateRestaurant(Long restaurantId, CreateRestaurantRequest updateRestaurant) throws Exception {
        Restaurant restaurant = findRestaurantById(restaurantId);
        if (restaurant.getCuisineType() != null) {
            restaurant.setCuisineType(updateRestaurant.getCuisineType());
        }
        if (restaurant.getDescription() != null) {
            restaurant.setDescription(updateRestaurant.getDescription());
        }
        if (restaurant.getName() != null) {
            restaurant.setName(updateRestaurant.getName());
        }
        return restaurantRepository.save(restaurant);
    }

    @Override
    public void deleteRestaurant(Long restaurantId) throws Exception {
        Restaurant restaurant = findRestaurantById(restaurantId);
        restaurantRepository.delete(restaurant);
    }

    @Override
    public List<Restaurant> getAllRestaurant() {
        return restaurantRepository.findAll();
    }

    @Override
    public List<Restaurant> searchRestaurant(String keyword) {
        return restaurantRepository.findBySearchQuery(keyword);
    }

    @Override
    public Restaurant findRestaurantById(Long id) throws Exception {
        Optional<Restaurant> opt = restaurantRepository.findById(id);
        if (opt.isEmpty()) {
            throw new Exception("restaurant not found with Id" + id);
        }
        return opt.get();
    }

    @Override
    public Restaurant getRestaurantById(Long userId) throws Exception {
        Restaurant restaurant = restaurantRepository.findByOwnerId(userId);
        if (restaurant == null) {
            throw new Exception("restaurant not found with owner Id" + userId);
        }
        return restaurant;
    }

    @Override
    public RestaurantDto addToFavorites(Long restaurantId, User user) throws Exception {
        Restaurant restaurant = findRestaurantById(restaurantId);
        RestaurantDto dto = new RestaurantDto();
        dto.setDescription(restaurant.getDescription());
        dto.setImages(restaurant.getImages());
        dto.setTitle(restaurant.getName());
        dto.setId(restaurantId);

//        if (user.getFavourites().contains(dto)) {
//            user.getFavourites().remove(dto);
//        } else {
//            user.getFavourites().add(dto);
//        }
        boolean isFavourite = false;
        List<RestaurantDto> favourites = user.getFavourites();
        for (RestaurantDto favorite: favourites) {
            if (favorite.getId().equals(restaurantId)) {
                isFavourite = true;
                break;
            }
        }
        if (isFavourite) {
            favourites.removeIf(favorite-> favorite.getId().equals(restaurantId));
        } else {
            favourites.add(dto);
        }
        userRepository.save(user);
        return dto;
    }

    @Override
    public Restaurant updateRestaurantStatus(Long id) throws Exception {
        Restaurant restaurant = findRestaurantById(id);
        restaurant.setOpen(!restaurant.isOpen());
        return restaurantRepository.save(restaurant);
    }
}
