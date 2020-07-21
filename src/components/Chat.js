import React from "react";
import ChatHeader from "./ChatHeader";
import MsgList from "./MsgList";
import ChatInput from "./ChatInput";
import {
  getCustomerSupportName,
  getCustomerName,
  getTime,
  getRandomAnswer,
} from "../helper";

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: true,
      messages: [
        this.generateChatMessage(
          0,
          getCustomerSupportName(),
          "How can I help you!"
        ),
      ],
    };
  }

  toggle = () => {
    this.setState({ expand: !this.state.expand });
  };

  generateChatMessage = (length, name, msg) => {
    const newMessage = {
      mid: parseInt(length) + 1,
      sender: name,
      message: msg,
      time: getTime(),
    };
    return newMessage;
  };

  addMessage = (msg) => {
    const { messages } = this.state;
    const newMessage = this.generateChatMessage(
      messages.length,
      getCustomerName(),
      msg
    );

    this.setState({ messages: [...messages, newMessage] });
    setTimeout(() => {
      const { messages } = this.state;
      const replyMessage = this.generateChatMessage(
        messages.length,
        getCustomerSupportName(),
        getRandomAnswer()
      );

      this.setState({ messages: [...messages, replyMessage] });
    }, 700);
  };

  render() {
    const { expand, messages } = this.state;

    return (
      <div className="chat-container">
        <ChatHeader expand={expand} toggle={this.toggle} />
        {expand && (
          <div>
            <MsgList messages={messages} />
            <ChatInput addMessage={this.addMessage} />
          </div>
        )}
      </div>
    );
  }
}

export default Chat;
