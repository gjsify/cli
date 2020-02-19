@gjsify/cli
===========

Command line tool for gjsify

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@gjsify/cli.svg)](https://npmjs.org/package/@gjsify/cli)
[![Downloads/week](https://img.shields.io/npm/dw/@gjsify/cli.svg)](https://npmjs.org/package/@gjsify/cli)
[![License](https://img.shields.io/npm/l/@gjsify/cli.svg)](https://github.com/gjsify/cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @gjsify/cli
$ gjsify COMMAND
running command...
$ gjsify (-v|--version|version)
@gjsify/cli/0.0.0 linux-x64 node-v12.14.1
$ gjsify --help [COMMAND]
USAGE
  $ gjsify COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`gjsify hello [FILE]`](#gjsify-hello-file)
* [`gjsify help [COMMAND]`](#gjsify-help-command)

## `gjsify hello [FILE]`

describe the command here

```
USAGE
  $ gjsify hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ gjsify hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/gjsify/cli/blob/v0.0.0/src/commands/hello.ts)_

## `gjsify help [COMMAND]`

display help for gjsify

```
USAGE
  $ gjsify help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_
<!-- commandsstop -->
