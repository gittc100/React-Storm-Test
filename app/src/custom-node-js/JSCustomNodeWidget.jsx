import * as React from "react";
import { PortWidget } from "@projectstorm/react-diagrams";

import NodeScreen from "./JSCustomNode_Screen";
import TrashCan from "./icons/trash.png";
export class JSCustomNodeWidget extends React.Component {
  constructor(props) {
    super(props);
    this.ESCAPE_KEY = 27;
    this.ENTER_KEY = 13;
    this.state = {
      description: "",
      nodeTitle: "",
      editing: false,
      editingDesc: false,
    };
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      nodeTitle: this.props.node.name,
			description: this.props.node.description
    });
  }

  handleEdit = (name) => {
    if (name === "description") {
      this.setState({
        ...this.state,
        editingDesc: !this.state.editingDesc
      });
    } else if (name === "nodeTitle") {
      this.setState({
        ...this.state,
        editing: !this.state.editing
      });
    } else {
      let mod = name;
      let id = mod.slice(0,-1);
      console.log('hanf=dleedit');
      console.log('id', id);
      console.log('mod', mod);
      this.setState({
        ...this.state,
        [id]: !this.state[id]
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (event) => {
    var val = this.state[event.target.name];
    if (val) {
      if (event.target.name === "description") {
        this.setState({
          ...this.state,
          [event.target.name]: val,
          editingDesc: !this.state.editingDesc
        });
        this.props.node.description = this.state[event.target.name];
      } else if (event.target.name === "nodeTitle") {
        this.setState({
          ...this.state,
          [event.target.name]: val,
          editing: !this.state.editing
        });
        this.props.node.name = this.state[event.target.name];
      } else {
        let mod = event.target.name;
        let id = mod.slice(0,-1);
        console.log('handle submit');
        console.log('id', id);
        console.log('mod', mod);
        this.setState({
          ...this.state,
          [event.target.name]: val,
          [id]: !this.state[id]
        });
        let obj = this.props.node.ports;
        for (let key in obj) {
          if (obj[key].id === id) {
            obj[key].label = this.state[event.target.name];
          }
        }
      }
    }
  }

  handleKeyDown = (event) => {
    if (event.which === this.ENTER_KEY) {
      this.handleSubmit(event);
    }
  }

  addSubMenu = () => {
    this.props.node.addOutPort("Edit Menu Option..");
    this.forceUpdate();
  };

  deletePort = (port) =>{
    this.props.node.removePort(port);
    this.forceUpdate();
  }

  subMenuGenerator = () => {
		let obj = this.props.node.ports;
		let menus = [];
    for (let key in obj) {
      if (obj[key].in === false) {
				// obj[key].editingSub = false;
				let id = obj[key].id;
				let mod = id + "a";
				console.log('# # # # # # # # # LOOP START # # # # # # # # # ');
				console.log('obj', obj);
				console.log('key', id);
        console.log('mod', mod);
        if(this.state[id] === undefined){
          this.setState({
            ...this.state,
            [id]: false,
            [mod]: obj[key].label
          });
        }
        menus.push(
          <div key={key} className="custom-node-submenus">
            <h2
              className={this.state[id] ? "hidden" : ""}
              onDoubleClick={()=>this.handleEdit(mod)}>
              {this.state[mod]}
            </h2>
            <input
              name={mod}
              placeholder="Enter something..."
              className={this.state[id] ? "" : "hidden"}
              value={this.state[mod]}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
            />
            <div onClick={()=>this.deletePort(obj[key])}>
              <img src={TrashCan} alt="trash icon"/>
            </div>
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
            onChange={this.handleChange}
            // onBlur={this.handleSubmit.bind(this)}
            onKeyDown={this.handleKeyDown}
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
