import webpack from 'webpack'
import {flags} from './defaults'
import {resolve} from 'path'

export const webpackConfigDefault = {
  entry: new Array<string>(),
  output: {
    path: resolve(__dirname, flags.outputPath),
    filename: flags.outputFilename,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      console: '@gjsify/console',
      process: '@gjsify/process',
      Buffer: ['buffer', 'Buffer'],
      // TODO
      // __filename - file path of the currently executing file
      // __dirname - directory path of the currently executing file
    }),
  ],
  optimization: {
    minimize: flags.minimize,
    minimizer: new Array<any>(),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      // assert: https://github.com/browserify/commonjs-assert
      // buffer: https://www.npmjs.com/package/buffer
      console: '@gjsify/console',
      constants: 'constants-browserify', // https://github.com/juliangruber/constants-browserify
      crypto: 'crypto-browserify', // https://github.com/crypto-browserify/crypto-browserify
      domain: 'domain-browser',
      // events: https://github.com/Gozala/events
      fs: '@gjsify/fs',
      // TODO http
      // TODO https
      os: '@gjsify/os',
      path: '@gjsify/path',
      process: '@gjsify/process',
      // punycode: https://github.com/bestiejs/punycode.js
      querystring: 'querystring-es3',
      stream: 'stream-browserify',
      // string_decoder: https://github.com/nodejs/string_decoder
      // TODO timers: https://andyholmes.github.io/articles/asynchronous-programming-in-gjs.html https://www.npmjs.com/package/timers-browserify
      tty: 'tty-browserify',
      // url: https://github.com/defunctzombie/node-url
      // util: https://github.com/browserify/node-util
      // TODO vm: https://github.com/browserify/vm-browserify
      zlib: 'browserify-zlib',
    },
  },
}

export const minimizerConfigDefault = {
  sourceMap: false,
  extractComments: true,
  terserOptions: {
    mangle: true,
    output: {
      beautify: flags.beautify,
    },
  },
}
