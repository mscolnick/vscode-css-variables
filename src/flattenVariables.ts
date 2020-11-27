import { CSSVariableConfig } from "./types";

export function flattenVariables(config: CSSVariableConfig, prefix = "--"): string[] {
  if (Array.isArray(config)) {
    return config.map((varName) => prefix.concat(varName));
  }

  return Object.entries(config).flatMap(([keyPrefix, value]) => {
    return flattenVariables(value, prefix.concat(keyPrefix));
  });
}
