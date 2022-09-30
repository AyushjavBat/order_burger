import React, { Fragment } from "react";
import { connect } from "react-redux";
import css from "./style.module.css";
import MenuItem from "../MenuItem";

const Menu = props => (
  <div>
    <ul className={css.Menu}>
      {props.userId ? (
        <Fragment>
          <MenuItem exact link='/'>
            NEW ORDER
          </MenuItem>
          <MenuItem link='/orders'>ORDERS</MenuItem>
          <MenuItem link='/logout'>LOG OUT</MenuItem>
        </Fragment>
      ) : (
        <Fragment>
          <MenuItem link='/login'>LOG IN</MenuItem>
          <MenuItem link='/signup'>SIGN UP</MenuItem>
        </Fragment>
      )}
    </ul>
  </div>
);

const mapStateToProps = state => {
  return {
    userId: state.signupReducer.userId,
  };
};

export default connect(mapStateToProps)(Menu);
