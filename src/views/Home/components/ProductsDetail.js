import React from 'react';
// import Tabs from '../../components/Tabs/Tabs'
import OptionsCard from '../../../components/OptionsCard/OptionsCard'
import ProductDescription from './ProductDescription'
import Tabs from '../../../components/Tabs/Tabs'

class ProductsDetail extends React.Component {
  render() {
    const tabs = [
      {text: 'Compra tu admisión', className: 'tab-mobile tab-mobile-active uppercase', contentClassName: 'tab-mobile-content tab-mobile-content-active uppercase', content : <OptionsCard></OptionsCard>},
      {text: 'Atracciones', className: 'tab-mobile uppercase', contentClassName: 'tab-mobile-content uppercase', content : 'Contenido relevante'},
      {text: 'Gastronomía', className: 'tab-mobile uppercase', contentClassName: 'tab-mobile-content uppercase', content : 'Contenido interesante'},
      {text: 'Cómo llegar', className: 'tab-mobile uppercase', contentClassName: 'tab-mobile-content uppercase', content : 'Contenido de cómo llegar'}
    ];

    const contentClass = {active: 'tab-mobile-content tab-mobile-content-active', inactive: 'tab-mobile-content'}
    const tabsClass = {active: 'tab-mobile tab-mobile-active uppercase', inactive: 'tab-mobile uppercase'}
    return (
      <div className="flex mb-4 px-2">
        <div className="hidden lg:block w-8/12 mx-2">
          <ProductDescription></ProductDescription>
        </div>
        <div className="w-full hidden lg:block lg:w-4/12 mx-2"> 
          <OptionsCard></OptionsCard>
        </div>
        <div className="w-full  lg:hidden mx-2 overflow-x-visible">
          <Tabs tabs={tabs} tabsClass={tabsClass} contentClass={contentClass}></Tabs>
          {/* <OptionsCard></OptionsCard> */}
        </div>
        
      </div>
    );
  }
}

export default ProductsDetail;