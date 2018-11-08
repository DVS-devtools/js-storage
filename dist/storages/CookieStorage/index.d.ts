import { CookieIterator } from './CookieIterator';
import { StorageInterface, CookieOptions } from '../../interfaces';
/**
 * @ignore
 */
declare class Cookiestorage implements StorageInterface {
    newCookieIterator(): CookieIterator;
    get(key: string): any;
    set(key: string, value: any, options?: CookieOptions): void;
    getMultiple(keys?: string[]): any;
    setMultiple(params: {
        [key: string]: any;
    }, options?: CookieOptions): void;
    delete(key: string, options?: CookieOptions): void;
}
declare const _default: Cookiestorage;
export default _default;
