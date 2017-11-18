'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

// mock server

const express = require('express')
const fs = require('fs')
const app = express()
const appData = require('../db.json')
const getSecondList = appData.getSecondList
const getThirdList = appData.getThirdList
// const apiRoutes = express.Router()

const apiServer = express()
const bodyParser = require('body-parser')
apiServer.use(bodyParser.urlencoded({ extended: true }))
apiServer.use(bodyParser.json())
const apiRouter = express.Router()
apiRouter.route('/:apiName')
  .all(function (req, res) {
    fs.readFile('./db.json', 'utf8', function (err, data) {
      if (err) throw err
      data = JSON.parse(data)
      if (data[req.params.apiName]) {
        res.json(data[req.params.apiName])
      } else {
        res.send('no such api name')
      }
    })
  })

apiServer.use('/api', apiRouter)
apiServer.listen(8081, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:8081\n')
})

// app.use('/api', apiRoutes)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,
  
  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    host: process.env.HOST || config.dev.host,
    port: process.env.PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay ? {
      warnings: false,
      errors: true,
    } : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    },
    before(express) {
      // app.get('/api/getSecondList', (req, res) => {
      //   res.json({
      //     // 这里是你的json内容
      //     errno: 0,
      //     data: getSecondList
      //   })
      // })

      // app.get('/api/getThirdList', (req, res) => {
      //   res.json({
      //     errno: 0,
      //     data: getThirdList
      //   })
      // })

      // express.Router().all("*", (req, res) => {
      //   console.log(111)
      // })
      // app.all("*", (req, res) => {
      //   fs.readFile('../db.json', 'utf8', function (err, data){
      //     console.log(data)
      //     var data = JSON.parse(data)
      //   })
      // })
     
      // app.listen(8087, function(){
      //   console.log('Listening at http://localhost:8087')
      // })
   }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }), 
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${config.dev.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
