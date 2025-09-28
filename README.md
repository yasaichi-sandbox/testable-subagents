# [WIP] [PoC] testable-subagents

## Preview Prompts

### In VSCode

See: <https://microsoft.github.io/poml/latest/vscode/features/#side-preview>

### In CLI

```sh
./bin/poml.ts -f ./src/agents/impl-multiply-function/prompt.poml | jq -r .messages
```

> [!NOTE]
> You are required to install [jq](https://github.com/jqlang/jq) in advance.

## Building Prompts

```sh
npm run build
```

## Testing Prompts

```sh
npm run test
```

> [!NOTE]
> You are required to install [claude code](https://docs.claude.com/en/docs/claude-code/overview) in advance.
