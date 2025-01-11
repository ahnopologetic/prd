prd
=================

Create a product requirement document 


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/prd.svg)](https://npmjs.org/package/prd)
[![Downloads/week](https://img.shields.io/npm/dw/prd.svg)](https://npmjs.org/package/prd)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @ahnopologetic/prd
$ prd COMMAND
running command...
$ prd (--version)
@ahnopologetic/prd/1.0.0 darwin-arm64 node-v22.9.0
$ prd --help [COMMAND]
USAGE
  $ prd COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`prd help [COMMAND]`](#prd-help-command)
* [`prd init [PATH]`](#prd-init-path)
* [`prd plugins`](#prd-plugins)
* [`prd plugins add PLUGIN`](#prd-plugins-add-plugin)
* [`prd plugins:inspect PLUGIN...`](#prd-pluginsinspect-plugin)
* [`prd plugins install PLUGIN`](#prd-plugins-install-plugin)
* [`prd plugins link PATH`](#prd-plugins-link-path)
* [`prd plugins remove [PLUGIN]`](#prd-plugins-remove-plugin)
* [`prd plugins reset`](#prd-plugins-reset)
* [`prd plugins uninstall [PLUGIN]`](#prd-plugins-uninstall-plugin)
* [`prd plugins unlink [PLUGIN]`](#prd-plugins-unlink-plugin)
* [`prd plugins update`](#prd-plugins-update)

## `prd help [COMMAND]`

Display help for prd.

```
USAGE
  $ prd help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for prd.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.21/src/commands/help.ts)_

## `prd init [PATH]`

Initialize a PRD template interactively

```
USAGE
  $ prd init [PATH]

ARGUMENTS
  PATH  [default: ./docs/base.md] Path to save the PRD file

DESCRIPTION
  Initialize a PRD template interactively
```

_See code: [src/commands/init.ts](https://github.com/ahnopologetic/prd/blob/v1.0.0/src/commands/init.ts)_

## `prd plugins`

List installed plugins.

```
USAGE
  $ prd plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ prd plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.24/src/commands/plugins/index.ts)_

## `prd plugins add PLUGIN`

Installs a plugin into prd.

```
USAGE
  $ prd plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into prd.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the PRD_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the PRD_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ prd plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ prd plugins add myplugin

  Install a plugin from a github url.

    $ prd plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ prd plugins add someuser/someplugin
```

## `prd plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ prd plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ prd plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.24/src/commands/plugins/inspect.ts)_

## `prd plugins install PLUGIN`

Installs a plugin into prd.

```
USAGE
  $ prd plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into prd.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the PRD_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the PRD_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ prd plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ prd plugins install myplugin

  Install a plugin from a github url.

    $ prd plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ prd plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.24/src/commands/plugins/install.ts)_

## `prd plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ prd plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ prd plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.24/src/commands/plugins/link.ts)_

## `prd plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ prd plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ prd plugins unlink
  $ prd plugins remove

EXAMPLES
  $ prd plugins remove myplugin
```

## `prd plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ prd plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.24/src/commands/plugins/reset.ts)_

## `prd plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ prd plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ prd plugins unlink
  $ prd plugins remove

EXAMPLES
  $ prd plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.24/src/commands/plugins/uninstall.ts)_

## `prd plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ prd plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ prd plugins unlink
  $ prd plugins remove

EXAMPLES
  $ prd plugins unlink myplugin
```

## `prd plugins update`

Update installed plugins.

```
USAGE
  $ prd plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.24/src/commands/plugins/update.ts)_
<!-- commandsstop -->
