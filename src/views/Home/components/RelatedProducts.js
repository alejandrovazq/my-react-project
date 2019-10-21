import React from 'react';
// import Tabs from '../../components/Tabs/Tabs'

class RelatedProducts extends React.Component {
  render() {
    return (
      <div>
        <div className="flex mb-2 px-2">
          <div className="w-full mx-2 border-r-4 border-gray-500">
            <p className="font-semibold lg:font-medium text-lg lg:text-base text-gray-900">
              Los visitantes que compraron su admisión a Parque Xcaret también compraron:
            </p>
          </div>
        </div>
        <div className="flex mb-4 px-2">
          <div className="w-6/12 lg:w-4/12  bg-gray-500 mx-2">
            <img src='./src/ph600x300.jpg' alt='Otros 1' className="rounded hidden lg:block"/>
            <img src='./src/ph600x800.jpg' alt='Otros 1' className="rounded lg:hidden"/>
          </div>
          <div className="w-6/12 lg:w-4/12 bg-gray-500 mx-2">
            <img src='./src/ph600x300.jpg' alt='Otros 1' className="rounded hidden lg:block"/>
            <img src='./src/ph600x800.jpg' alt='Otros 1' className="rounded lg:hidden"/>
          </div>
          <div className="hidden lg:block lg:w-4/12 bg-gray-500 mx-2">
            <img src='./src/ph600x300.jpg' alt='Otros 1' className="rounded"/>
          </div>
        </div>
    </div>
    );
  }
}

export default RelatedProducts;