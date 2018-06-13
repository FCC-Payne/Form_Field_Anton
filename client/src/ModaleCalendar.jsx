import React from 'react';

class ModalCalendar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      topClass: 'modalContainer invisible'
    };
    this.close = this.close.bind(this);
  }
  componentDidUpdate (prevProps) {
    if (this.props.isVisible !== prevProps.isVisible) {
      if (this.props.isVisible === true) {
        this.setState({
          topClass: 'modalContainer'
        });
      } else {
        this.setState({
          topClass: 'modalContainer invisible'
        });
      }
    }
  }
  close(){
    this.setState({
      topClass: 'modalContainer invisible'
    });
  }
  render() {
  	return(
      <div className={this.state.topClass}>
        <div className="modalContent">
          <button className="closeButtonSizeAndFit" onClick={this.close} />
          <div className="calendarTitle">Pick a delivery date 1–2 days before your event</div>
        </div>
      </div>
  	);
  }

}
export default ModalCalendar;
