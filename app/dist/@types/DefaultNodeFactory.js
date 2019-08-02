"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const DefaultNodeWidget_1 = require("./DefaultNodeWidget");
const DefaultNodeModel_1 = require("./DefaultNodeModel");
const react_diagrams_1 = require("@projectstorm/react-diagrams");
/**
 * @author Dylan Vorster
 */
class DefaultNodeFactory extends react_diagrams_1.AbstractNodeFactory {
    constructor() {
        super("default");
    }
    generateReactWidget(diagramEngine, node) {
        return React.createElement(DefaultNodeWidget_1.DefaultNodeWidget, {
            node: node,
            diagramEngine: diagramEngine
        });
    }
    getNewInstance(initialConfig) {
        return new DefaultNodeModel_1.DefaultNodeModel();
    }
}
exports.DefaultNodeFactory = DefaultNodeFactory;
//# sourceMappingURL=DefaultNodeFactory.js.map