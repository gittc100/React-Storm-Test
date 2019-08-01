import {
  DefaultPortModel,
  NodeModel,
  Toolkit
} from "@projectstorm/react-diagrams";
import lodash from "lodash";

export class JSCustomNodeModel extends NodeModel {
  constructor(options = {}) {
    super({
      ...options,
      type: "js-custom-node"
    });

    this.color = options.color || { options: "red" };
    this.name = options.name;
    this.description = options.description;

    // setup an in / out port
    this.addPort(
      new DefaultPortModel({
        in: true,
        name: "in"
      })
    );
    this.addPort(
      new DefaultPortModel({
        in: false,
        name: "out",
        label: "Enter menu title..."
      })
    );
  }

  serialize() {
    return {
      ...super.serialize(),
      color: this.options.color,
      name: this.name,
      description: this.description
    };
  }

  deSerialize(ob, engine) {
    super.deSerialize(ob, engine);
    this.color = ob.color;
    this.name = ob.name;
    this.description = ob.description;
  }

  nameNode(name) {
    this.name = name;
  }

  provideDescription(description) {
    this.description = description;
  }

  addOutPort(label) {
    console.log("addOutPort clicked");
    return this.addPort(
      new DefaultPortModel({
        in: false,
        name: Toolkit.UID(),
        label: label
      })
    );
  }

  // removePort(port: PortModel) {
  //   //clear the parent node reference
  //   if (this.ports[port.getName()]) {
  //     this.ports[port.getName()].setParent(null);
  //     delete this.ports[port.getName()];
  //   }
  // }

  // removePortAndLinks(port) {
  //   //clear the parent node reference
  //   if (this.ports[port.name]) {
  //     _.forEach(port.getLinks(), link => {
  //       link.remove();
  //     });
  //     this.ports[port.name].setParent(null);
  //     delete this.ports[port.name];
  //   }
  // }
}
