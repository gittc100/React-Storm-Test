import { DefaultPortModel, NodeModel } from '@projectstorm/react-diagrams';

/**
 * Example of a custom model using pure javascript
 */
export class JSCustomNodeModel extends NodeModel {
	constructor(options = {}) {
		super({
			...options,
			type: 'js-custom-node'
		});
		this.color = options.color || { options: 'red' };

		// setup an in and out port
		this.addPort(
			new DefaultPortModel({
				in: true,
				name: 'in'
			})
		);
		this.addPort(
			new DefaultPortModel({
				in: false,
				name: 'out'
			})
		);
	}

	serialize() {
		return {
			...super.serialize(),
			color: this.options.color
		};
	}

	deSerialize(ob, engine) {
		super.deSerialize(ob, engine);
		this.color = ob.color;
	}
}






// import {DefaultPortModel, NodeModel, Toolkit} from "@projectstorm/react-diagrams";
// import * as _ from "lodash";
// /**
//  * Example of a custom model using pure javascript
//  */
// export class JSCustomNodeModel extends NodeModel {

// 	constructor(options = {}) {
// 		super({
// 			...options,
// 			type: 'js-custom-node'
// 		});
// 		// this.color = options.color || {options: 'red'};
// 		// we made this
// 		this.color = options.color || { options: 'red' };
// 		this.name = options.name;
// 		this.description = options.description;
// 		// ------------

// 		// setup an in and out port
// 		this.addPort(
// 			new DefaultPortModel({
// 				in: true,
// 				name: 'in'
// 			})
// 		);
// 	}

	
// 	serialize() {
// 		return _.merge(super.serialize(), {
// 			name: this.name,
// 			description: this.description
// 		});
// 	}
	
// 	deSerialize(object, engine) {
// 		super.deSerialize(object, engine);
// 		this.name = object.name;
// 		this.description = object.description;
// 	}

// 	// serialize() {
// 	// 	return {
// 	// 		...super.serialize(),
// 	// 		color: this.options.color
// 	// 	};
// 	// }

// 	// deSerialize(ob, engine) {
// 	// 	super.deSerialize(ob, engine);
// 	// 	this.color = ob.color;
// 	// }
	
// 	// nameNode(name){
// 	// 	this.name = name;
// 	// }

// 	// provideDescription(description){
// 	// 	this.description = description;
// 	// }

// 	// addOutPort(label) {
// 	// 	return this.addPort(new DefaultPortModel(false, Toolkit.UID(), label));
// 	// }
	
// 	// removePortAndLinks(port) {
// 	// 	//clear the parent node reference
// 	// 	if (this.ports[port.name]) {
// 	// 		_.forEach(port.getLinks(), link => {
// 	// 			link.remove();
// 	// 		});
// 	// 		this.ports[port.name].setParent(null);
// 	// 		delete this.ports[port.name];
// 	// 	}
// 	// }
// }
