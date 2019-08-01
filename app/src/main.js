import * as React from "react";
// import * as ReactDOM from "react-dom";
import "./main.css";
import createEngine, {
  DefaultLinkModel,
  DiagramModel,
  DefaultNodeFactory
} from "@projectstorm/react-diagrams";
import { JSCustomNodeFactory } from "./custom-node-js/JSCustomNodeFactory";
import { JSCustomNodeModel } from "./custom-node-js/JSCustomNodeModel";
import { BodyWidget } from "./BodyWidget";

  // create an instance of the engine
  const engine = createEngine();

  // register the two engines
  engine.getNodeFactories().registerFactory(new JSCustomNodeFactory());
  engine.getNodeFactories().registerFactory(new DefaultNodeFactory());

  // create a diagram model
  const model = new DiagramModel();

  //####################################################
  // now create two nodes of each type, and connect them

  const node1 = new JSCustomNodeModel();
  node1.nameNode("Node 1");
  node1.provideDescription("Description node 2");
  node1.setPosition(400, 50);

  // const node1 = new DefaultNodeModel();
  // // node1.nameNode("Node 1");
  // // node1.provideDescription("Description node 2");
  // node1.setPosition(150, 300);

  // const node2 = new DefaultNodeModel();
  // // node2.nameNode("Node 2");
  // // node2.provideDescription("Description node 2");
  // node2.setPosition(900, 150);


  // 3-C) link the 2 nodes together
  // const link1 = new DefaultLinkModel();
  // link1.setSourcePort(node1.getPort("out"));


  // 4) add the models to the root graph
  model.addAll(node1);

	
  // install the model into the engine
  engine.setDiagramModel(model);
	
  //####################################################
  // ------------- SERIALIZING ------------------
  let str = JSON.stringify(model.serializeDiagram());
	
  // // !------------- DESERIALIZING ----------------
  let cerealBox = new DiagramModel();
  cerealBox.deSerializeDiagram(JSON.parse(str), engine);
  engine.setDiagramModel(cerealBox);
  cerealBox.serializeDiagram();

class CustomExample extends React.Component {

  createNode = () => {
    let newItem = new JSCustomNodeModel();
    newItem.nameNode("Enter Node Name...");
    newItem.provideDescription("Enter Description...");
		newItem.setPosition(0,0);
		cerealBox.addNode(newItem);
		this.forceUpdate();
	}

	render() {
		return (
			<div className="main-diagram-container">
				<button
				onClick={() => {
					console.log(cerealBox.serializeDiagram());
				}}
				>
					Serialize Graph
				</button>
				<button
				onClick={() => {
					this.createNode();
				}}
				>
					Create Node +
				</button>
				<div className="bodywidget-container">
					<BodyWidget engine={engine} />
				</div>
			</div>
		);
	}
}

export default CustomExample;
