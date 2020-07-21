import React from 'react';

const MsgList = (props) =>{
    console.log(props.messages);
    return ( 
       
         <ul className="msg-container">                 
            {props.messages.map((message, key) => {
              return (
               <li key={message.mid} className={key % 2 === 0 ? 'even' : 'odd'}>
                 <div className="sender-name">
                   {message.sender}
                 </div>
                 <div className="msg-text">
                   {message.message}
                 </div>
               </li>
             )
           })}
         </ul>   
      
    );
}

export default MsgList;
