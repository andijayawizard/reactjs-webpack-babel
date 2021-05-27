import React from "react";
import ReactDOM from "react-dom";
import Top from "./components/Top";
import Bottom from "./components/Bottom";
import Sidebar from "./components/Sidebar";
import Content from './components/Content'
import "./scss/style.scss";

const HelloWorld = () => {
  return (
    <>
      <Top />
      <Sidebar />
      <Content />
      <div className="clear"></div>
      <Bottom />
    </>
  );
};
ReactDOM.render(<HelloWorld />, document.getElementById("root"));
