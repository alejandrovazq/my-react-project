import React from 'react';

class Card extends React.Component{
    render(){
        return(
          <div  className={` ${this.props.bg ? this.props.bg : 'bg-transparent'}  rounded overflow-hidden shadow-lg border border-gray-300`}>
            <div className="px-6 py-4">
                {this.props.content}
            </div>
          </div>
        );
    }
}

export default Card;
