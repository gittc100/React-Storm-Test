/// <reference types="react" />
import { DefaultNodeModel } from "./DefaultNodeModel";
import { DiagramEngine, AbstractNodeFactory } from "@projectstorm/react-diagrams";
/**
 * @author Dylan Vorster
 */
export declare class DefaultNodeFactory extends AbstractNodeFactory<DefaultNodeModel> {
    constructor();
    generateReactWidget(diagramEngine: DiagramEngine, node: DefaultNodeModel): JSX.Element;
    getNewInstance(initialConfig?: any): DefaultNodeModel;
}
