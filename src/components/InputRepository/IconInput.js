import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TextInput from '../InputRepository/TextInput'

class IconInput extends React.Component{
    render(){
        return(
            <div className="relative text-gray-600">
                <TextInput inputType={this.props.inputType} placeholder={this.props.placeholderText ? this.props.placeholderText : ''} placeholderText={this.props.placeholderText}></TextInput>
                <button type="submit" className="absolute right-0 top-10 mt-5 mr-4">
                    <FontAwesomeIcon icon={this.props.icon ? this.props.icon : ''} className={this.props.iconClassName}  />
                </button>
            </div>
        );
    }
}

export default IconInput;