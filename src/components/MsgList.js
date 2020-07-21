import React from "react";

const MsgList = (props) => {
  return (
    <ul className="msg-container">
      {props.messages.map((message, key) => {
        return (
          <li key={message.mid} className={key % 2 === 0 ? "even" : "odd"}>
            <div className="small-text">{message.sender}</div>
            <div className="msg-text">{message.message}</div>
            <div className="small-text">{message.time}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default MsgList;
