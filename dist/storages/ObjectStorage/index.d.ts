import { StorageInterface } from '../../interfaces';
/**
 * @ignore
 */
export declare type JsObjEntry = any;
/**
 * @ignore
 */
export interface JsObj {
    [key: string]: JsObjEntry;
}
/**
 * @ignore
 */
declare class ObjectStorage implements StorageInterface {
    jsObj: JsObj;
    get(key: string): JsObjEntry;
    set(key: string, value: any): void;
    getMultiple(keys?: string[]): JsObj | Partial<JsObj>;
    setMultiple(params: {
        [key: string]: any;
    }): void;
    delete(key: string): void;
}
declare const _default: ObjectStorage;
export default _default;
