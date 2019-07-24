"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
// add
const react_diagrams_1 = require("@projectstorm/react-diagrams");
/**
 * @author Dylan Vorster
 */
class DefaultNodeModel extends react_diagrams_1.NodeModel {
    constructor(name = "Untitled", color = "rgb(0,192,255)") {
        super("default");
        this.name = name;
        this.color = color;
    }
    addInPort(label) {
        return this.addPort(new react_diagrams_1.DefaultPortModel(true, react_diagrams_1.Toolkit.UID(), label));
    }
    addOutPort(label) {
        return this.addPort(new react_diagrams_1.DefaultPortModel(false, react_diagrams_1.Toolkit.UID(), label));
    }
    deSerialize(object, engine) {
        super.deSerialize(object, engine);
        this.name = object.name;
        this.color = object.color;
    }
    serialize() {
        return _.merge(super.serialize(), {
            name: this.name,
            color: this.color
        });
    }
    getInPorts() {
        return _.filter(this.ports, portModel => {
            return portModel.in;
        });
    }
    getOutPorts() {
        return _.filter(this.ports, portModel => {
            return !portModel.in;
        });
    }
}
exports.DefaultNodeModel = DefaultNodeModel;
//# sourceMappingURL=DefaultNodeModel.js.map