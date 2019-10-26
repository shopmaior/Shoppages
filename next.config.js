// const withTypescript = require('@zeit/next-typescript')
// module.exports = withTypescript({
//   webpack(config, options) {
//     return config
//   }
// })

module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'src/dist/[path][name].[ext]'
        }
      },
      {
        test: /\.css$/,
        loader: 'babel-loader!raw-loader'
      },
      {
        test: /\.scss$/,
        loader: 'babel-loader!raw-loader!sass-loader'
      }
    )
    return config
  }
}