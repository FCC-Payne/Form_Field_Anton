import React from 'react';

class ProductDetails extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			stylistNotesDetails: 'details invisible',
			sizeAndFitDetails: 'details invisible',
			productDetails: 'details invisible',
			shareDetails: 'details invisible'
		};
		this.changeStylistNotes = this.changeStylistNotes.bind(this);
		this.changeSizeAndFit = this.changeSizeAndFit.bind(this);
		this.changeProduct = this.changeProduct.bind(this);
		this.changeShare = this.changeShare.bind(this);

	}
	changeStylistNotes(){
		if(this.state.stylistNotesDetails === 'details'){
			this.setState({
				stylistNotesDetails: 'details invisible'
			});
		} else {
			this.setState({
				stylistNotesDetails: 'details'
			});
		}
	}
	changeSizeAndFit(){
		if(this.state.sizeAndFitDetails === 'details'){
			this.setState({
				sizeAndFitDetails: 'details invisible'
			});
		} else {
			this.setState({
				sizeAndFitDetails: 'details'
			});
		}
	}

	changeProduct(){
		if(this.state.productDetails === 'details'){
			this.setState({
				productDetails: 'details invisible'
			});
		} else {
			this.setState({
				productDetails: 'details'
			});
		}
	}
	changeShare(){
		if(this.state.shareDetails === 'details'){
			this.setState({
				shareDetails: 'details invisible'
			});
		} else {
			this.setState({
				shareDetails: 'details'
			});
		}
	}
  
	render() {
		return (
		  <div>
		  	<div className="collapsible_menu">
		  	  <button className="top_summary_label" onClick={this.changeStylistNotes}>
		  	    <span className="summary_label">Stylist Notes</span>
		  	    <div className="plus"></div>
		  	  </button>
		  	  <p className= {this.state.stylistNotesDetails}>{this.props.dressInfo.stylist_notes}</p>
		  	</div>

		  	<div className="collapsible_menu">
		  	  <button className="top_summary_label" onClick={this.changeSizeAndFit}>
		  	    <span className="summary_label">Size & Fit</span>
		  	    <div className="plus"></div> 
		  	  </button>
		  	  <p className= {this.state.sizeAndFitDetails}>{this.props.dressInfo.size_and_fit}</p>
		  	</div>
		  	<div className="collapsible_menu">
		  	  <button className="top_summary_label" onClick={this.changeProduct}>
		  	    <span className="summary_label">Product Details</span>
		  	    <div className="plus"></div>
		  	  </button>
		  	  <p className= {this.state.productDetails}>{this.props.dressInfo.product_details}</p>
		  	</div>
		  	<div className="collapsible_menu">
		  	  <button className="top_summary_label" onClick={this.changeShare}>
		  	    <span className="summary_label">Share</span>
		  	    <div className="plus"></div>
		  	  </button>
		  	  <p className= {this.state.shareDetails}>Facebook likes: {this.props.dressInfo.facebook_likes}, Share, Pin It</p>
		  	</div>
		  </div>
		);
	}
}
export default ProductDetails
