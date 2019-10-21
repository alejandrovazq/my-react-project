import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MobileNavigationMenu extends React.Component {
  render() {
    return (
      <nav className="flex items-center justify-between flex-wrap bg-green-500 border-b-2 border-white">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
          <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span>
        </div>
        <div className="flex items-stretch">
          <div className="flex-1 py-4 px-3  border-l-2 border-white"><FontAwesomeIcon icon="user" color="white"/></div>
          <div className="flex-1 py-4 px-3  border-l-2 border-white"><FontAwesomeIcon icon="phone" color="white" /></div>
          <div className="flex-1 py-4 px-3  border-l-2 border-white"><FontAwesomeIcon icon="shopping-cart" color="white" /></div>
          <div className="flex-1 py-4 px-3  border-l-2 border-white"><FontAwesomeIcon icon="globe" color="white" /></div>
        </div>
      </nav>
    );
  }
}

export default MobileNavigationMenu;