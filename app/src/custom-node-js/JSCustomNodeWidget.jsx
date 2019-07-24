import * as React from "react";
import {PortWidget} from "@projectstorm/react-diagrams";

export class JSCustomNodeWidget extends React.Component {

	// Logic for node manipulation goes here. 

	render() {
		return (
			<div className="custom-node">
        
				<div className="custom-node-title">
					<div className="line-in">
						<PortWidget node={this.props.node} name="in" />
					</div>
					<h1>Enter Node Title...</h1>
        </div>
				
				<div className="custom-node-screen">
					Enter Screen Text...
				</div>
        
				<div className="custom-node-submenus">
						<h2>01. Menu Option 01</h2>
						<div className="line-out">
							<PortWidget node={this.props.node} name="out" />
						</div>
        </div>

				<div className="custom-node-addMenuOption">
					<h2>Add menu option...</h2>
					<img src="https://image.flaticon.com/icons/svg/32/32339.svg" alt="plus sign" />
				</div>

      </div>
		);
	}
}
