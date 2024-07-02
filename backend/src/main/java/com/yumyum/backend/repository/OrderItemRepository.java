package com.yumyum.backend.repository;

import com.yumyum.backend.model.Order;
import com.yumyum.backend.model.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem,Long> {


}
