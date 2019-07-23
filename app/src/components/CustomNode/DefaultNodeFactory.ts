
import * as React from "react";
import { DefaultNodeWidget } from "./DefaultNodeWidget";
import { DefaultNodeModel } from "./DefaultNodeModel";

import {
	DiagramEngine,
	AbstractNodeFactory
} from "@projectstorm/react-diagrams";
/**
 * @author Dylan Vorster
 */
export class DefaultNodeFactory extends AbstractNodeFactory<DefaultNodeModel> {
	constructor() {
		super("default");
	}

	generateReactWidget(diagramEngine: DiagramEngine, node: DefaultNodeModel): JSX.Element {
		return React.createElement(DefaultNodeWidget, {
			node: node,
			diagramEngine: diagramEngine
		});
	}

	getNewInstance(initialConfig?: any): DefaultNodeModel {
		return new DefaultNodeModel();
	}
}
