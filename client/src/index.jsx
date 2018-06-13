import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Header from './Header.jsx';
import ProductDetails from './ProductDetails.jsx';
import FormInput from './FormInput.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      dressInfo: {},
      dressSizes: {}
    };

    this.getDressInfo = this.getDressInfo.bind(this);
  }

  componentDidMount () {
    const path = document.location.pathname.slice(1, 3);
    this.getDressInfo(path);
  }
  getDressInfo (dressId) {
    $.ajax({
      url: `http://localhost:3003/info/${dressId}`,
      contentType: 'application/json'

    }).done((data) => {
      const newData = JSON.parse(data);
      this.setState({
        dressInfo: newData.dressInfo,
        dressSizes: newData.sizes
      });
    });
  }
  render () {
    return (
      <div className="moduleSize">
        <Header dressInfo={this.state.dressInfo} />
        <FormInput dressInfo={this.state.dressInfo} dressSizes={this.state.dressSizes} />
        <ProductDetails dressInfo={this.state.dressInfo} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
