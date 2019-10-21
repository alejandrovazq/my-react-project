import React from 'react';
import TextLabel from '../InputRepository/TextLabel'
import Btn from '../InputRepository/Btn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Suscribe extends React.Component{
    render(){
      return(
        <div>
          <div className="flex flex-row item-center">
            <div className="flex flex-col flex-grow px-3 py-2 w-full">
              <TextLabel extraClassName="text-center text-5xl" fontColor="text-black" text={<FontAwesomeIcon icon="envelope-open"></FontAwesomeIcon>}></TextLabel>
            </div>
          </div>
          <div className="flex flex-row item-center">
            <div className="flex flex-col flex-grow px-3 py-2 w-full">
            <p className="text-black font-semibold text-xl">Recibe promociones y noticias de Xcaret para disfrutar en tus próximas vacaciones
              </p>   
            </div>
          </div>
          <div className="flex flex-row item-center">
            <div className="flex flex-col flex-grow px-3 py-2 w-full">
              <Btn text="Suscribirme" extraClassName="uppercase" background="bg-black" border=" " font="text-white"></Btn>      
            </div>
          </div>
        </div>
      );
    }
}

export default Suscribe;