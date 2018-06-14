import React from 'react';
import ModalSizeAndFit from './ModalSizeAndFit.jsx';
import ModaleCalendar from './ModaleCalendar.jsx';

class FormInput extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modalSizeAndFitIsVisible: false
    };
    this.openSizeAndFitModal = this.openSizeAndFitModal.bind(this);
    this.closeSizeAndFitModal = this.closeSizeAndFitModal.bind(this);
    this.openCalendarModal = this.openCalendarModal.bind(this);
    this.closeCalendarModal = this.closeCalendarModal.bind(this);
    this.createList = this.createList.bind(this);
  }
  openSizeAndFitModal () {
    this.setState({
      modalSizeAndFitIsVisible: true
    });
  }
  closeSizeAndFitModal () {
    this.setState({
      modalSizeAndFitIsVisible: false
    });
  }
  openCalendarModal () {
    this.setState({
      modaleCalendarIsVisible: true
    });
  }
  closeCalendarModal () {
    this.setState({
      modaleCalendarIsVisible: false
    });
  }

  createList () {
    if (this.props.dressSizes.length > 0){
      return this.props.dressSizes.map((size) => {
        if (size.quantity === 0){
          return (<option>{size.size} (Unavailable)</option>);
        } else {
          return (<option>{size.size}</option>);
        }
      });
    } else {
      return null;
  	}
  }

  render () {
  	const sizeList = this.createList();
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
              {sizeList}
            </select>
          </div>
          <div className="forms">
            <label className="formName">Free Backup Size</label>
            <select className="dressSizes">
              <option>Select</option>
              {sizeList}
            </select>
          </div>
        </div>
        <div className="formButtonSizeAndFit">
          <button className="buttonSizeAndFit" onClick={this.openSizeAndFitModal}>Size & Fit</button>
        </div>
        <ModalSizeAndFit dressInfo={this.props.dressInfo} isVisible={this.state.modalSizeAndFitIsVisible} closeSizeAndFitModal={this.closeSizeAndFitModal} />
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
          <input type="text" className="calendarInputs" readOnly onClick={this.openCalendarModal}/>
          <ModaleCalendar isVisible={this.state.modaleCalendarIsVisible} closeCalendarModal={this.closeCalendarModal} />
        </div>
        <span className="promo">25% off your first order with code WELCOME</span>
        <button className="checkout">Add to Bag</button>
      </div>
    );
  }
}
export default FormInput;
