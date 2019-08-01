import {
  DefaultPortModel,
  NodeModel,
  Toolkit
} from "@projectstorm/react-diagrams";

export class JSCustomNodeModel extends NodeModel {
  constructor(options = {}) {
    super({
      ...options,
      type: "js-custom-node"
    });

    this.color = options.color || { options: "red" };
    this.name = options.name;
    this.description = options.description;

    this.addPort(
      new DefaultPortModel({
        in: true,
        name: "in"
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
    return this.addPort(
      new DefaultPortModel({
        in: false,
        name: Toolkit.UID(),
        label: label
      })
    );
  }
}
