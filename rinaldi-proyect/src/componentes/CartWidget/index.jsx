import { Icon } from "@iconify/react";
import Pill from "../Pill/index";

const CartWidget = ({ quantity }) => {
  return (
    <div className="cart-widget">
      <Pill quantity={quantity} />
      <Icon className="cart-widget__cart" icon="clarity:shopping-cart-solid" />
    </div>
  );
};

export default CartWidget;
