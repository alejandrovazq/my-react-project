import React from 'react';

class TextLabel extends React.Component {
    render() {
      return (
        <label className={`block text-center tracking-wide  text-mediums  ${this.props.fontColor ? this.props.fontColor : 'text-gray-700'}  ${this.props.fontWeight ? this.props.fontWeight : 'font-bold'}  ${this.props.extraClassName ? this.props.extraClassName : ''}`}>
          {this.props.text}
        </label> 
      );
    }
  }
    
export default TextLabel;