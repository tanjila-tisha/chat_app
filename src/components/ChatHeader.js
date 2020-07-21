import React from "react";

const ChatHeader = (props) => {
  const minus = require("../images/minus-icon.png");
  return (
    <div className="chat-header" onClick={props.toggle}>
      <span>Chat</span>
      {props.expand && (
        <span>
          <img src={minus} alt="minus" width="16" />
        </span>
      )}
    </div>
  );
};

export default ChatHeader;

