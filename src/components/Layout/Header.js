import { Fragment } from "react";

import classes from "./Header.module.css";

import mealsImage from "../../assets/deliveroo_banner.png";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <br />
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img alt="a banquet of food" src={mealsImage} />
      </div>
    </Fragment>
  );
};

export default Header;
