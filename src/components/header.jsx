import React from "react";
import { ArrowLeftOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";

const DishHeader = ({ title, cartCount }) => {
  return (
    <div className="header_container">
      <ArrowLeftOutlined className="iconback" />
      <div className="resto_title">{title}</div>
      <div>My Orders</div>
      <div className="cart_holder">
        <ShoppingCartOutlined className="iconcart" />
        <Badge count={cartCount} className="cartcount">
          <a href="#" className="head-example" />
        </Badge>
      </div>
    </div>
  );
};

export default DishHeader;
