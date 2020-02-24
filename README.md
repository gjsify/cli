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
* [CommonJS compatibility](#commonjs-compatibility)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @gjsify/cli
$ gjsify COMMAND
running command...
$ gjsify (-v|--version|version)
@gjsify/cli/0.0.1 linux-x64 node-v12.14.1
$ gjsify --help [COMMAND]
USAGE
  $ gjsify COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`gjsify build [FILE]`](#gjsify-build-file)
* [`gjsify help [COMMAND]`](#gjsify-help-command)

## `gjsify build [FILE]`

describe the command here

```
USAGE
  $ gjsify build [FILE]

OPTIONS
  -b, --beautify                       Beautify build output
  -h, --help                           show CLI help
  -m, --minimize                       Minimize build output
  -o, --outputFilename=outputFilename  [default: index.js] File name of the output bundle
  -p, --outputPath=outputPath          [default: ./dist] Output destination path

EXAMPLE
  $ gjsify build ./src/hello.ts
```

_See code: [src/commands/build.ts](https://github.com/gjsify/cli/blob/v0.0.1/src/commands/build.ts)_

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

# CommonJS compatibility

Many [npm](https://www.npmjs.com/) modules that don't do IO will just work after being browserified. Others take more work.

When you require() any of these modules, you will get a gjs-specific shim:
