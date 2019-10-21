import React from 'react';
import ProductsDetail from './components/ProductsDetail'
import RelatedProducts from './components/RelatedProducts'
import CardWhite from '../../components/Cards/CardWhite'
import Suscribe from '../../components/ContentInformation/Suscribe'
import DownloadApp from '../../components/ContentInformation/DownloadApp'
import Slider from '../../components/Slider/Slider'
import Tabs from '../../components/Tabs/Tabs'
import Btn from '../../components/InputRepository/Btn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export class Home extends React.Component {

  render() {

    const tabs = [
      {text: '¿Qué es Xcaret?', className: 'tab-mobile tab-mobile-active uppercase', contentClassName: 'tab-mobile-content tab-mobile-content-active', content : 'Xcatet es el parque en Playa del Carmen con más de 50 atracciones naturales y culturales en donde te reencuentras con la naturaleza  en su maravilloso marco rico en flora y fauna; Y con México, en atracciones que te recuerdan lo grandiosa  que es esta tierra. Descubre por qué Xcaret es el lugar más emblemático de la Riviera Maya'},
      {text: 'Que Incluye', className: 'tab-mobile uppercase', contentClassName: 'tab-mobile-content', content : 'Contenido Incluye'},
      {text: 'Recomendaciones', className: 'tab-mobile uppercase', contentClassName: 'tab-mobile-content', content : 'Contenido interesante'},
      {text: 'Información', className: 'tab-mobile uppercase', contentClassName: 'tab-mobile-content', content : 'Más Información'}
    ];

    const contentClass = {active: 'tab-mobile-content tab-mobile-content-active', inactive: 'tab-mobile-content'}
    const tabsClass = {active: 'tab-mobile tab-mobile-active uppercase', inactive: 'tab-mobile uppercase'}
    
    return (
      <div>
        <div className="flex mb-4">
          <div className="w-full bg-gray-500 text-center text-white font-2xl">
            <Slider></Slider>
          </div>
        </div>
        <ProductsDetail></ProductsDetail>
        <div className="mb-4 px-2 hidden lg:flex">
          <div className="w-full mx-2">
            <div className="inline-block items-start w-1/2">
                <Btn font="text-gray-500" text={['', <FontAwesomeIcon key="angle-double-left" icon="angle-double-left"/>, ' Xcaret Total']} border="border border-gray-500"></Btn>
            </div>
            <div className=" inline-block items-end w-1/2">
                <Btn font="text-gray-500" text={['Xcaret Plus ', <FontAwesomeIcon key="angle-double-right" icon="angle-double-right"/>, '']} border="border border-gray-500"></Btn>
            </div>
          </div>
        </div>
        <RelatedProducts></RelatedProducts>
        <div className="flex mb-4 px-2 lg:hidden">
          <div className="w-full mx-2">
          <Tabs tabs={tabs} tabsClass={tabsClass} contentClass={contentClass}></Tabs>
          </div>
        </div>
        <div className="flex mb-4 px-2 lg:hidden">
          <div className="w-full mx-2">
            <p className="font-semibold text-2xl text-center border-r-1">
              Hasta <strong>12 meses</strong> sin intereses
            </p>
          </div>
        </div>
        <div className="flex mb-4 px-2 lg:hidden">
          <div className="w-full mx-2">
            <p className="font-semibold text-2xl text-center border-r-1">
              <img src="/src/ph900x100.jpg" className="rounded-lg" alt="ejemplo 3"></img>
            </p>
          </div>
        </div>
        <div className="flex mb-4 px-2 lg:hidden">
          <div className="w-full mx-2">
            <p className="">
              Con los principales bancos y tarjetas emitidas en México
            </p>
          </div>
        </div>
        <div className="flex mb-4 px-2 lg:hidden">
          <div className="w-full mx-2">
            <p >*No aplica Paypal <strong className="font-bold text-xl">Más opciones>></strong></p>
          </div>
        </div>
        <div className="flex mb-4 px-2 lg:hidden">
          <div className="w-full mx-2">
            <CardWhite content={<Suscribe></Suscribe>}></CardWhite>
          </div>
        </div>
        <div className="flex mb-4 px-2 lg:hidden">
          <div className="w-full mx-2">
            <CardWhite content={<DownloadApp></DownloadApp>}></CardWhite>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;