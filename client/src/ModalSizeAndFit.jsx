import React from 'react';

class ModalSizeAndFit extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			topClass: 'modalContainer invisible'
		};
		this.close = this.close.bind(this);
	}
	componentDidUpdate(prevProps){
		if(this.props.isVisible !== prevProps.isVisible){
			if(this.props.isVisible === true){
				this.setState({
					topClass: 'modalContainer'
				});
			}else{
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
		this.props.closeCalendarModal();
	}
	render(){
		return (
			<div className = {this.state.topClass}>
		      <div className = "modalContent">
		        <button className = "closeButtonSizeAndFit" onClick={this.close}/>
		        <div className = "modalWrapper">
		          <h3 className = "modalTitleSizeAndFit">Size and Fit Notes</h3>
		          <p>{this.props.dressInfo.size_and_fit}</p>
		          <h3 className = "modalTitleSizeAndFit">Size Chart</h3>
		          <img src = "https://cdn.rtrcdn.com/sites/default/files/imgs/size_fit/missy_2x.png" width = "533"/>
		          <h3 className = "modalTitleSizeAndFit">Plus Size Size Chart</h3>
		          <img src = "https://cdn.rtrcdn.com/sites/default/files/imgs/size_fit/plus.png" width = "663"/>
		        </div>
		      </div>
			</div>
		);
	}
}
export default ModalSizeAndFit