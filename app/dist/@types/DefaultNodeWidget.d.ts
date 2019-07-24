/// <reference types="react" />
import { DefaultNodeModel } from "./DefaultNodeModel";
import { DiagramEngine, BaseWidget, BaseWidgetProps } from "@projectstorm/react-diagrams";
export interface DefaultNodeProps extends BaseWidgetProps {
    node: DefaultNodeModel;
    diagramEngine: DiagramEngine;
}
export interface DefaultNodeState {
}
/**
 * @author Dylan Vorster
 */
export declare class DefaultNodeWidget extends BaseWidget<DefaultNodeProps, DefaultNodeState> {
    constructor(props: DefaultNodeProps);
    generatePort(port: any): JSX.Element;
    render(): JSX.Element;
}
