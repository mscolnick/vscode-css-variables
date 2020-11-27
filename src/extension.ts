import * as vscode from "vscode";
import { ExtensionContext } from "vscode";
import { loadConfig } from "./config";
import { flattenVariables } from "./flattenVariables";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext): void {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log("css-variables is now active");

  const config = loadConfig();
  const variableNames = flattenVariables(config.variableConfig);
  const variableNameCompletions = variableNames.map(
    (variableName) => new vscode.CompletionItem(variableName, vscode.CompletionItemKind.Constant),
  );

  // provide var()
  const provider1 = vscode.languages.registerCompletionItemProvider("css", {
    provideCompletionItems() {
      const snippetCompletion = new vscode.CompletionItem("var()");
      snippetCompletion.insertText = new vscode.SnippetString("var($1)");
      snippetCompletion.documentation = new vscode.MarkdownString("Press `-` to get `var()`");
      snippetCompletion.commitCharacters = ["-"];

      return [snippetCompletion];
    },
  });

  // provide auto complete after '-'
  const provider2 = vscode.languages.registerCompletionItemProvider(
    "css",
    {
      provideCompletionItems() {
        return variableNameCompletions;
      },
    },
    "-", // triggered whenever a '-' is being typed
  );

  context.subscriptions.push(provider1, provider2);

  // const config = loadConfig();
}

// this method is called when your extension is deactivated
export function deactivate(): void {
  // noop
}
