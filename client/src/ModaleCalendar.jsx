import React from 'react';
import style from './styles.css';

class ModalCalendar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      topClass: `${style.modalContainer} ${style.invisible}`
    };
    this.close = this.close.bind(this);
  }
  componentDidUpdate (prevProps) {
    if (this.props.isVisible !== prevProps.isVisible) {
      if (this.props.isVisible === true) {
        this.setState({
          topClass: style.modalContainer
        });
      } else {
        this.setState({
          topClass: `${style.modalContainer} ${style.invisible}`
        });
      }
    }
  }
  close () {
    this.setState({
      topClass: `${style.modalContainer} ${style.invisible}`
    });
  }
  render () {
  	return (
      <div className={this.state.topClass}>
      <div className={style.modalContent}>
          <button className={style.closeButtonSizeAndFit} onClick={this.close} />
          <div className={style.calendarTitle}>Pick a delivery date 1–2 days before your event</div>
        </div>
    </div>
  	);
  }
}
export default ModalCalendar;
