import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class DesktopNavigationMenu extends React.Component {
  render(){
    return(
      <header>
        <div className="container m-auto">
          <nav className="flex items-center justify-between flex-wrap">
            <div className="flex items-center flex-no-shrink flex-row text-white mr-6">
              <svg className="h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
              <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span>
            </div>
            <div className="flex items-end flex-no-shrink flex-col text-white">
              {/* -------------------------------------- */}
              <div className="text-sm">
                <ul className="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 lg:mr-8 md:border-0">
                  <li>
                    <div className="p-2 relative mx-auto text-gray-600">
                      <input className="bg-white px-4 py-2 pr-16 h-8 rounded-full text-sm focus:outline-none" type="search" name="search" placeholder=""/>
                      <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                          <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" 
                            width="512px" height="512px"><path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" /></svg>
                      </button>
                    </div>
                  </li>
                  <li>
                    <b className="block px-4 py-1 md:p-2 lg:px-4">
                      <FontAwesomeIcon icon="question-circle" size="xs" /> Preguntas Frecuentes
                    </b>
                  </li>
                  <li>
                    <b className="block px-4 py-1 md:p-2 lg:px-4 text-white">
                      <FontAwesomeIcon icon="phone" size="xs" /> Atención a clientes <FontAwesomeIcon icon="caret-down" size="xs" />
                    </b>
                  </li>
                  <li>
                    <b className="block px-4 py-1 md:p-2 lg:px-4">
                      <FontAwesomeIcon icon="user" size="xs" /> Tu cuenta
                    </b>
                  </li>
                  <li>
                    <b className="block px-4 py-1 md:p-2 lg:px-4">USD <FontAwesomeIcon icon="caret-down" size="xs" />
                    </b>
                  </li>
                  <li>
                    <b className="block px-4 py-1 md:p-2 lg:px-4">EN <FontAwesomeIcon icon="caret-down" size="xs" />
                    </b>
                  </li>
                </ul>
              </div>
              {/* -------------------------------------- */}
              <div className="text-sm uppercase">
                <ul className="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 lg:mr-8 md:border-0">
                  <li>
                    <b className="block px-4 py-1 md:p-2 lg:px-4">Parques</b>
                  </li>
                  <li>
                    <b className="block px-4 py-1 md:p-2 lg:px-4">Tours</b>
                  </li>
                  <li>
                    <b className="block px-4 py-1 md:p-2 lg:px-4">Actividades</b>
                  </li>
                  <li>
                    <b className="block px-4 py-1 md:p-2 lg:px-4">Hotel Xcaret</b>
                  </li>
                  <li>
                    <b className="block px-4 py-1 md:p-2 lg:px-4">Promociones y descuentos</b>
                  </li>
                  <li>
                    <b className="block px-4 py-1 md:p-2 lg:px-4 relative overflow-visible">Carrito <FontAwesomeIcon icon="shopping-cart" size="xs" /><div className="absolute top-0 right-0 -mt-2 -mr-2 px-3 py-1 bg-red-500 rounded-full text-xs">1</div></b>
                  </li>
                </ul>
              </div>
              {/* -------------------------------------- */}
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default DesktopNavigationMenu;