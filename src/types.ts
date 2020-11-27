export interface CSSVariableConfigObject {
  [key: string]: CSSVariableConfigObject | string[];
}

export type CSSVariableConfig = CSSVariableConfigObject | string[];
