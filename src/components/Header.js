import React from "react";
import {
  CHeader,
  CContainer,
  CHeaderBrand,
  CHeaderToggler,
  CCollapse,
  CHeaderNav,
  CNavItem,
  CNavLink,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider
} from "@coreui/react";


const Header = ({title, setSideBarShow}) => {
  return (
    <CHeader>
      <CContainer fluid>
        <CHeaderToggler onClick={() => setSideBarShow(sideBarShow => !sideBarShow)}>
          <i className="cil-hamburger-menu" />
        </CHeaderToggler>
        <CHeaderBrand href="#">{title}</CHeaderBrand>
        <CCollapse className="header-collapse">
          <CHeaderNav>
            <CNavItem>
              <CNavLink href="#" active>
                Home
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink href="#">Link</CNavLink>
            </CNavItem>
            <CDropdown variant="nav-item">
              <CDropdownToggle color="secondary">
                Dropdown button
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Something else here</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
            <CNavItem>
              <CNavLink href="#" disabled>
                Disabled
              </CNavLink>
            </CNavItem>
          </CHeaderNav>
        </CCollapse>
      </CContainer>
    </CHeader>
  );
};

export default Header;
