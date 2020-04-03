import React, { Fragment } from "react";
import './App.scss'
import Header from "./pages/common-components/header/Header";
import MessageScreen from "./pages/message-screen/MessageScreen";

const App = () => {
  return (
    <Fragment>
      <Header />
      <div className="content-wrap">
        <MessageScreen />
      </div>
    </Fragment>
  );
};

export default App;