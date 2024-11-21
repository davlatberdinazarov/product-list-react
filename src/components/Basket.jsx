import React from "react";

export default function Basket() {
  return (
    <section>
      <div class="basket-section">
        <h1 class="your_cart">
          Your cart <span id="count_cart">0</span>
        </h1>
        <br />
        <ul id="cart-products" class="cart-products">
          {/* <!-- Your cart data comes here --> */}
        </ul>
      </div>
    </section>
  );
}
