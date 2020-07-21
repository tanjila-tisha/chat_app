import React from "react";

class ChatInput extends React.Component {
  state = { message: "" };

  componentDidMount(){
    this.nameInput.focus(); 
 }

  inputHandler = (event) => {
    this.setState({ message: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.props.addMessage(this.state.message);
    this.setState({ message: ''});
  };

  render() {
    return (
      <div >
        <form onSubmit={this.submitHandler} className="send-message-form">
          <input 
            ref={(input) => { this.nameInput = input; }} 
            placeholder="Aa"
            type="text"
            className="input-text"
            value={this.state.message}
            onChange={(event) => this.inputHandler(event)}
          />
        </form>
      </div>
    );
  }
}

export default ChatInput;
