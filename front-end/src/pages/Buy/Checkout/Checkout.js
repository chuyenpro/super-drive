import { React, useEffect, useState } from "react";
import styles from "./Checkout.module.scss";
import classNames from "classnames/bind";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineRight, AiOutlineCloseCircle } from "react-icons/ai";
import axios from "axios";
const cx = classNames.bind(styles);
const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const carts = JSON.parse(localStorage.getItem("cartitem"));
  const handleRemoveFromCart = (productId) => {
    // axios
    //   .delete(`http://localhost:8080/api/cart/delete/:productId`)
    //   .then((response) => {
    //     if (response.data.status === "ok") {
    //       const updatedCartItems = cartItems.filter(
    //         (item) => item.productId !== productId
    //       );
    //       setCartItems(updatedCartItems);
    //       console.log(cartItems);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
  return (
    <div className={cx("wapper")}>
      <div className={cx("toolbar")}>
        <Container>
          <h3 className={cx("toolbar-title")}>Checkout</h3>
          <div className={cx("directional")}>
            <div>
              Home <AiOutlineRight className={cx("icon-tool")} />
            </div>
            <div>
              Buy <AiOutlineRight className={cx("icon-tool")} />
            </div>
            <div className={cx("end")}>Checkout</div>
          </div>
        </Container>
      </div>
      <Container>
        <Row>
          <div className={cx("content")}>
            <div className={cx("info-user")}>
              <form>
                <div className={cx("title-form")}>Customer information</div>

                <div className={cx("address")}>
                  <div className={cx("checkout-input")}>
                    <p>
                      Address
                      <span>*</span>
                    </p>
                    <input type="text" name="last-name" />
                  </div>
                  <div className={cx("checkout-input")}>
                    <p>
                      Town/City
                      <span>*</span>
                    </p>
                    <input type="text" name="last-name" />
                  </div>
                  <div className={cx("checkout-input")}>
                    <p>
                      Country
                      <span>*</span>
                    </p>
                    <input type="text" name="last-name" />
                  </div>
                </div>

                <div className={cx("checkout-input")}>
                  <p>
                    Phone
                    <span>*</span>
                  </p>
                  <input type="text" name="fist-name" />
                </div>

                <div className={cx("checkout-input")}>
                  <p>Order notes (option)</p>
                  <input type="text" name="last-name" />
                </div>
              </form>
            </div>

            <div className={cx("bill")}>
              <h4 className={cx("bill-title")}>Your order</h4>
              <div className={cx("bill-order")}>
                <div className={cx("title-order")}>
                  <div className={cx("name-product")}>
                    <p>Product</p>
                  </div>

                  <div className={cx("price")}>
                    <p>Price</p>
                  </div>
                </div>
                <div className={cx("list-bill")}>
                  {carts.map((cart) => (
                    <>
                      <p>{cart.title}</p>
                      <div className={cx("icons-bill")}>
                        <span
                          onClick={handleRemoveFromCart}
                          className={cx("plus")}
                        >
                          <AiOutlineCloseCircle />
                        </span>
                      </div>
                      <p>${cart.price}</p>
                    </>
                  ))}
                </div>
              </div>
              <div className={cx("total")}>
                <p>Total</p>
                <p className={cx("total-child")}>0</p>
              </div>
              <div className={cx("check")}>
                <input type="checkbox" name="" value="" />
                Pay on receipt
              </div>
              <div className={cx("check")}>
                <input type="checkbox" name="" value="" />
                <span>Paypal</span>
              </div>
              <button className={cx("btn-submit")}>PLACE ORDER</button>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;
