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
			description: "",
			title: "",
			editing: false,
			editingDesc: false,
			};
	  }

	  componentDidMount(){
		  this.setState({
			  ...this.state,
				title: this.props.node.name,
				description: this.props.node.description,
		  });
	  }
	
	  handleEdit (name) {
			if (name === "description") {
				this.setState({
					editingDesc: !this.state.editingDesc
				});
			} else if (name === "title") {
				this.setState({
					editing: !this.state.editing
				});
			}	
	  }  
	  
	  handleChange (e) {
			this.setState({
				// editText: e.target.value,
				[e.target.name]: e.target.value
			});
	  }
	  
	  handleSubmit (event) {
		var val = this.state[event.target.name];
		if (val) {
			if (event.target.name === "description") {
				this.setState({
					...this.state,
					[event.target.name]: val,
					editingDesc: !this.state.editingDesc
				});
			} else if (event.target.name === "title") {
				this.setState({
					...this.state,
					[event.target.name]: val,
					editing: !this.state.editing
				});
			}	
			
		} 
		this.props.node.name = this.state[event.target.name];
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
						className={this.state.editing ? 'hidden' : ''} onDoubleClick={()=>this.handleEdit("title")}>{this.state.title}
					</h1>
					<input
					name="title" 
					placeholder="Enter something..."
					className={this.state.editing ? '' : 'hidden'} 
					value={this.state.title} 
					onChange={this.handleChange.bind(this)} 
					// onBlur={this.handleSubmit.bind(this)}
					onKeyDown={this.handleKeyDown.bind(this)}
					/>
					
        </div>
				
				<div className="custom-node-screen">
					<p 
						className={this.state.editingDesc ? 'hidden' : ''} onDoubleClick={()=>this.handleEdit("description")}>{this.state.description}
					</p>
					<textarea
					name="description" 
					placeholder="Enter something..."
					className={this.state.editingDesc ? '' : 'hidden'} 
					value={this.state.description} 
					onChange={this.handleChange.bind(this)} 
					// onBlur={this.handleSubmit.bind(this)}
					onKeyDown={this.handleKeyDown.bind(this)}
					/>
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
