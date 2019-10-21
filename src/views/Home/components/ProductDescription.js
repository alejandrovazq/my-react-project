
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tabs from '../../../components/Tabs/Tabs'
import ListDescription from '../../../components/ContentInformation/ListDescription'

class ProductDescription extends React.Component {
  
  render() {
    const tabs = [
      {text: 'Pestaña 1', className: 'tab tab-active', contentClassName: 'tab-content tab-content-active', content : <ListDescription></ListDescription>},
      {text: 'Pestaña 2', className: 'tab', contentClassName: 'tab-content', content : 'Contenido relevante'},
      {text: 'Pestaña 3', className: 'tab', contentClassName: 'tab-content', content : 'Contenido interesante'}
    ];
    return (
      <div className="w-full">
        <div className="flex flex-row">
          <div className="flex flex-col flex-grow px-3 py-2 w-full">
            <nav className="bg-grey-light rounded w-full">
              <ol className="list-reset flex text-grey-dark font-bold text-sm">
                <li><b href="#" className="text-blue"> <FontAwesomeIcon icon="home" /> Home</b></li>
                <li><span className="mx-2">/ /</span></li>
                <li><b href="#" className="text-blue">Admisiones</b></li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col flex-grow px-3 py-2 w-full">
            <h1 className="font-bold uppercase text-2xl text-gray-900">Entrada xcaret parque</h1>
            <p className="text-left text-sm font-bold text-gray-700 my-5">
              Esta es una prueba para validar la descripción del producto
            </p>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col flex-grow px-3 py-2 w-full">
            <h2 className="inline-block font-bold uppercase text-gray-600 mr-2">Entrada xcaret parque, <span className="inline-block line-through text-gray-600">prueba prueba prueba</span></h2>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col flex-grow px-3 py-2 w-full">
            <ul>
              <li className="text-sm text-gray-700">
                <p>
                  <FontAwesomeIcon icon={'clock'} className="mr-2"/>
                  <strong>Duración:</strong> X horas
                </p>
              </li>
              <li className="text-sm text-gray-700">
                <p>
                  <FontAwesomeIcon icon={'heart'} className="mr-2"/>
                  <strong>Categoría:</strong> X categoría
                </p>
              </li>
              <li className="text-sm text-gray-700">
                <p>
                  <FontAwesomeIcon icon={'clock'} className="mr-2"/>
                  <strong>Horario:</strong> X horario
                </p>
              </li>
            </ul>
          </div>
        </div>
          <div className="">
            <Tabs tabs={tabs}></Tabs>
          </div>
      </div>
    );
  }
}

export default ProductDescription;