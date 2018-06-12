import React from 'react';

class Header extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      heart: 'emptyHeart'
    };
    this.changeHeart = this.changeHeart.bind(this);
    this.determineStars = this.determineStars.bind(this);
  }
  changeHeart () {
    if (this.state.heart === 'emptyHeart') {
      this.setState({
        heart: 'fullHeart'
      });
    } else {
      this.setState({
        heart: 'emptyHeart'
      });
    }
  }

  determineStars (number) {
    const result = 'starRating stars';
    const stars = Math.floor((number - 0.25) * 2) + 1;
    return result + stars;
  }
  render () {
    const stars = this.determineStars(this.props.dressInfo.average_review_rating);
    return (
      <div className="header">
        <div>
          <div className="top">
            <div className="company_name">{this.props.dressInfo.company_name}</div>
            <button className="heart_button" onClick={this.changeHeart}>
              <div className={this.state.heart} />
            </button>
          </div>
          <h2 className="dress_name">{this.props.dressInfo.name}</h2>
        </div>
        <div className="retail_price">${this.props.dressInfo.retail_price} retail</div>
        <div className="reviews">
          <div className={stars} />
          <div className="total_reviews">({this.props.dressInfo.total_reviews})</div>
        </div>
      </div>
    );
  }
}
export default Header;
