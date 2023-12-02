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

    // You can send this information to a server for further processing (e.g., order confirmation)

    // Display order summary on the page
    document.getElementById("orderSummary").innerHTML = orderSummaryHTML;
}