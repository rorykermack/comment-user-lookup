/* Libs */
const webpack = require('webpack');
const path = require('path');
const ip = require('ip');
/* --- Libs */

/* Plugins */
const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/* --- Plugins */

/* Env Settings */
const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';
const isPublic = !!process.env.PUBLIC;
const logInfo = true;
const portNumber = 3000;
/* --- Env Settings */

/* Paths */
const jsSourcePath = path.join(__dirname, './src');
const buildPath = path.join(__dirname, './dist');
const sourcePath = path.join(__dirname, './src');
/* --- Paths */

/* Define Plugins */
const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(nodeEnv)
    }
  }),
  new webpack.NamedModulesPlugin(),
  new HtmlWebpackPlugin({
    template: path.join(sourcePath, 'index.html'),
    path: buildPath,
    filename: 'index.html'
  }),
  new webpack.NormalModuleReplacementPlugin(/(.*).NODE_ENV(\.*)/, function(resource) {
    resource.request = resource.request.replace(/.NODE_ENV/, `\.${nodeEnv}`);
  })
];

if (logInfo) {
  plugins.push(new webpack.DefinePlugin({
    'buildDetails': {
      DATE: JSON.stringify(new Date().toString())
    }
  }));
}
/* --- Define Plugins */

/* Define Rules */
const rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [
      'babel-loader'
    ]
  },
  {
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
    options: {
      configFile: path.resolve(__dirname, "tsconfig.json")
    }
  },
  {
    test: /\.(png|gif|jpg|svg|ico)$/,
    use: 'file-loader?name=assets/[name]-[hash].[ext]'
  },
  {
    test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
    loader: 'file-loader?name=fonts/[name].[ext]'
  }
];
/* --- Define Rules */

// Production Specific Pluings/Rules
if (isProd) {
  // .. define prod rules
}

// Dev Specific Pluings/Rules
if (!isProd) {
  // Plugins
  plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin()
  );
  // Rules
  rules.push(
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [
        'style-loader',
        'css-loader',
        'resolve-url-loader',
        'sass-loader?sourceMap'
      ]
    }
  );
}

module.exports = {
  devtool: isProd ? 'eval' : 'source-map',
  context: jsSourcePath,
  entry: {
    js: './main.js',
    vendor: [
      'babel-polyfill',
      'es6-promise',
      'immutable',
      'isomorphic-fetch',
      'react-dom',
      'react-router',
      'react-redux',
      'react',
      'redux'
    ]
  },
  output: {
    path: buildPath,
    publicPath: '/',
    filename: 'app-[hash].js'
  },
  mode: 'development',
  module: {
    rules: rules
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx', '.ts', '.tsx'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      jsSourcePath
    ]
  },
  plugins,
  devServer: {
    headers: {
      'testheader': 'test'
    },
    contentBase: isProd ? './build' : './source',
    historyApiFallback: true,
    port: portNumber,
    compress: isProd,
    inline: !isProd,
    hot: !isProd,
    host: '0.0.0.0',
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m'
      }
    },
    proxy: {
      '/api': {
        target: 'http://localhost:9000',
        secure: false,
        pathRewrite: {
          '^/api' : ''
        }
      }
    }
  }
};

if (isPublic) {
  module.exports.devServer.public = ip.address();
}
 