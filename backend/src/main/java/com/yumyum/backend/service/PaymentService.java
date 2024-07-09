package com.yumyum.backend.service;

import com.stripe.exception.StripeException;
import com.yumyum.backend.model.Order;
import com.yumyum.backend.response.PaymentResponse;

public interface PaymentService {

    public PaymentResponse createPaymentLink(Order order) throws StripeException;
}
