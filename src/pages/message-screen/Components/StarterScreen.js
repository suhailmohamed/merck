import React from 'react';
import styled, { css } from 'styled-components';
import { theme } from "../../styled-components/theme";

const StarterScreenWrapper = styled.div`
  position: fixed;
  top: 120px;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease 0s;
  background-color: ${theme.white};

  ${props => props.open && css`
    opacity: 1;
    display: flex;
  `};

  .starter-screen-inner {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    height: 300px;
    padding: 16px;
    background-color: ${theme.accent1};
    border: 1px solid ${theme.accent2};
    box-sizing: border-box;
    border-radius: 20px;

    .close-icon {
      position: absolute;
      top: 16px;
      left: auto;
      right: 16px;
      width: 26px;
      height: 26px;
      background: url("./image/close-icon.svg") no-repeat center / auto;
      cursor: pointer;
    }
  }
`;

const StarterScreen = ({
  isOpen = true,
  closeScreen
}) => {
  return (
    <StarterScreenWrapper open={isOpen}>
      <div className="starter-screen-inner">
        <i className="close-icon" onClick={closeScreen} />

        <img src="./image/starter-image/starter-image.png" className="mb-8" alt="starter-img" width="208" height="48" />
        <img src="./image/starter-image/starter-image-2.png" alt="starter-img-2" width="264" height="132" />
      </div>
    </StarterScreenWrapper>
  );
};

export default StarterScreen;
