webpack.config.js

module.exports = {
plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.MY_ENV': JSON.stringify(process.env.MY_ENV),
      'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL),
      ... and ,so ,on, ...,
    })
],
}