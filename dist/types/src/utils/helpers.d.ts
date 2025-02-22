import { voidFun } from '../common';
export declare function getLocationHref(): string;
declare type TotalEventName = keyof GlobalEventHandlersEventMap | keyof XMLHttpRequestEventTargetEventMap | keyof WindowEventMap;
export declare function on(target: {
    addEventListener: Function;
}, eventName: TotalEventName, handler: Function, opitons?: boolean | unknown): void;
export declare function replaceOld(source: {
    [key: string]: any;
}, name: string, replacement: (...args: any[]) => any): void;
export declare function splitObjToQuery(obj: Record<string, unknown>): string;
export declare function getFunctionName(fn: unknown): string;
export declare const debounce: (fn: voidFun, delay: number, isImmediate?: boolean) => voidFun;
export declare const throttle: (fn: Function, delay: number) => Function;
export declare function getTimestamp(): number;
export declare function typeofAny(target: any, type: string): boolean;
export declare function toStringAny(target: any, type: string): boolean;
export declare function validateOption(target: any, targetName: string, expectType: string): boolean;
export declare function toStringValidateOption(target: any, targetName: string, expectType: string): boolean;
export declare function slientConsoleScope(callback: any): void;
export declare function generateUUID(): string;
export declare function unknownToString(target: unknown): unknown;
export {};
