import styled, { css, keyframes } from 'styled-components';
import { theme } from '../../styled-components/theme';

const showAnimation = keyframes`
  0% {
    opacity:0;
  }
  100% {
    opacity: 1;
  }
`;

export const StartMessageWrapper = styled.div`
  ${props => props.hide && css`
    display: none;
  `};
`;

export const MessageContentWrapper = styled.div`
  width: 100%;
  padding: 40px 32px 76px;

  .btn {
    font-size: ${theme.base};
    font-weight: ${theme.regular};
    line-height: ${theme.lineHeight1_2};
    color: ${theme.white};
    background-color: #7B7EFF;
    border-radius: 20px;
    padding: 14px 20px;  
    margin-bottom: 14px;
    cursor: pointer;

    &:not(:last-child){
      margin-right: 6px;
    }

    &.active {
      background-color: #88C6FF;
    }
  }

  /* message sender css starts */
  .message-sender {
    width: 226px;

    .message-box-wrapper {
      .message-box {
        color: ${theme.baseColor};
        font-size: ${theme.base};
        line-height: ${theme.lineHeight1_2};
        background-color: #D2D3FF;
        padding: 15px 14px 21px 19px;
        border-radius: 0px 20px 20px 0px;
        margin-bottom: 6px;
        
        &:first-child {
          border-radius: 20px 20px 20px 0px;
        }
        &:last-child {
          border-radius: 0px 20px 20px 20px;
          margin-bottom: 14px;
        }
      }
    }

    .message-btn-wrapper {
      display: flex;
      flex-wrap: wrap;
    }
  }
  /* message sender css ends */

  /* selected message css starts */
  .selected-message {
    justify-content: flex-end;
    display: none;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: opacity .6s,visibility .6s;
    transition: opacity .6s,visibility .6s;

    .selected-message-text {
      font-size: ${theme.base};
      font-weight: ${theme.regular};
      line-height: ${theme.lineHeight1_2};
      color: ${theme.white};
      background-color: ${theme.brandSecondary};
      padding: 14px 20px;  
      margin-bottom: 14px;
      border-radius: 20px 0px 20px 20px;
    }
  }

  .showMessage {
    display: flex;
    visibility: visible;
    opacity: 1;
    animation: ${showAnimation} .5s ease-in-out;
  }

  .hideMessage {
    opacity: 0;
    visibility: hidden;
    display: table-column;
  }
  /* selected message css ends */
`;

export const MessageTyperWrapper = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${theme.white};
  padding: 8px;
  height: 76px;

 .message-typer {
    display: flex;
    width: 100%;
    padding: 8px;
    background: #E8E8E8;
    border-radius: 30px;

    input {
      flex: 1;
      padding: 8px;
      background: ${theme.white};
      border: none;
      border-radius: 30px;
      font-size: ${theme.large};
      line-height: 21px;

      &::placeholder {
        color: #E8E8E8;
      }
    }

    .mike-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #FF8E8E;
      width: 46px;
      height: 46px;
      border-radius: 100%;
      cursor: pointer;
      margin-left: 8px;

      &:after {
        content: "";
        display: inline-block;
        width: 18px;
        height: 30px;
        background: url("./image/mike.svg") no-repeat center / contain;
      }
    }
  }
`;