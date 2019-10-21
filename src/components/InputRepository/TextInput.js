import React from 'react';

class TextInput extends React.Component {
  render() {
    return (
      <input type={this.props.inputType ? this.props.inputType : 'text'} className="appearance-none w-full border border-gray-500 rounded mt-2 py-4 px-4 text-lg font-medium text-gray-800" placeholder={this.props.placeholderText}></input>
    );
  }
}

export default TextInput;

 