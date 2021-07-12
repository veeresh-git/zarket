import React from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const Dish = ({ dish, handleAdd, handleRemove, cartItems }) => {
  const getCount = () => {
    if (cartItems.length) {
      const item = cartItems.find((item) => item.id === dish.dish_id);
      if (item) {
        return item.count;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  };

  return (
    <div className="dish_card">
      <div className="left_part">
        <div className="name">{dish.dish_name}</div>
        <div className="calories">
          <div>SAR {dish.dish_price}</div>
          <div>{dish.dish_calories} calories</div>
        </div>
        <div className="description">{dish.dish_description}</div>
        <div className="buttons">
          <PlusOutlined onClick={() => handleAdd(dish.dish_id)} />
          <div>{getCount()}</div>
          <MinusOutlined onClick={() => handleRemove(dish.dish_id)} />
        </div>
        <div className="customize">
          {dish.addonCat.length ? "Customizations Available" : null}
        </div>
      </div>
      <div className="right_part">
        <img src={dish.dish_image} alt="dish" className="dishImage" />
      </div>
    </div>
  );
};

export default Dish;
