import React from 'react';
import style from './styles.css';

class Header extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      heart: style.emptyHeart
    };
    this.changeHeart = this.changeHeart.bind(this);
    this.determineStars = this.determineStars.bind(this);
  }
  changeHeart () {
    if (this.state.heart === style.emptyHeart) {
      this.setState({
        heart: style.fullHeart
      });
    } else {
      this.setState({
        heart: style.emptyHeart
      });
    }
  }

  determineStars (number) {
    // const result = 'starRating stars';
    // const stars = Math.floor((number - 0.25) * 2) + 1;
    // return result + stars;
    if (number < 0.75) {
      return `${style.starRating} ${style.stars1}`;
    } else if (number < 1.25) {
      return `${style.starRating} ${style.stars2}`;
    } else if (number < 1.75) {
      return `${style.starRating} ${style.stars3}`;
    } else if (number < 2.25) {
      return `${style.starRating} ${style.stars4}`;
    } else if (number < 2.75) {
      return `${style.starRating} ${style.stars5}`;
    } else if (number < 3.25) {
      return `${style.starRating} ${style.stars6}`;
    } else if (number < 3.75) {
      return `${style.starRating} ${style.stars7}`;
    } else if (number < 4.25) {
      return `${style.starRating} ${style.stars8}`;
    } else if (number < 4.75) {
      return `${style.starRating} ${style.stars9}`;
    }
    return `${style.starRating} ${style.stars10}`;
  }

  render () {
    const stars = this.determineStars(this.props.dressInfo.average_review_rating);

    return (
      <div className={style.header}>
        <div>
          <div className={style.top}>
            <div className={style.company_name}>{this.props.dressInfo.company_name}</div>
            <button className={style.heart_button} onClick={this.changeHeart}>
              <div className={this.state.heart} />
            </button>
          </div>
          <h2 className={style.dress_name}>{this.props.dressInfo.name}</h2>
        </div>
        <div className={style.retail_price}>${this.props.dressInfo.retail_price} retail</div>
        <div className={style.reviews}>
          <div className={stars} />
          <div className={style.total_reviews}>({this.props.dressInfo.total_reviews})</div>
        </div>
      </div>
    );
  }
}
export default Header;
