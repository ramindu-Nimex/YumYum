package com.yumyum.backend.request;

import com.yumyum.backend.model.Address;
import lombok.Data;

@Data
public class OrderRequest {

    private Long restaurantId;
    private Address deliveryAddress;
}
