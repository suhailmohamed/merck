import React, { useState } from 'react';
import styled from 'styled-components';
import OffCanvasMenu from './OffCanvasMenu';

import { theme } from "../../styled-components/theme";

const HeaderWrapper = styled.header`
  position: fixed;
  right: 0px;
  left: 0px;
  z-index: ${theme.zIndex9};

  .header-bar {
    background-color: #434343;
    height: 30px;
  }

 .main-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px;
  background-color: ${theme.brandPrimary};
  height: 90px;

    i {
      display: inline-block;
      cursor: pointer;

      &.hamburger-icon {
        width: 32px;
        height: 24px;
        background: url("./image/hamburger-icon.svg") no-repeat center / contain;
      }

      &.user-icon {
        width: 32px;
        height: 32px;
        background: url("./image/user-icon.svg") no-repeat center / contain;
      }
    }

    a {
      display: inline-block;
    }
  }
`;

const Header = () => {
  const [isHamburgerOpen, setHamburgerOpenState] = useState(false);

  const clickHamburgerIcon = () => {
    setHamburgerOpenState(true);
    document.body.classList.add("scroll-locked");
  };

  const closeHamburgerMenu = () => {
    setHamburgerOpenState(false);
    document.body.classList.remove("scroll-locked");
  };

  return (
    <HeaderWrapper>
      <div className="header-bar" />

      <div className="main-header">
        <i
          className="hamburger-icon"
          onClick={clickHamburgerIcon}
        />
        <a href="/">
          <img src="./image/logo.svg" alt="logo" height="18" />
        </a>
        <i className="user-icon" />
      </div>

      <OffCanvasMenu isOpen={isHamburgerOpen} closeHamburgerMenu={closeHamburgerMenu} />
    </HeaderWrapper>
  );
};

export default Header;
