import React from 'react';
import TextLabel from '../InputRepository/TextLabel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Suscribe extends React.Component{
    render(){
      return(
        <div>
          <div className="flex flex-row item-center">
            <div className="flex flex-col flex-grow px-3 py-2 w-2/12">
              <TextLabel extraClassName="text-center text-6xl" fontColor="text-black" text={<FontAwesomeIcon icon="mobile-alt"></FontAwesomeIcon>}></TextLabel>
            </div>
            <div className="flex flex-col flex-grow px-3 py-2 w-10/12">
              <p className="text-black font-semibold text-xl">Descarga gratis nuestra app y disfruta de una experiencia única en tu visita</p>              
            </div>
          </div>
          <div className="flex flex-row item-center">
            <div className="flex flex-col flex-grow px-3 py-2 w-2/12">
            </div>
            <div className="flex flex-col flex-grow px-3 py-2 w-10/12">
              <img src="https://via.placeholder.com/400x80.png/000/fff" className="rounded-lg" alt="ejemplo 3"></img>                                                          
            </div>
          </div>
          <div className="flex flex-row item-center">
            <div className="flex flex-col flex-grow px-3 py-2 w-2/12">
            </div>
            <div className="flex flex-col flex-grow px-3 py-2 w-10/12">
              <img src="https://via.placeholder.com/400x80.png/000/fff" className="rounded-lg" alt="ejemplo 3"></img>                                                          
            </div>
          </div>
        </div>
      );
    }
}

export default Suscribe;