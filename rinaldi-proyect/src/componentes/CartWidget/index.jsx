import { Icon } from "@iconify/react";

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <span className="pill">1</span>
      <Icon className="cart-widget__cart" icon="vaadin:cart" />
    </div>
  );
};

export default CartWidget;
