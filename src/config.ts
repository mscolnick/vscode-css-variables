import * as vscode from "vscode";
import { CSSVariableConfig } from "./types";

export interface ExtensionConfig {
  variableConfig: CSSVariableConfig;
}

export function loadConfig(): ExtensionConfig {
  const config = vscode.workspace.getConfiguration("css-variables");
  const variableConfig = config.get<CSSVariableConfig>("variables", {});

  return {
    variableConfig: variableConfig,
  };
}
