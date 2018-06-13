import React from 'react';
import ModalSizeAndFit from './ModalSizeAndFit.jsx';

class FormInput extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modalIsVisible: false
    };
    this.openCalendarModal = this.openCalendarModal.bind(this);
    this.closeCalendarModal = this.closeCalendarModal.bind(this);
  }
  openCalendarModal () {
    this.setState({
      modalIsVisible: true
    });
  }
  closeCalendarModal () {
    this.setState({
      modalIsVisible: false
    });
  }

  render () {
    return (
      <div className="formInput">
        <h4 className="waysToRent invisible">Chose a Way to Rent</h4>
        <div className="forms">
          <label className="formName">Zip Code</label>
          <input className="zipCode" maxLength="5" />
        </div>
        <div>
          <div className="forms">
            <label className="formName">Size</label>
            <select className="dressSizes">
              <option>Select</option>
            </select>
          </div>
          <div className="forms">
            <label className="formName">Free Backup Size</label>
            <select className="dressSizes">
              <option>Select</option>
            </select>
          </div>
        </div>
        <div className="formButtonSizeAndFit">
          <button className="buttonSizeAndFit" onClick={this.openCalendarModal}>Size & Fit</button>
        </div>
        <ModalSizeAndFit dressInfo={this.props.dressInfo} isVisible={this.state.modalIsVisible} closeCalendarModal={this.closeCalendarModal} />
        <legend className="formName">Delivery + Return Dates</legend>
        <div className="rentalDays">
          <div>
            <input type="radio" id="fourDays" className="inputRadio" />
            <label className="formName">4-Day Rental</label>
          </div>
          <div>
            <input type="radio" id="eightDays" className="inputRadio" />
            <label className="formName">8-Day Rental</label>
          </div>
          <input type="text" className="calendarInputs" readOnly />
        </div>
        <span className="promo">25% off your first order with code WELCOME</span>
        <button className="checkout">Add to Bag</button>
      </div>
    );
  }
}
export default FormInput;
