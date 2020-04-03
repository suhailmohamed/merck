import React, { useState, Fragment } from 'react';
import StarterScreen from './Components/StarterScreen';
import StartMessage from './Components/StartMessage';

const MessageScreen = () => {
  const [isStarterScreenClose, setStarterScreenCloseState] = useState(true);

  const closeStarterScreen = () => {
    setStarterScreenCloseState(false);
  };

  return (
    <Fragment>
      <StarterScreen isOpen={isStarterScreenClose} closeScreen={closeStarterScreen} />

      <StartMessage renderScreen={isStarterScreenClose} />
    </Fragment>
  );
};

export default MessageScreen;
