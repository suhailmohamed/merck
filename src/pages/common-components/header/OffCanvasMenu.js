import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import { OffCanvasListConstants } from './OffCanvasListConstants';
import { theme } from "../../styled-components/theme";

const OffCanvasMenuBackdrop = styled.div`
  position: fixed;
  left: 0px;
  top: 30px;
  width: 0px;
  opacity: 0;
  height: 100vh;
  z-index: ${theme.zIndex9};
  background-color: rgba(69, 69, 69, 0.4);
  transition: opacity 0.3s ease 0s;

  ${props => props.open && css`
    width: 100%;
    opacity: 1;
  `};
`;

const OffCanvasMenuWrapper = styled.aside`
  position: fixed;
  width: 312px;
  height: 100vh;
  background-color: ${theme.accent1};
  left: -100%;
  top: 30px;
  z-index: ${theme.zIndex10};
  overflow-x: hidden;
  overflow-y: scroll;
  transition: all 0.3s ease-out 0s;

  ${props => props.open && css`
    left: 0px;
  `}

  .close-icon {
    position: absolute;
    top: 12px;
    left: auto;
    right: 16px;
    width: 26px;
    height: 26px;
    background: url("./image/close-icon.svg") no-repeat center / auto;
    cursor: pointer;
  }

  .offcanvas-list {
    margin-top: 90px;

    a {
      position: relative;
      display: flex;
      align-items: center;
      font-weight: ${theme.semiBold};
      font-size: ${theme.base};
      line-height: ${theme.lineHeight1_2};
      color: #8D8D8D;
      background-color: ${theme.white};
      padding: 14px 24px 14px 64px;

      &:not(:last-child){
        margin-bottom: 4px;
      }

      i.offcanvas-icon {
        position: absolute;
        left: 20px;
        width: 32px;
        height: 24px;
        background-repeat: no-repeat; 
        background-size: contain;
        background-position: center;

        &.guidelines {
          width: 24px;
          height: 24px;
          left: 24px;
        }
        &.webcast {
          width: 28px;
          height: 24px;
          left: 24px;
        }
        &.patient-resources {
          width: 18px;
          height: 18px;
          left: 30px;
        }
        &.score-card {
          width: 28px;
          height: 20px;
          left: 26px;
        }
      }
    }
  }
`;

const OffCanvasMenu = ({
  isOpen = false,
  closeHamburgerMenu
}) => {
  return (
    <Fragment>
      <OffCanvasMenuBackdrop open={isOpen} onClick={closeHamburgerMenu} />

      <OffCanvasMenuWrapper open={isOpen}>
        <i
          className="close-icon"
          onClick={closeHamburgerMenu}
        />

        <div className='offcanvas-list'>
          {OffCanvasListConstants && OffCanvasListConstants.map((item, index) => {
            return (
              <a href={item.link} key={index}>
                <i
                  style={{
                    backgroundImage: `url(${item.image})`
                  }}
                  className={`offcanvas-icon ${item.className}`}
                />
                {item.title}
              </a>
            )
          })}
        </div>
      </OffCanvasMenuWrapper>
    </Fragment>
  );
};

export default OffCanvasMenu;
