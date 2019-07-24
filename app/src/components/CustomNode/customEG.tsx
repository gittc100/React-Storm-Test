import * as React from "react";
// import { DefaultNodeModel } from './DefaultNodeModel';

import { 
  DefaultNodeModel,
  DiagramEngine, 
  DiagramModel, 
  DiagramWidget 
} from "@projectstorm/react-diagrams";
import "../test.scss";
require("storm-react-diagrams/src/sass/main.scss");

export default () => {
    //1) setup the diagram engine
    var engine2 = new DiagramEngine();
    engine2.installDefaultFactories();

    //2) setup the diagram model
    var model2 = new DiagramModel();

    //3-A) create a default node
    var node1a = new DefaultNodeModel("Node 1", "rgb(0,192,255)");
    var port1a = node1a.addOutPort("Out");
    node1a.setPosition(100, 100);

    //3-B) create another default node
    var node2a = new DefaultNodeModel("Node 2", "rgb(192,255,0)");
    var port2a = node2a.addInPort("In");
    node2a.setPosition(400, 100);

    //3-C) link the 2 nodes together
    var link1a = port1a.link(port2a);

    //3-D) create an orphaned node
    var node3a = new DefaultNodeModel("Node 3", "rgb(0,192,255)");
    node3a.addOutPort("Out");
    node3a.setPosition(100, 200);

    //4) add the models to the root graph
    model2.addAll(node1a, node2a, node3a, link1a);

    //5) load model into engine
    engine2.setDiagramModel(model2);

    //6) render the diagram!
    return <DiagramWidget className="srd-demo-canvas" diagramEngine={engine2} allowLooseLinks={false} />;
};