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
  openNav(featureType){
    this.props.getWidgets(featureType);
    this.setState({showNav:true})
  }
  closeNav(){
    this.setState({showNav:false})
  }
  allowDrop(ev) {
    ev.preventDefault();
  }
  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var nodeCopy = document.getElementById(data).cloneNode(true);
    nodeCopy.id = "newId"; /* We cannot use the same ID */
    ev.target.appendChild(nodeCopy);
  }  
  render() {
    console.log(this.props)
    return (
      <div className="container-fluid ">

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
        <div className="features-list d-flex">
          <ul>
            <li className="p-3" onClick={()=>this.openNav("templates")}><i className="fa fa-address-book d-block"></i>Templates</li>
            <li className="p-3" onClick={()=>this.openNav("photos")}><i className="fa fa-picture-o d-block"></i>Photos</li>
            <li className="p-3" onClick={()=>this.openNav("elements")}><i className="fa fa-delicious d-block"></i>Elements</li>
            <li className="p-3" onClick={()=>this.openNav("text")}><i className="fa fa-text-width d-block"></i>Text</li>
            <li className="p-3" onClick={()=>this.openNav("videos")}><i className="fa fa-video-camera d-block"></i>Videos</li>
            <li className="p-3" onClick={()=>this.openNav("background")}><i className="fa fa-building d-block"></i>Background</li>
            <li className="p-3" onClick={()=>this.openNav("more")}><i className="fa fa-ellipsis-h d-block"></i>more</li>
          </ul>
          <div id="div1" draggable="true" onDragStart={(event)=>this.drag(event)} onDrop={(event)=>this.drop(event)} onDragOver={(event)=>this.allowDrop(event)}></div>
        </div>
        {/* FEATURE SECTION END */}
        {/* SIDENAV SECTION START */}
        <div id="mySidenav" className={this.state.showNav ? "sidenav sidenav-width":"sidenav"}>
          <a href="#" className="closebtn" onClick={()=>this.closeNav()}>&times;</a>
          {this.props.receivedWidgets && this.props.receivedWidgets.data.length > 0 && this.props.receivedWidgets.data.map(widget=>
            <div className="widget-category">
            <p>{widget.widgetName}</p>
            <ul className="widget-list">
              {widget.widgetImgs && widget.widgetImgs.map((img,i)=>
              <li className="pl-0"><img src={img} id={widget.widgetName+i} draggable="true" onDragStart={(event)=>this.drag(event)}/></li>
              )}
            </ul>
          </div>
          ) }
          
        </div>
        {/* SIDENAV SECTION END */}

      </div>
    );
  }
}

export default IndexPage;
