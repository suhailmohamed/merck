import React, { useState } from 'react';
import { Link, Element } from 'react-scroll';
import PropTypes from 'prop-types';
import { StartMessageWrapper, MessageContentWrapper, MessageTyperWrapper } from "./StartMessageStyles";

const scrollTop = () => {
  window.scroll(0, 0);
};

const StartMessage = ({
  renderScreen = false
}) => {
  const [isYes, setYesState] = useState(false);
  const [isNo, setNoState] = useState(false);
  const [isMaybe, setMaybeState] = useState(false);

  const clickYesButton = () => {
    setYesState(true);
    setNoState(false);
    setMaybeState(false);
  };

  const clickNoButton = () => {
    setNoState(true);
    setYesState(false);
    setMaybeState(false);
    scrollTop();
  };

  const clickMaybeButton = () => {
    setMaybeState(true);
    setYesState(false);
    setNoState(false);
    scrollTop();
  };

  return (
    <StartMessageWrapper hide={renderScreen}>
      <MessageContentWrapper>
        <div className="message-sender">
          <div className="message-box-wrapper">
            <div className="message-box">
              Good morning.Hope you're in for a quick discussion today.
            </div>
            <div className="message-box">
              Doctor As you know weight gain increases the risk of CVD by a significant amount of 12 percent! Also, a gain of every 3 kg nullifies the benefits of 1 percent reduction in A1c And every 1kg gain increases risk of Heart Failure by a HUGE factor, 7.1 percent Doctor, have a question for you.
            </div>
            <div className="message-box">
              Do you consider managing your patient's BMI important while treating Type 2 Diabetes?
            </div>
          </div>

          <div className="message-btn-wrapper">
            <Link
              to="scroll-to-message"
              spy={true}
              smooth={true}
              duration={500}
              offset={-120}
              className={`btn ${isYes ? "active" : ""}`}
              onClick={clickYesButton}
            >
              Yes
            </Link>
            <button className={`btn ${isNo ? "active" : ""}`} onClick={clickNoButton}>No</button>
            <button className={`btn ${isMaybe ? "active" : ""}`} onClick={clickMaybeButton}>Maybe</button>
          </div>
        </div>

        <div className={`selected-message ${isYes ? "showMessage" : ""}`}>
          <span className="selected-message-text">Yes</span>
        </div>

        <Element name="scroll-to-message" className={isYes ? "showMessage" : "hideMessage"} >
          <div className="message-sender">
            <div className="message-box-wrapper">
              <div className="message-box">
                Indeed Several Studies have shown that Obesity is associated with higher risks of pre-diabetes and type 2 diabetes.
            </div>
              <div className="message-box">
                Tel me doctor, what is your goal while treating patients with Type 2 Diabetes? Is your goal Glycemic control? Or Weight loss ? Or Both?
            </div>
            </div>

            <div className="message-btn-wrapper">
              <button className="btn">Glycemic control</button>
              <button className="btn">Weight loss</button>
              <button className="btn">Both</button>
            </div>
          </div>
        </Element>
      </MessageContentWrapper>

      <MessageTyperWrapper>
        <div className="message-typer">
          <input type="text" placeholder="Type Here" />
          <i className="mike-icon" />
        </div>
      </MessageTyperWrapper>
    </StartMessageWrapper>
  );
};

StartMessage.propTypes = {
  renderScreen: PropTypes.bool
};

export default StartMessage;
