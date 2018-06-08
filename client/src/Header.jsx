import React from 'react';

const Header = props => (
  <div className="header">
  	<div>
  	  <div className = "top">
  	    <div className = "company_name">{props.dressInfo.company_name}</div>
  	    <button className = "heart_button">
  	      <div className = "heart"></div>
  	    </button>
  	  </div>
  	  <div className = "dress_name">{props.dressInfo.name}</div>
  	</div>
  	<div className = "retail_price">${props.dressInfo.retail_price} retail</div>
  	<div className = "average_review">{props.dressInfo.average_review_rating}</div>
  	<div className = "total_reviews">{props.dressInfo.total_reviews}</div>
  </div>
);
export default Header;