"use strict"

// modules
const del = require("del")
const fs = require("fs")
const { task, series, parallel } = require("gulp")
const path = require("path")
const webpack = require("webpack")
const webpackErrorOutput = require("../lib/webpackErrorOutput")

// custom path resolves
const monoRoot = path.resolve(__dirname, "..", "..")
const projectRoot = path.resolve(monoRoot, "..")

// constants for tasks (might move them later)
const BUILD = "build"
const BUILD_FOLDERS = "build:folders"
const BUILD_MAIN = "build:main"
const BUILD_RENDERER = "build:renderer"
const BUILD_CLEAN = "build:clean"

// actual gulp tasks here. There is no logical order. Might clean up later
task(BUILD_RENDERER, (callback) => {
  const config = require(path.resolve(monoRoot, "electron-renderer", "webpack.config.js"))

  webpack(config, (err, stats) => {
    if (err) {
      console.error(err)
      callback()
      return
    }
    const info = stats.toJson()
    webpackErrorOutput(info.errors, info.warnings)
    callback()
  })
})

task(BUILD_MAIN, (callback) => {
  const config = require(path.resolve(monoRoot, "electron-main", "webpack.config.js"))

  webpack(config, (err, stats) => {
    if (err) {
      console.error(err)
      callback()
      return
    }
    const info = stats.toJson()
    webpackErrorOutput(info.errors, info.warnings)
    callback()
  })
})

task(BUILD_FOLDERS, (callback) => {
  const distPath = path.resolve(projectRoot, "dist")
  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath)
  }
  callback()
})

task(BUILD_CLEAN, () => del([`${projectRoot}/dist/**`]))

task(BUILD, series(BUILD_FOLDERS, BUILD_CLEAN, parallel(BUILD_MAIN, BUILD_RENDERER)))
