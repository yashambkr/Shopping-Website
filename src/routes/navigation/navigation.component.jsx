import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

import "./navigation.style.scss";
const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo />
        </Link>
        <div className="nav-link-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
        </div>
        <div className="nav-link-container">
          <Link className="nav-link" to="/sign-in">
            SignIn
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
