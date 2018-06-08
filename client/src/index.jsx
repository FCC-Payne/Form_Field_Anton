import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Header from './Header.jsx';
import ProductDetails from './ProductDetails';


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    	dressInfo: {},
    	dressSizes: {},
    };
    this.getDressInfo = this.getDressInfo.bind(this);
  }
  getDressInfo(dressId){
  	$.ajax({
  		url: 'http://localhost:3003/' + dressId,
  		contentType: "application/json",

  	}).done((data) => {
  		data = JSON.parse(data);
  		this.setState({
  			dressInfo: data.dressInfo,
  			dressSizes: data.sizes
  		});
  	});
  }
  componentDidMount(){
  	this.getDressInfo(19);
  }
  render(){
    return(
      <div>
        <Header dressInfo = {this.state.dressInfo}/>
        <ProductDetails dressInfo = {this.state.dressInfo}/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));