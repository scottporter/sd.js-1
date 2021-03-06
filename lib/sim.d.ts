/// <reference path="../typings/tsd.d.ts" />
import * as type from './type';
import * as Q from 'q';
export declare class TemplateContext {
    name: string;
    className: string;
    isModule: boolean;
    modules: string;
    init: string;
    initialVals: string;
    simSpecVals: string;
    tableVals: string;
    calcI: string;
    calcF: string;
    calcS: string;
    offsets: string;
    constructor(model: type.Model, mods: any, init: any, initials: any, tables: any, runtimeOffsets: any, ci: any, cf: any, cs: any);
}
export declare class Sim {
    root: type.Module;
    project: type.Project;
    seq: number;
    promised: any;
    idSeq: any;
    worker: Worker;
    constructor(root: type.Module, isStandalone: boolean);
    _process(model: type.Model, modules: type.Module[]): TemplateContext;
    nextID(modelName: string): number;
    _post(...args: any[]): Q.Promise<any>;
    close(): void;
    reset(): any;
    setValue(name: string, val: number): any;
    value(...names: string[]): any;
    series(...names: string[]): any;
    runTo(time: number): any;
    runToEnd(): any;
    setDesiredSeries(names: string[]): any;
    varNames(): Q.Promise<any>;
    csv(delim?: string): any;
}
