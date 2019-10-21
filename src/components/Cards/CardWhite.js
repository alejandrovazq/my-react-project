import React from 'react';
import Card from './Card'

class CardWhite extends React.Component{
  render(){
    return(
      <Card bg="bg-white" content={this.props.content}></Card>
    );
  }
}

export default CardWhite;
