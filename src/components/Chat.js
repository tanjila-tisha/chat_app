import React from "react";
import ChatHeader from "./ChatHeader";
import MsgList from "./MsgList";
import ChatInput from "./ChatInput";

class Chat extends React.Component {

    state = {expand : false, messages : [] };

    toggle=()=>{
        this.setState({expand : !this.state.expand});
    };

    addMessage=(msg)=>{
        const { messages } = this.state;
         const newMessage = {
            mid : parseInt(messages.length) + 1,
            sender: 'Tisha',
            message: msg,
         };
         
        this.setState({messages : [...messages, newMessage]});
        setTimeout(()=>{
            const { messages } = this.state;
            const replyMessage={
                mid : parseInt(messages.length) + 1 ,
                sender: 'Takim',
                message: 'Ok',
             };

             this.setState({messages : [...messages, replyMessage]});

        }, 700);
    };

  render() {
    const {expand , messages}  = this.state;
    
    return (
      <div className="chat-container">
        <ChatHeader toggle={this.toggle} />
        {expand && (
            <div>
            <MsgList messages={messages}/>
            <ChatInput addMessage={this.addMessage}/>
            </div>
        )}
        
      </div>
    );
  }
}

export default Chat;
