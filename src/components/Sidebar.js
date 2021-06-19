import React from "react";
import {
  CSidebar,
  CSidebarNav,
  CSidebarBrand,
  CNavItem,
  CNavGroup,
} from "@coreui/react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <CSidebar className="min-vh-100">
      <CSidebarBrand>eVoucher Management System</CSidebarBrand>
      <CSidebarNav>
        <CNavGroup toggler="eVoucher">
          <CNavItem>
            <Link to="/evoucher/list" className="nav-link">
              eVoucher List
            </Link>
          </CNavItem>
          <CNavItem>
            <Link to="/evoucher/create" className="nav-link">
              Create eVoucher
            </Link>
          </CNavItem>
        </CNavGroup>
      </CSidebarNav>
    </CSidebar>
  );
};

export default Sidebar;
