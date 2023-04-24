import { Container } from "react-bootstrap";
import logo from "../../assets/logo/logo.png";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUser, BiLogIn, BiRegistered, BiLogOut } from "react-icons/bi";
import { useState, useEffect } from "react";
import Canvas from "./Offcanvas/Offcanvas";
import {useSelector} from 'react-redux'
const cx = classNames.bind(styles);
function Header() {
  const items = [
    {
      id: 1,
      to: "/",
      type: "Home",
      text: false,
    },
    {
      id: 2,
      to: "/shop",
      type: "Shop",
      text: false,
    },
    {
      id: 4,
      to: "/blog",
      type: "Blog",
      text: false,
    },

    {
      id: 5,
      to: "/contact",
      type: "Contact",
      text: false,
    },
  ];

  const [types, setTypes] = useState("Home");
  const [localUsername, setLocalUsername] = useState(false);
  // const [lengthCartItem, setLengthCartItem] = useState(0);
  const userName=useSelector(state=>state.userNameReducer.username);


 
  useEffect(() => {
    if (!userName) {
      setLocalUsername(true);
    } else {
      setLocalUsername(false);
    }
  }, [userName]);



  const handleLogOut = () => {
    localStorage.removeItem("token");
    setLocalUsername(true);
  };

  return (
    <div
      className={cx("wrapper")}
      style={{
        top: "0",
        position: "fixed",
        zIndex: "100",
        width: "100%",
      }}
    >
      <Container>
        <div className={cx("header")}>
          <div className={cx("header-logo")}>
            <Link to="/" className={cx("logo")}>
              <img className={cx("logo-avt")} src={logo} />
            </Link>
            <Link to="/" className={cx("title")}>
              SuperDrive
            </Link>
          </div>

          <div className={cx("header-after")}>
            <div className={cx("header-item")}>
              {items.map((item) => (
                <Link
                  key={item.id}
                  to={item.to}
                  className={cx("item")}
                  style={
                    types === item.type
                      ? {
                          borderBottom: "2px solid #ff9950",
                          borderRadius: "3px",
                          color: "#ff9950",
                        }
                      : {}
                  }
                  onClick={() => {
                    setTypes(item.type);
                  }}
                >
                  {item.type}
                  
                </Link>
              ))}
            </div>

            <div className={cx("nav-search")}>
              <input className={cx("search")} type="search" />
            </div>

            <div className={cx("btn-log")}>
              <BiUser />

              <div className={cx("user")}>
                {localUsername ? (
                  <>
                    <Link className={cx("user-login")} to="/login">
                      <span>
                        <BiLogIn />
                      </span>
                      Login
                    </Link>
                    <Link className={cx("user-register")} to="/register">
                      <span>
                        <BiRegistered />
                      </span>
                      Register
                    </Link>
                  </>
                ) : (
                  <>
                    <Link className={cx("btn-user")}>
                      <span>
                        <BiUser />
                      </span>
                      {userName}
                    </Link>
                    <Link onClick={handleLogOut} className={cx("btn-log")}>
                      <span>
                        <BiLogOut />
                      </span>
                      Log out
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div
              className={cx("nav")}
              onClick={() => {
                setTypes("AiOutlineShoppingCart");
              }}
            >
              <Link
                to="/checkout"
                style={{ position: "relative", cursor: "pointer" }}
              >
                <AiOutlineShoppingCart
                  className={cx("icon-nav")}
                  style={
                    types === "AiOutlineShoppingCart" && { color: "#ff9950" }
                  }
                />
                <div className={cx("child-icon")}>{0}</div>
              </Link>
            </div>
          </div>
          <div className={cx("offcanvas")}>
            <Canvas
              localUsername={localUsername}
              paserUsername={userName}
              handleLogOut={handleLogOut}
              lengthCartItem={0}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
