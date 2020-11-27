# css-variables Intellisense via vscode settings

## Features

1. Auto-complete `var()`.
1. Auto-complete CSS variables from that are set in user or workspace vscode settings. Triggered by `-`

## Config

CSS Variables are populated from the the user's configs.

```json
  "css-variables": {
    "variables": {
      "color-": ["blue", "green", "red"],
      "shadow-": ["xs", "md", "lg"],
    }
  },
```

This will create variables

```json
    [
        "--color-blue",
        "--color-green",
        "--color-red",
        "--shadow-xs",
        "--shadow-md",
        "--shadow-lg",
    ]
```

## Changelog

[CHANGELOG.md](https://github.com/mscolnick/css-variables/blob/master/CHANGELOG.md)
