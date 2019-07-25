import * as React from "react";
import { PortWidget } from "@projectstorm/react-diagrams";

import NodeScreen from "./JSCustomNode_Screen";

export class JSCustomNodeWidget extends React.Component {
  constructor(props) {
    super(props);
    this.ESCAPE_KEY = 27;
    this.ENTER_KEY = 13;
    this.state = {
      description: "",
      nodeTitle: "",
      subMenuTitle: "",
      editing: false,
      editingDesc: false,
      editingSub: false,
      portsObj: {}
    };
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      nodeTitle: this.props.node.name,
			description: this.props.node.description,
			subMenuTitle: this.props.node.subMenuTitle
    });
  }

  handleEdit(name) {
    if (name === "description") {
      this.setState({
        editingDesc: !this.state.editingDesc
      });
    } else if (name === "nodeTitle") {
      this.setState({
        editing: !this.state.editing
      });
    } else if (name === "subMenuTitle") {
      this.setState({
        editingSub: !this.state.editingSub
      });
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(event) {
    var val = this.state[event.target.name];
    if (val) {
      if (event.target.name === "description") {
        this.setState({
          ...this.state,
          [event.target.name]: val,
          editingDesc: !this.state.editingDesc
        });
      } else if (event.target.name === "nodeTitle") {
        this.setState({
          ...this.state,
          [event.target.name]: val,
          editing: !this.state.editing
        });
      } else if (event.target.name === "subMenuTitle") {
        this.setState({
          ...this.state,
          [event.target.name]: val,
          editingSub: !this.state.editingSub
        });
      }
    }
		this.props.node.name = this.state[event.target.name];
  }

  handleKeyDown(event) {
    if (event.which === this.ENTER_KEY) {
      this.handleSubmit(event);
    }
  }

  addSubMenu = () => {
    this.props.node.addOutPort("Edit Menu Option..");
    this.forceUpdate();
  };

  subMenuGenerator = () => {
		let obj = this.props.node.ports;
		let menus = [];
    for (let key in obj) {
      if (obj[key].in === false) {
        obj[key].editingSub = false;
        let mod = key + "a";
        console.log("mod", mod);
        this.setState({
          [key]: false,
          [mod]: mod
        });
        console.log(obj[key]);
        console.log(key);
        menus.push(
          <div className="custom-node-submenus">
            <h2
              className={this.state.editingSub ? "hidden" : ""}
              onDoubleClick={() => this.handleEdit("subMenuTitle")}>
              {obj[key].label}
            </h2>
            <input
              name="subMenuTitle"
              placeholder="Enter something..."
              className={this.state.editingSub ? "" : "hidden"}
              value={this.state.subMenuTitle}
              onChange={this.handleChange.bind(this)}
              onKeyDown={this.handleKeyDown.bind(this)}
            />

            <div className="line-out">
              <PortWidget node={this.props.node} name={obj[key].name} />
            </div>
          </div>
        );
			}
    }
    return menus;
  };

  render() {
    return (
      <div className="custom-node">
        <div className="custom-node-nodeTitle">
          <div className="line-in">
            <PortWidget node={this.props.node} name="in" />
          </div>
          <h1
            className={this.state.editing ? "hidden" : ""}
            onDoubleClick={() => this.handleEdit("nodeTitle")}
          >
            {this.state.nodeTitle}
          </h1>
          <input
            name="nodeTitle"
            placeholder="Enter something..."
            className={this.state.editing ? "" : "hidden"}
            value={this.state.nodeTitle}
            onChange={this.handleChange.bind(this)}
            // onBlur={this.handleSubmit.bind(this)}
            onKeyDown={this.handleKeyDown.bind(this)}
          />
        </div>

        <NodeScreen />

        <div>{this.subMenuGenerator()}</div>
        <div className="custom-node-addMenuOption">
          <h2>Add menu option...</h2>
          <img
            className="button-add-port"
            onClick={() => {
              // console.log("clicked");
              this.addSubMenu();
            }}
            src="https://image.flaticon.com/icons/svg/32/32339.svg"
            alt="plus sign"
          />
        </div>
      </div>
    );
  }
}
