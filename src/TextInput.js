import React, { Component } from 'react';

class TextInput extends Component {
  handleTextCahnge(event){
    this.props.handler(this.props.name, event.target.value);
  }

  render() {
    // console.log(this.props);
    return (
      <div>
          <input type="text" value={this.props.value}
            onChange={this.handleTextCahnge.bind(this)} />
      </div>
    );
  }
}

export default TextInput;
