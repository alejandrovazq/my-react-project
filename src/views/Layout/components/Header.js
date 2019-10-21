import React from 'react';
import MobileNavigationMenu from '../../../components/NavBar/MobileNavigationMenu';
import DesktopNavigationMenu from '../../../components/NavBar/DesktopNavigationMenu';


export class Header extends React.Component {
    render() {
        return (
            <div>
                <header className="lg:hidden">
                    <MobileNavigationMenu></MobileNavigationMenu> 
                </header>
                <header className="desktop-header hidden lg:flex">
                    <DesktopNavigationMenu></DesktopNavigationMenu>
                </header>
            </div>
        );
    }
}

export default Header;