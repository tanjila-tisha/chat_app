import React from "react";

const ChatHeader = (props) => {
  return (
    <div className="chat-header" onClick={props.toggle}>
      <span>Chat</span>
      {props.expand && <span> - </span>}
    </div>
  );
};

export default ChatHeader;
