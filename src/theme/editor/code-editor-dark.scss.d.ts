export type Styles = {
  atrule: string;
  "attr-name": string;
  "attr-value": string;
  "block-comment": string;
  bold: string;
  boolean: string;
  builtin: string;
  cdata: string;
  char: string;
  "class-name": string;
  comment: string;
  constant: string;
  deleted: string;
  doctype: string;
  entity: string;
  function: string;
  "function-name": string;
  important: string;
  inserted: string;
  italic: string;
  keyword: string;
  namespace: string;
  number: string;
  operator: string;
  prolog: string;
  property: string;
  punctuation: string;
  regex: string;
  selector: string;
  string: string;
  symbol: string;
  tag: string;
  token: string;
  url: string;
  variable: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
