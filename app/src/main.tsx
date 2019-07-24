import * as React from "react";
import * as ReactDOM from "react-dom";
import "./main.css";
import createEngine, {
	DefaultLinkModel,
    DiagramModel,
    DiagramEngine
} from "@projectstorm/react-diagrams";
import { JSCustomNodeFactory } from "./custom-node-js/JSCustomNodeFactory";
// import { TSCustomNodeFactory } from "./custom-node-ts/TSCustomNodeFactory";
import { JSCustomNodeModel } from "./custom-node-js/JSCustomNodeModel";
// import {TSCustomNodeModel} from "./custom-node-ts/TSCustomNodeModel";
import { BodyWidget } from "./BodyWidget";

export default () => {
	// create an instance of the engine
    // const engine = createEngine();

    //1) setup the diagram engine
    var engine = new DiagramEngine();
    engine.installDefaultFactories();

	// register the two engines
	engine.registerNodeFactory(new JSCustomNodeFactory());
	// engine.registerNodeFactory(new TSCustomNodeFactory());

	// create a diagram model
	const model = new DiagramModel();

	//####################################################
	// now create two nodes of each type, and connect them

	const node1 = new JSCustomNodeModel();
	node1.setPosition(200, 400);

	const node2 = new JSCustomNodeModel();
	node2.setPosition(1300, 760);

	const node3 = new JSCustomNodeModel();
	node2.setPosition(1300, 1260);

	// 3-C) link the 2 nodes together
	const link1 = new DefaultLinkModel();
	link1.setSourcePort(node1.getPort("out"));
	link1.setTargetPort(node2.getPort("in"));

	// 4) add the models to the root graph
	model.addAll(node1, node2, node3, link1);
	
	// install the model into the engine
	engine.setDiagramModel(model);
	
	//####################################################
	// ------------- SERIALIZING ------------------
	// let str = JSON.stringify(model.serializeDiagram());
	// console.log(str);

	// // !------------- DESERIALIZING ----------------
	// let cerealBox = new DiagramModel();
	// cerealBox.deSerializeDiagram(JSON.parse(str), engine);
	// engine.setDiagramModel(cerealBox);
	// cerealBox.serializeDiagram();

	// Shrug
	// ReactDOM.render(<BodyWidget engine={engine}/>, document.querySelector("#application"));
	// document.addEventListener('DOMContentLoaded', () => {
	// 	ReactDOM.render(<BodyWidget engine={engine}/>, document.querySelector("#application"));
	// });

	return (
		<div className="main-diagram-container">
			<button
				// onClick={() => {
				// 	cerealBox.serializeDiagram()
				// }}
			>
				Serialize Graph
			</button>
            <div className="bodywidget-container">
            <BodyWidget engine={engine}/>
            </div>
		</div>
	);
};
