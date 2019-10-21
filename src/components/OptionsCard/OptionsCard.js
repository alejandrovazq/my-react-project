import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TextInput from '../InputRepository/TextInput'
import TextLabel from '../InputRepository/TextLabel'
import IconInput from '../InputRepository/IconInput'
import Btn from '../InputRepository/Btn'

class OptionsCard extends React.Component {
  
  render() {
    return (
        <div className="rounded lg:rounded-none overflow-hidden bg-gray-200 lg:bg-white">
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-center mb-2 uppercase text-gray-900">
              Hasta 12 meses sin intereses <FontAwesomeIcon icon="question-circle" />
            </div>
          </div>
          <div className="py-4">
            <div className="active-button w-full py-2 text-white uppercase text-center hidden lg:block xl:block">
              Entrada Xcaret parque
            </div>
          </div>
          <form className="w-full">
            <div className="flex flex-row item-center">
              <div className="flex flex-col flex-grow px-3 py-2 w-full">
                <TextLabel text="Adultos:"></TextLabel>
                <TextLabel text="$93.49 USD"></TextLabel>
                <TextInput inputType="number" placeholderText="Adultos (12+ Años)"></TextInput>
                
              </div>
              <div className="flex flex-col flex-grow px-3 py-2 w-full">
                <TextLabel text="Niños:"></TextLabel>
                <TextLabel text="$46.75 USD"></TextLabel>
                <TextInput inputType="number" placeholderText="Niños (5-11 Años)"></TextInput>
              </div>
            </div>
            <div className="flex flex-row item-center">
              <div className="flex flex-col flex-grow px-3 py-2 w-full">
                <IconInput icon="calendar-alt" iconClassName="text-green-600 text-lg" placeholderText="Fecha de visita"></IconInput>
              </div>
            </div>
            <div className="flex flex-row item-center">
              <div className="flex flex-col flex-grow px-3 py-2 w-9/12">
                <Btn text={['Agregar ', <FontAwesomeIcon icon="bus" />, ' transportacion']} ></Btn>
              </div>
              <div className="flex flex-col flex-grow px-3 py-2 w-1/12 md:w-2/12 ">
                <Btn text="Info" extraClassName="text-sm"></Btn>
              </div>
            </div>
            <div className="flex flex-row item-center">
              <div className="flex flex-col flex-grow px-3 py-2 w-9/12">
                <Btn text={['Agregar ', <FontAwesomeIcon icon="utensils" />, ' alimentos y bebidas']} ></Btn>
              </div>
              <div className="flex flex-col flex-grow px-3 py-2 w-1/12 md:w-2/12 ">
                <Btn text="Info" extraClassName="text-sm"></Btn>
              </div>
            </div>
            <div className="flex flex-row item-center">
              <div className="flex flex-col flex-grow px-3 py-2 w-9/12">
                <Btn text={['Agregar ', <FontAwesomeIcon icon="camera" />, ' Fotopass']} ></Btn>
              </div>
              <div className="flex flex-col flex-grow px-3 py-2 w-1/12 md:w-2/12 ">
                <Btn text="Info" extraClassName="text-sm "></Btn>
              </div>
            </div>
            <div className="flex flex-row item-center">
              <div className="flex flex-col flex-grow px-3 py-2 w-10/12">
                <TextLabel text="Total $93.49 USD" fontColor="text-gray-900" fontWeight="font-medium" extraClassName="text-3xl"></TextLabel>
              </div>
            </div>
            <div className="flex flex-row item-center">
              <div className="flex flex-col flex-grow px-10 py-2 w-12/12">
                <TextLabel text="*Precios  sujeto a cambios si precio aviso, Aplica restricciones" fontColor="text-gray-900" fontWeight="font-semibold" extraClassName="text-sm"></TextLabel>
              </div>
            </div>
              <div className="flex flex-row item-center">
                <div className="flex flex-col flex-grow px-3 py-2 w-6/12">
                  <Btn text="Agregar al carrito"  background="bg-red-100"  border=" " font="text-white" ></Btn>                    
                </div>
                <div className="flex flex-col flex-grow px-3 py-2 w-6/12">
                  <Btn text="Pagar" background="bg-red-500" border=" " font="text-white" extraClassName="flex-grow"></Btn>                    
                </div>
              </div>
              <div className="flex flex-row item-center">
              <div className="flex flex-col flex-grow px-3 pt-2 pb-4 w-12/12">
                <Btn text="Ver descuentos y beneficios" ></Btn>
              </div>
            </div>
          </form>
        </div>
      );
    }
  }
  
  export default OptionsCard;