import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { Drawer, Button } from "antd";

export default function NavBar() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <div className="mobileHidden">
        <div className="nav-bar">
          <NavLink
            to="/tableware"
            className="nav-item"
            activeClassName="nav-item--active"
          >
            Tableware
          </NavLink>
          <NavLink
            to="/cookware"
            className="nav-item"
            activeClassName="nav-item--active"
          >
            Cookware
          </NavLink>
          <NavLink
            to="/home-accessories"
            className="nav-item"
            activeClassName="nav-item--active"
          >
            Home accessories
          </NavLink>
          <NavLink
            to="/lighting"
            className="nav-item"
            activeClassName="nav-item--active"
          >
            Lighting
          </NavLink>
          <NavLink
            to="/textile"
            className="nav-item"
            activeClassName="nav-item--active"
          >
            Textile
          </NavLink>
          <NavLink
            to="/furniture"
            className="nav-item"
            activeClassName="nav-item--active"
          >
            Furniture
          </NavLink>
        </div>
      </div>
      <div className="mobileVisible">
        <Button type="primary" onClick={showDrawer}>
          &#9776;
        </Button>
        <Drawer
          placement="left"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <div className="hamburger-menu">
            <NavLink
              to="/tableware"
              className="hamburger-item"
              activeClassName="hamburger-item--active"
            >
              Tableware
            </NavLink>
            <NavLink
              to="/cookware"
              className="hamburger-item"
              activeClassName="hamburger-item--active"
            >
              Cookware
            </NavLink>
            <NavLink
              to="/home-accessories"
              className="hamburger-item"
              activeClassName="hamburger-item--active"
            >
              Home accessories
            </NavLink>
            <NavLink
              to="/lighting"
              className="hamburger-item"
              activeClassName="hamburger-item--active"
            >
              Lighting
            </NavLink>
            <NavLink
              to="/textile"
              className="hamburger-item"
              activeClassName="hamburger-item--active"
            >
              Textile
            </NavLink>
            <NavLink
              to="/furniture"
              className="hamburger-item"
              activeClassName="hamburger-item--active"
            >
              Furniture
            </NavLink>
          </div>
        </Drawer>
      </div>
    </>
  );
}
