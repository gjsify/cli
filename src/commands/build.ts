import {Command, flags} from '@oclif/command'
import {BuildAction} from '../actions/build'
import {BuildOptions} from '../types'
import {flags as defaultFlags} from '../defaults'

export default class Build extends Command {
  static description = 'describe the command here'

  static examples = [
    '$ gjsify build ./src/hello.ts',
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    outputFilename: flags.string({
      char: 'o',
      description: 'File name of the output bundle',
      required: false,
      multiple: false,
      default: defaultFlags.outputFilename,
    }),
    outputPath: flags.string({
      char: 'p',
      description: 'Output destination path',
      required: false,
      multiple: false,
      default: defaultFlags.outputPath,
    }),
    beautify: flags.boolean({
      char: 'b',
      description: 'Beautify build output',
      required: false,
      default: defaultFlags.beautify,
    }),
    minimize: flags.boolean({
      char: 'm',
      description: 'Minimize build output',
      required: false,
      default: defaultFlags.minimize,
    }),
  }

  static args = [{name: 'file'}]

  async run() {
    const {argv, flags} = this.parse(Build)

    const buildOptions: BuildOptions = {
      output: {},
    }

    buildOptions.entry = argv
    buildOptions.output.filename = flags.outputFilename
    buildOptions.output.path = flags.outputPath
    buildOptions.beautify = flags.beautify

    const action = new BuildAction(buildOptions)

    action.build()
    .then(stats => {
      this.log(stats.toString())
    })
    .catch(error => {
      this.error(error)
    })
  }
}
