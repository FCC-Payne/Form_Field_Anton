import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


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
  		console.log(this.state.dressInfo.image_url);
  	});
  }
  componentDidMount(){
  	this.getDressInfo(11);
  }
  render(){
    return(<div>Hi!!
    	<img width="200" src= {this.state.dressInfo.image_url} />
    	</div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));