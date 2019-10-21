import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SocialMedia extends React.Component{
    render(){
      return(
        <div className=" py-2 w-full text-left">
            <FontAwesomeIcon icon={['fab', 'facebook-f']} className={this.props.className ? this.props.className : 'mx-2'}/>
            <FontAwesomeIcon icon={['fab', 'twitter']} className={this.props.className ? this.props.className : 'mx-2'}/>
            <FontAwesomeIcon icon={['fab', 'instagram']} className={this.props.className ? this.props.className : 'mx-2'}/>
            <FontAwesomeIcon icon={['fab', 'youtube']} className={this.props.className ? this.props.className : 'mx-2'}/>            
        </div>
      );
    }
}

export default SocialMedia;