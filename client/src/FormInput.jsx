import React from 'react';
import ModalSizeAndFit from './ModalSizeAndFit.jsx';
import ModaleCalendar from './ModaleCalendar.jsx';
import style from './styles.css';

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
    if (this.props.dressSizes.length > 0) {
      return this.props.dressSizes.map((size) => {
        if (size.quantity === 0) {
          return (<option>{size.size} (Unavailable)</option>);
        }
        return (<option>{size.size}</option>);
      });
    }
    return null;
  }
  render () {
    const sizeList = this.createList();
    return (
      <div className={style.formInput}>
        <h4 className={`${style.waysToRent} ${style.invisible}`}>Chose a Way to Rent</h4>
        <div className={style.forms}>
          <label className={style.formName}>Zip Code</label>
          <input className={style.zipCode} maxLength="5" />
        </div>
        <div>
          <div className={style.forms}>
            <label className={style.formName}>Size</label>
            <select className={style.dressSizes}>
              <option>Select</option>
              {sizeList}
            </select>
          </div>
          <div className={style.forms}>
            <label className={style.formName}>Free Backup Size</label>
            <select className={style.dressSizes}>
              <option>Select</option>
              {sizeList}
            </select>
          </div>
        </div>
        <div className={style.formButtonSizeAndFit}>
          <button className={style.buttonSizeAndFit} onClick={this.openSizeAndFitModal}>Size & Fit</button>
        </div>
        <ModalSizeAndFit dressInfo={this.props.dressInfo} isVisible={this.state.modalSizeAndFitIsVisible} closeSizeAndFitModal={this.closeSizeAndFitModal} />
        <legend className={style.formName}>Delivery + Return Dates</legend>
        <div className={style.rentalDays}>
          <div>
            <input type="radio" id="fourDays" className={style.inputRadio} />
            <label className={style.formName}>4-Day Rental</label>
          </div>
          <div>
            <input type="radio" id="eightDays" className={style.inputRadio} />
            <label className={style.formName}>8-Day Rental</label>
          </div>
          <input type="text" className={style.calendarInputs} readOnly onClick={this.openCalendarModal} />
          <ModaleCalendar isVisible={this.state.modaleCalendarIsVisible} closeCalendarModal={this.closeCalendarModal} />
        </div>
        <span className={style.promo}>25% off your first order with code WELCOME</span>
        <button className={style.checkout}>Add to Bag</button>
      </div>
    );
  }
}
export default FormInput;
