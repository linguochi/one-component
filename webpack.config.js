const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'production',
  entry: {
    AsyncComponent: path.resolve('./src/main.js'),
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'AsyncComponent',
    libraryTarget: 'umd',
  },

  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve('./src'),
    },
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
    },
    axios: 'axios',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve('./src')],
        exclude: /node_modules/,
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    // 请确保引入这个插件来施展魔法
    new VueLoaderPlugin(),
  ],
};
