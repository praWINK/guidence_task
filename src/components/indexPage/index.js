import React, { Component } from 'react';
import lineChart from '../../resources/images/line-chart.jpg';
import '../../resources/css/App.css';
import '../../resources/css/common.css';
class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showNav: false
    }
  }
  componentDidMount(){
    this.props.getWidgetOptions();
   
  }
  openNav(featureType) {
    this.props.getWidgets(featureType);
    this.setState({ showNav: true })
  }
  closeNav() {
    this.setState({ showNav: false })
  }
  allowDrop(ev) {
    ev.preventDefault();
  }
  drag(event,fromDrag) {
    var style = window.getComputedStyle(event.target, null);
    event.dataTransfer.setData("text", event.target.id);
    this.setState({ leftValue: parseInt(style.getPropertyValue("left"),10) - event.clientX, topValue: parseInt(style.getPropertyValue("top"),10) - event.clientY,cutElement:fromDrag })
    console.log(event,"parent node vlaue ot test")
  }
  drop(event) {
   
    var data = event.dataTransfer.getData("text");
    var dm = document.getElementById(data);
    dm.style.left = (event.clientX + parseInt(this.state.leftValue-70,10)) + 'px';
    dm.style.top = (event.clientY + parseInt(this.state.topValue-50,10)) + 'px';
    event.preventDefault();
    console.log( this.state.cutElement,"parent node vlaue ot test")
    var nodeCopy =dm.parentNode.id === "div1" ? dm : dm.cloneNode(true);
    nodeCopy.id = data;
    event.target.appendChild(nodeCopy);

  }
  render() {
    return (
      <div className="container-fluid p-0">

        {/* HEADER SECTION START */}
        <div className="base-header py-2">
          <div className="d-flex justify-content-between">
            <ul className="float-right mb-0 f-13 p-0">
              <li><i className="fa fa-angle-left p-1" aria-hidden="true"></i>Home</li>
              <li>File</li>
              <li><i className="fa fa-trophy p-1"></i>Resize</li>
              <li className="saved-changes"><i>All changes saved</i></li>
            </ul>
            <ul className="float-right mb-0 f-13">
              <li>Untitled Design - A4</li>
              <li>Try Canva Pro</li>
              <li>Share</li>
              <li><i className="fa fa-download"></i></li>
            </ul>
          </div>
        </div>
        {/* HEADER SECTION END */}

        {/* FEATURE SECTION START */}
        {/* <div className="d-flex page-bg"> */}
          
            <div className="features-list d-flex">
              <ul>
                {this.props.widgetOptions && this.props.widgetOptions.data.length > 0 && this.props.widgetOptions.data.map((widgetType,i)=>
                <li className="p-3" onClick={() => this.openNav(widgetType.title)}><i className={widgetType.icon}></i>{widgetType.title}</li>
                ) }
              </ul>
              <div id="div1" className="page-region" draggable="true" onDragStart={(event) => this.drag(event,true)} onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}>
                     
          </div>
            </div>
          
          {/* FEATURE SECTION END */}
          
          {/* SIDENAV SECTION START */}
          <div id="mySidenav" className={this.state.showNav ? "sidenav sidenav-width" : "sidenav"}>
            <a href="#" className="closebtn" onClick={() => this.closeNav()}>&times;</a>
            {this.props.receivedWidgets && this.props.receivedWidgets.data.length > 0 && this.props.receivedWidgets.data.map(widget =>
              <div className="widget-category" key={widget.widgetName}>
                <p>{widget.widgetName}</p>
                <ul>
                  {widget.widgetImgs && widget.widgetImgs.map((img, i) =>
                    <li className="pl-0" id={widget.widgetName}><img src={img} id={widget.widgetName + i} draggable="true" onDragStart={(event) => this.drag(event,false)} /></li>
                  )}
                </ul>
              </div>
            )}

          </div>
          {/* SIDENAV SECTION END */}
          
        {/* </div> */}
        
      </div>
    );
  }
}

export default IndexPage;
