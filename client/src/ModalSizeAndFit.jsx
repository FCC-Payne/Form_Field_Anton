import React from 'react';
import style from './styles.css';

class ModalSizeAndFit extends React.Component {
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
    this.props.closeSizeAndFitModal();
  }
  render () {
    return (
      <div className={this.state.topClass}>
        <div className={style.modalContent}>
          <button className={style.closeButtonSizeAndFit} onClick={this.close} />
          <div className={style.modalWrapper}>
            <h3 className={style.modalTitleSizeAndFit}>Size and Fit Notes</h3>
            <p>{this.props.dressInfo.size_and_fit}</p>
            <h3 className={style.modalTitleSizeAndFit}>Size Chart</h3>
            <img src="https://cdn.rtrcdn.com/sites/default/files/imgs/size_fit/missy_2x.png" width="533" />
            <h3 className={style.modalTitleSizeAndFit}>Plus Size Size Chart</h3>
            <img src="https://cdn.rtrcdn.com/sites/default/files/imgs/size_fit/plus.png" width="663" />
          </div>
        </div>
      </div>
    );
  }
}
export default ModalSizeAndFit;
