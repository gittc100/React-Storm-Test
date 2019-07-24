import * as React from "react";
import {PortWidget} from "@projectstorm/react-diagrams";

export class JSCustomNodeWidget extends React.Component {

	constructor(props) {
		console.log('props');
		console.log(props);
		super(props);
		this.ESCAPE_KEY = 27;
		this.ENTER_KEY = 13;
		this.state = {
		  editText: "",
			editing: false,
			};
	  }

	  componentDidMount(){
		  this.setState({
			  ...this.state,
			  editText: this.props.node.name,
		  });
	  }
	
	  handleEdit (e) {
		return (e) => this.setState({
		  editing: !this.state.editing
		});
	  }  
	  
	  handleChange (e) {
		this.setState({editText: e.target.value});
	  }
	  
	  handleSubmit (e) {
		var val = this.state.editText;
		if (val) {
			this.setState({
			  editText: val,
				// editing: 'hidden'
				editing: !this.state.editing
			});
		} 
		this.props.node.name = this.state.editText;
		//  this.props.diagramEngine.repaintCanvas()
		 console.log("this", this.props.node);
		}
	  
	  handleKeyDown (event) {
		if (event.which === this.ENTER_KEY) {
			this.handleSubmit(event);
		}
	}

	render() {
		return (
			<div className="custom-node">
				<div className="custom-node-title">
					<div className="line-in">
						<PortWidget node={this.props.node} name="in" />
					</div>
					<h1 
						className={this.state.editing ? 'hidden' : ''} onDoubleClick={this.handleEdit()}>{this.state.editText}</h1>
					<input 
					placeholder="Enter something..."
					className={this.state.editing ? '' : 'hidden'} 
					value={this.state.editText} 
					onChange={this.handleChange.bind(this)} 
					// onBlur={this.handleSubmit.bind(this)}
					onKeyDown={this.handleKeyDown.bind(this)}
					/>
					
        </div>
				
				<div className="custom-node-screen">
					{this.props.node.description}
				</div>
        
				<div className="custom-node-submenus">
				<h2>01. Menu Option 01</h2>
				<div className="line-out">
					<PortWidget node={this.props.node} name="out" />
				</div>
        </div>

				<div className="custom-node-addMenuOption">
					<h2>Add menu option...</h2>
					<img 
					onClick={()=>{
						{/* addSubMenu(); */}
						return;
					}} 
					src="https://image.flaticon.com/icons/svg/32/32339.svg" 
					alt="plus sign" 
					/>
				</div>

      </div>
		);
	}
}
