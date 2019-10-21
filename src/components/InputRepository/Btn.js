import React from 'react';

class Btn extends React.Component{

    render(){
        return(
          
          // py-4 px-4 text-lg font-medium text-gray-800
            <button key={this.props.text} className={` ${this.props.background ? this.props.background : 'bg-transparent'} ${this.props.font ? this.props.font : 'text-gray-800'} font-semibold  py-4 px-4 ${this.props.border ? this.props.border : 'border border-gray-900'} ${this.props.extraClassName ? this.props.extraClassName : ''}  rounded-full `}>
              {this.props.text}
            </button>
        );
    }
}

export default Btn;