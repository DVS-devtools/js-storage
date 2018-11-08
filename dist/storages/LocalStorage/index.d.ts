import { StorageInterface } from '../../interfaces';
/**
 * @ignore
 */
declare class LocalStorage implements StorageInterface {
    get(key: string): any;
    set(key: string, value: any): void;
    getMultiple(keys?: string[]): {
        [key: string]: any;
    };
    setMultiple(params: {
        [key: string]: any;
    }): void;
    delete(key: string): void;
}
declare const _default: LocalStorage;
export default _default;
