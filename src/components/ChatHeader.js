import React from 'react';

const ChatHeader = (props) =>{
    return ( 
        <div className="chat-header" onClick= {props.toggle}>
            Chat
        </div>
    );
}

export default ChatHeader;

