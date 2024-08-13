import type { State } from '../types';

export type SchemaElem = { value: string, state: State, error: string };
export type ValidationElem = { fn: (value: string) => boolean, preventInput?:boolean, error: string };
export type FormSchema = Record<string, SchemaElem>;
export type FormValidationSchema = Record<string, ValidationElem[]>;
