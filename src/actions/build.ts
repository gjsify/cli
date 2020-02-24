import {promisify} from 'util'
import webpack from 'webpack'
import {webpackConfigDefault as config, minimizerConfigDefault as minimizConfig} from '../webpack.config.default'
import TerserPlugin from 'terser-webpack-plugin'
import {BuildOptions} from '../types'
import {resolve} from 'path'

export class BuildAction {
  compiler:  webpack.Compiler

  constructor(options: BuildOptions) {
    config.entry = options.entry || config.entry
    config.output.filename = options.output.filename || config.output.filename
    config.output.path = options.output.path ? resolve(__dirname, options.output.path) : config.output.path
    minimizConfig.terserOptions.output.beautify = typeof options.beautify === 'boolean' ? options.beautify : minimizConfig.terserOptions.output.beautify

    config.optimization.minimizer.push(new TerserPlugin(minimizConfig))

    this.compiler = webpack(config)
  }

  public build() {
    return promisify(this.compiler.run.bind(this.compiler))()
  }

  public watch(watchOptions: webpack.ICompiler.WatchOptions = {}) {
    return promisify(this.compiler.watch.bind(this.compiler, watchOptions))()
  }
}
