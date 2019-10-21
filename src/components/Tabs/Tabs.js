import React from 'react';

class Tabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        tabs: this.props.tabs,
        tabClass : this.props.tabsClass ? this.props.tabsClass : {active: 'tab tab-active', inactive: 'tab'},
        contentClass : this.props.contentClass ? this.props.contentClass : {active: 'tab-content tab-content-active', inactive: 'tab-content'},
    }
  }

  handleClick(i) {
    const tabs = this.state.tabs.slice();

    tabs.forEach((item, index) => {
      if(index === i){
        item.contentClassName = this.state.contentClass.active 
        item.className = this.state.tabClass.active 
      }else{
        item.contentClassName = this.state.contentClass.inactive 
        item.className = this.state.tabClass.inactive
      }
    })

    this.setState({
      tabs: tabs
    })
  }

  renderTab(items) {
    const listItems = items.map((item, index) =>
      <li key={index} className={item.className}>
        <div 
          className="px-auto w-full py-2 text-center"
          onClick={() => this.handleClick(index)}
        >
          {item.text}
        </div>
      </li>
    );
    return listItems; 
  }

  rederContent(items) {
    const listItems = items.map((item, index) =>
      <div key={index} className={item.contentClassName}>
        {item.content}
      </div>
    );
    return listItems; 
  }

    render() {
      return (
        <div>
          <div className="flex flex-row">
            <div className="flex flex-grow lg:px-3 py-2 w-full">
              <ul className="tabs-list">
                {this.renderTab(this.state.tabs)}
              </ul>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-grow lg:px-3 py-2 w-full min-h-full">
              <div className="flex-col w-full ">
                {this.rederContent(this.state.tabs)}
              </div>
            </div>
          </div>
        </div>
        
      );
    }
  }
  
  export default Tabs;