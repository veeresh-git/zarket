import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getDishesList } from "../Redux/Actions/appActions";
import "./dishes.scss";
import DishHeader from "./header";
import Dish from "./dish";

const { TabPane } = Tabs;

const Dishes = () => {
  const dispatch = useDispatch();
  const [cartCount, setcartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const dishes = useSelector((state) => state.app.data);
  const loading = useSelector((state) => state.app.loading);

  const handleAdd = (id) => {
    setcartCount(cartCount + 1);
    let item = "";
    item = cartItems.find((item) => item.id === id);
    if (item) {
      let arr = [...cartItems];
      arr.forEach((dummy) => {
        if (dummy.id === id) {
          dummy.count = dummy.count + 1;
        }
      });
      setCartItems(arr);
    } else {
      setCartItems([...cartItems, { id: id, count: 1 }]);
    }
  };

  const handleRemove = (id) => {
    if (cartCount) {
      let item = "";
      item = cartItems.find((item) => item.id === id);
      if (item && item.count) {
        setcartCount(cartCount - 1);
        let arr = [...cartItems];
        arr.forEach((dummy) => {
          if (dummy.id === id) {
            dummy.count = dummy.count - 1;
          }
        });
        setCartItems(arr);
      }
    }
  };

  useEffect(() => {
    dispatch(getDishesList());
  }, []);

  return (
    <div className="Dishes_container">
      {loading ? (
        <></>
      ) : (
        <>
          <DishHeader title={dishes[0]?.branch_name} cartCount={cartCount} />
          <div className="tabs_conatiner">
            <Tabs defaultActiveKey="0" className="custom_tab">
              {dishes[0]?.table_menu_list.map((item, i) => (
                <TabPane tab={item.menu_category} key={i}>
                  {item.category_dishes.map((dish) => (
                    <Dish
                      dish={dish}
                      handleAdd={handleAdd}
                      handleRemove={handleRemove}
                      cartItems={cartItems}
                    />
                  ))}
                </TabPane>
              ))}
            </Tabs>
          </div>
        </>
      )}
    </div>
  );
};

export default Dishes;
