function submitOrder() {
    var productName = document.getElementById("productName").value;
    var quantity = document.getElementById("quantity").value;
    var shippingAddress = document.getElementById("shippingAddress").value;
    var paymentMethod = document.getElementById("paymentMethod").value;

    var orderSummaryHTML = "<h2>Order Summary</h2>";
    orderSummaryHTML += "<p><strong>Product:</strong> " + productName + "</p>";
    orderSummaryHTML += "<p><strong>Quantity:</strong> " + quantity + "</p>";
    orderSummaryHTML += "<p><strong>Shipping Address:</strong> " + shippingAddress + "</p>";
    orderSummaryHTML += "<p><strong>Payment Method:</strong> " + paymentMethod + "</p>";

    document.getElementById("orderSummary").innerHTML = orderSummaryHTML;

    var orderDetails = {
        productName: productName,
        quantity: quantity,
        shippingAddress: shippingAddress,
        paymentMethod: paymentMethod
    };

    var orderDetailsJSON = JSON.stringify(orderDetails);

    localStorage.setItem("lastOrder", orderDetailsJSON);
}

function getSavedOrder() {
    var savedOrderJSON = localStorage.getItem("lastOrder");

    if (savedOrderJSON) {
        var savedOrder = JSON.parse(savedOrderJSON);

        document.getElementById("productName").value = savedOrder.productName;
        document.getElementById("quantity").value = savedOrder.quantity;
        document.getElementById("shippingAddress").value = savedOrder.shippingAddress;
        document.getElementById("paymentMethod").value = savedOrder.paymentMethod;
    }
    document.addEventListener("DOMContentLoaded", getSavedOrder);
}
