import React from 'react';
import SocialMedia from '../../../components/ContentInformation/SocialMedia'
import {brands, brands2, brands3, brands4, brands5} from '../../../resources/brands'
import {links1, links2, links3, links4, links5} from '../../../resources/links'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Footer extends React.Component {

  renderBrand(items, className) {
    const listItems = items.map((item, index) =>
      <div key={index} className={className}>
        <img src={item.img} alt={item.alt} className={item.className ? item.className : ''} />                 
      </div>

    );
  return listItems; 
  }

  renderLinks(items, className) {
    const listItems = items.map((item, index) =>
      <li key={index} className={className}>{item.text}</li>
    );
  return listItems; 
  }
  
    render() {
        return (
          <footer className="bg-green-500">
            <div className="flex flex-wrap justify-center mb-4 px-2">
              {this.renderBrand(brands, 'flex-col  mx-2 mt-3')}
            </div>
            <div className="flex mb-4 px-2">
              {this.renderBrand(brands2, 'flex-col w-full mx-2')}
            </div>
            <div className="flex justify-center  mb-4 px-2">
              {this.renderBrand(brands3, 'flex-col w-full mx-2')}
            </div>
            <div className="flex justify-center  mb-4 px-2">
              {this.renderBrand(brands4, 'flex-col w-full mx-2')}
            </div>
            <div className="flex justify-center  mb-4 px-2">
              {this.renderBrand(brands5, 'flex-col w-full mx-2')}
            </div>
            <div className="flex flex-wrap justify-center text-white text-2xl my-3">
              <div className="flex-col px-3 py-2 text-center">
                <span className="font-semibold tracking-tight">
                <img src="/src/logo-brand.png" alt="brands-1-2" className="w-32"></img>                 
                </span>
              </div>
            </div>
            <div className="flex flex-wrap item-center  xs:w-full text-white text-2xl lg:text-sm my-3">
              <div className="flex-col px-3 w-full lg:w-1/5 py-2 text-center">
                <div className=" py-2 w-full text-left border-b border-white text-lg">
                  <span className="font-semibold tracking-tight ">
                    {links1.name}
                  </span>
                </div>
                <div className=" py-2 w-full text-left ">
                  <ul className="">
                    {this.renderLinks(links1.items, 'mb-2')}
                  </ul>
                </div>
              </div>
              <div className="flex-col px-3 w-full lg:w-1/5 py-2 text-center">
                <div className=" py-2 w-full text-left border-b border-white text-lg">
                  <span className="font-semibold tracking-tight ">
                    {links2.name}
                  </span>
                </div>
                <div className=" py-2 w-full text-left ">
                  <ul className="">
                    {this.renderLinks(links2.items, 'mb-2')}
                  </ul>
                </div>
              </div>
              <div className="flex-col px-3 w-full lg:w-1/5 py-2 text-center">
                <div className=" py-2 w-full text-left border-b border-white text-lg">
                  <span className="font-semibold tracking-tight ">
                    {links3.name}
                  </span>
                </div>
                <div className=" py-2 w-full text-left ">
                  <ul className="">
                    {this.renderLinks(links3.items, 'mb-2')}
                  </ul>
                </div>
              </div>
              <div className="flex-col px-3 w-full lg:w-1/5 py-2 text-center">
                <div className=" py-2 w-full text-left border-b border-white text-lg">
                  <span className="font-semibold tracking-tight ">
                  {links4.name}
                  </span>
                </div>
                <div className=" py-2 w-full text-left ">
                  <ul className="">
                    {this.renderLinks(links4.items, 'mb-2')}
                  </ul>
                </div>
              </div>
              
              <div className="flex-col px-3 w-full lg:w-1/5 py-2 text-center">
                <div className=" py-2 w-full text-left border-b border-white text-lg">
                  <span className="font-semibold tracking-tight ">
                  {links5.name}
                  </span>
                </div>
                <div className=" py-2 w-full text-left ">
                  <ul className="">
                    {this.renderLinks(links5.items, 'mb-2')}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap item-center  text-white text-base my-3">
              <div className="flex-col px-3 w-full lg:w-2/12 py-2 text-center hidden lg:flex">
                <div className=" py-2 w-full text-left border-b border-white ">
                  <span className="font-semibold tracking-tight ">
                    Redes sociales
                  </span>
                </div>
                <SocialMedia></SocialMedia>
              </div>
              <div className="flex-col px-3 w-full lg:w-10/12 py-2 text-center">  
                <div className=" py-2 w-full text-left border-b border-white ">
                  <span className="font-semibold tracking-tight ">
                    Customer Service / Sales
                  </span>
                </div>
                <div className=" py-2 w-full text-left pt-8 text-sm">
                  <p> Monday to Friday from 7:00 AM to 12:00 AM / Saturday and Sunday from 7:00 AM to 10:00 PM</p>
                  
                </div>
                <div className=" py-2 w-full text-left pt-8 text-sm ">
                  <p>Toll free number whitin México</p>
                  <div className="flex flex-wrap item-start  text-white text-semi">
                    <div className="flex-col px-3 flex-shrink py-2 lg:w-1/3 w-1/2 text-center">
                      <div className="h-full w-full bg-green-900  px-4 py-2 rounded-2lg">
                        Cancún:998-883-3143
                      </div>
                    </div>
                    <div className="flex-col px-3 flex-shrink py-2 lg:w-1/3 w-1/2 text-center">
                      <div className="h-full w-full bg-green-900  px-4 py-2 rounded-2lg">
                        Playa del carmen:998-883-3143
                      </div>
                    </div>
                  </div>
                  <p>Rest of the world</p>
                  <div className="flex flex-wrap item-start  text-white text-semi ">
                    <div className="flex-col px-3 flex-shrink  lg:w-1/3 w-1/2 py-2 text-center">
                      <div className="h-full w-full align-middle bg-green-900 px-4 py-2 rounded-2lg">
                        USA-CAN: 1 855-883-3143
                      </div>
                    </div>
                    <div className="flex-col px-3 flex-shrink  lg:w-1/3 w-1/2 py-2 text-center">
                      <div className="h-full w-full bg-green-900 px-4 py-2 rounded-2lg">
                        Brazil: 0-800-883-3143
                      </div>
                    </div>
                    <div className="flex-col px-3 flex-shrink  lg:w-1/3 w-1/2 py-2 text-center">
                      <div className="h-full w-full bg-green-900 px-4 py-2 rounded-2lg">
                        Argentina: 0800-883-3143
                      </div>
                    </div>
                    <div className="flex-col px-3 flex-shrink  lg:w-1/3 w-1/2 py-2 text-center">
                      <div className="h-full w-full bg-green-900 px-4 py-2 rounded-2lg">
                        USA-CAN: 1 855-883-3143
                      </div>
                    </div>
                    <div className="flex-col px-3 flex-shrink  lg:w-1/3 w-1/2 py-2 text-center">
                      <div className="h-full w-full bg-green-900 px-4 py-2 rounded-2lg">
                        Brazil: 0-800-883-3143
                      </div>
                    </div>
                    <div className="flex-col px-3 flex-shrink  lg:w-1/3 w-1/2 py-2 text-center">
                      <div className="h-full w-full bg-green-900 px-4 py-2 rounded-2lg">
                        Argentina: 0800-883-3143
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center mb-4 px-2"> 
              <div className=" py-2 px-2 w-2/12 text-left">
                <img src="./src/ph300x200.jpg" alt="brand-1" className="mx-auto" />
              </div> 
              <div className=" py-2 px-2 w-2/12 text-left">
                <img src="./src/ph300x200.jpg" alt="brand-1" className="mx-auto" />
              </div> 
              <div className=" py-2 px-2 w-2/12 text-left">
                <img src="./src/ph300x200.jpg" alt="brand-1" className="mx-auto" />
              </div> 
              <div className=" py-2 px-2 w-2/12 text-left">
                <img src="./src/ph300x200.jpg" alt="brand-1" className="mx-auto" />
              </div> 
              <div className=" py-2 px-2 w-2/12 text-left">
                <img src="./src/ph300x200.jpg" alt="brand-1" className="mx-auto" />
              </div> 
              <div className=" py-2 px-2 w-2/12 text-left">
                <img src="./src/ph300x200.jpg" alt="brand-1" className="mx-auto" />
              </div>
            </div>
            <div className="flex flex-wrap justify-center mb-4 px-2 border-b-2 border-white lg:hidden"> 
              <div className=" py-2 px-2 w-3/12 text-center text-white text-3xl">
                <FontAwesomeIcon icon={['fab', 'facebook-f']} className="mx-2"/>
              </div> 
              <div className=" py-2 px-2 w-3/12 text-center text-white text-3xl">
                <FontAwesomeIcon icon={['fab', 'twitter']} className="mx-2"/>
              </div>
              <div className=" py-2 px-2 w-3/12 text-center text-white text-3xl">
                <FontAwesomeIcon icon={['fab', 'instagram']} className="mx-2"/>
              </div>
              <div className=" py-2 px-2 w-3/12 text-center text-white text-3xl">
                <FontAwesomeIcon icon={['fab', 'youtube']} className="mx-2"/>
              </div>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start mb-4 px-2 border-b-1 border-white">
                <div className="flex-row py-2 px-2 text-left text-white text-base">
                  <p>Xcaret - México, Chetumal, Puerto Juarez Federal Highway, Km282 , Rancho Xcaret, Playa del Carmen,
                    Quintana Roo, México CP 77710
                  </p>
                  <p>
                    Teléfono Cancún:998-883-3143 www.xcaret.com/en/ Open Monday to Sunday from 8-.30 a.m. to 10:30 p.m.
                  </p>
                  <p>
                    © Copyright 2019 Experiencias Excaret Parques, S.A.P.I de C.V
                  </p>
                </div>
            </div>
          <div className="flex flex-row flex-wrap justify-between p-2 text-base lg:w-full text-white text-sm border-t border-white lg:hidden"> 
            <div className="flex items-center justify-center py-3 flex-col text-white">
              <div className="rounded-full border h-10 w-10 flex items-center justify-center ">
                  <FontAwesomeIcon size="lg" icon="home" />
              </div>
              <p className="pt-1 text-sm">Inicio</p>
            </div> 
                <div className="flex flex-wrap items-center justify-center py-3 flex-col">
                    <div className="rounded-full border h-10 w-10 flex items-center justify-center ">
                        <FontAwesomeIcon size="lg" icon="heart" />
                    </div>
                    <p className="pt-1 text-sm">Parques</p>
                </div> 
                <div className="flex flex-wrap items-center justify-center py-3 flex-col">
                    <div className="rounded-full border h-10 w-10 flex items-center justify-center ">
                        <FontAwesomeIcon size="lg" icon="map" />
                    </div>
                    <p className="pt-1 text-sm">Tours</p>
                </div> 
                <div className="flex flex-wrap items-center justify-center py-3 flex-col">
                    <div className="rounded-full border h-10 w-10 flex items-center justify-center ">
                        <FontAwesomeIcon size="lg" icon="star" />
                    </div>
                    <p className="pt-1 text-sm">Actividades</p>
                </div> 
                <div className="flex flex-wrap items-center justify-center py-3 flex-col">
                    <div className="rounded-full border h-10 w-10 flex items-center justify-center ">
                        <FontAwesomeIcon size="lg" icon="hotel" />
                    </div>
                    <p className="pt-1 text-sm">Hospedaje</p>
                </div>
                <div className="flex flex-wrap items-center justify-center py-3 flex-col">
                    <div className="rounded-full border h-10 w-10 flex items-center justify-center ">
                        <FontAwesomeIcon size="lg" icon="hand-holding-usd" />
                    </div>
                    <p className="pt-1 text-sm">Ahorra</p>
                </div> 
            </div>
          </footer>
        );
    }
}

export default Footer;