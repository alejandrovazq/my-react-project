import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Slider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        sliders: [
          {src: '/src/ph900x400.jpg', className: 'relative items-center w-full slider-item-active'},
          {src: '/src/ph900x400-2.jpg', className: 'relative items-center w-full slider-item'},
          {src: '/src/ph900x400-3.jpg', className: 'relative items-center w-full slider-item'}
        ],
        active: 0,
    }
  }

  handleClick() {
    const sliders = this.state.sliders.slice();
    let active = 0;
    this.state.active === sliders.length - 1 ? active = 0 : active = this.state.active + 1;

    sliders.forEach((item, index) => { 
      if(active === index){
        item.className = 'relative items-center w-full slider-item-active'
      }else{
        item.className = 'relative items-center w-full slider-item';
      }
    })

    this.setState({
      sliders: sliders,
      active: active
    })
  }

  renderItem(items) {
    const listItems = items.map((item, index) =>
      <div key={index} className={item.className}>
        <img src={item.src} alt="brands-1-2" className="block w-full" onClick={() => this.handleClick(index)}></img> 
      </div>
    );
    return listItems; 
  }
  render() {
    return (
      <div className="carousel slide">
        <div className="relative w-full overflow-hidden ">
          {this.renderItem(this.state.sliders)}
        </div>
      </div>
    );
  }
}

export default Slider;

// relative items-center w-full slider-item