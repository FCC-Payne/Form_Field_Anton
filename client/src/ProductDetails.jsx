import React from 'react';
import style from './styles.css';

class ProductDetails extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      stylistNotesDetails: `${style.details} ${style.invisible}`,
      sizeAndFitDetails: `${style.details} ${style.invisible}`,
      productDetails: `${style.details} ${style.invisible}`,
      shareDetails: `${style.details} ${style.invisible}`
    };
    this.changeStylistNotes = this.changeStylistNotes.bind(this);
    this.changeSizeAndFit = this.changeSizeAndFit.bind(this);
    this.changeProduct = this.changeProduct.bind(this);
    this.changeShare = this.changeShare.bind(this);
  }
  changeStylistNotes () {
    if (this.state.stylistNotesDetails === style.details) {
      this.setState({
        stylistNotesDetails: `${style.details} ${style.invisible}`
      });
    } else {
      this.setState({
        stylistNotesDetails: style.details
      });
    }
  }
  changeSizeAndFit () {
    if (this.state.sizeAndFitDetails === style.details) {
      this.setState({
        sizeAndFitDetails: `${style.details} ${style.invisible}`
      });
    } else {
      this.setState({
        sizeAndFitDetails: style.details
      });
    }
  }

  changeProduct () {
    if (this.state.productDetails === style.details) {
      this.setState({
        productDetails: `${style.details} ${style.invisible}`
      });
    } else {
      this.setState({
        productDetails: style.details
      });
    }
  }
  changeShare () {
    if (this.state.shareDetails === style.details) {
      this.setState({
        shareDetails: `${style.details} ${style.invisible}`
      });
    } else {
      this.setState({
        shareDetails: style.details
      });
    }
  }

  render () {
    return (
      <div>
        <div className={style.collapsible_menu}>
          <button className={style.top_summary_label} onClick={this.changeStylistNotes}>
            <span className={style.summary_label}>Stylist Notes</span>
            <div className={style.plus} />
          </button>
          <p className={this.state.stylistNotesDetails}>{this.props.dressInfo.stylist_notes}</p>
        </div>

        <div className={style.collapsible_menu}>
          <button className={style.top_summary_label} onClick={this.changeSizeAndFit}>
            <span className={style.summary_label}>Size & Fit</span>
            <div className={style.plus} />
          </button>
          <p className={this.state.sizeAndFitDetails}>{this.props.dressInfo.size_and_fit}</p>
        </div>
        <div className={style.collapsible_menu}>
          <button className={style.top_summary_label} onClick={this.changeProduct}>
            <span className={style.summary_label}>Product Details</span>
            <div className={style.plus} />
          </button>
          <p className={this.state.productDetails}>{this.props.dressInfo.product_details}</p>
        </div>
        <div className={style.collapsible_menu}>
          <button className={style.top_summary_label} onClick={this.changeShare}>
            <span className={style.summary_label}>Share</span>
            <div className={style.plus} />
          </button>
          <p className={this.state.shareDetails}>Facebook likes: {this.props.dressInfo.facebook_likes}, Share, Pin It</p>
        </div>
      </div>
    );
  }
}
export default ProductDetails;
