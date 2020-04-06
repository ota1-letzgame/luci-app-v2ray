declare class UCI {
  add(config: string, type: string, name: string): string;
  sections(config: string, type: string, cb: Function): any[];
}

declare const L: any;
declare const custom: any;
declare const form: any;
declare const fs: any;
declare const uci: UCI;
declare const view: any;

declare function _(s: string): string;
