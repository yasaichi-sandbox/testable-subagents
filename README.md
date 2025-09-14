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

## Testing Prompts

See: <https://microsoft.github.io/poml/latest/vscode/features/#testing-prompts>

## Building Prompts

### To File

```sh
./bin/poml.ts -f ./src/prompts/hello-world.poml -o ./hello-world.json
```

### To STDOUT

```sh
./bin/poml.ts -f ./src/prompts/hello-world.poml
```
