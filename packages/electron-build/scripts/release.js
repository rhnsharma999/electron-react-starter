const { task, series } = require("gulp")
const path = require("path")
const packager = require("electron-packager")
const versionConfig = require("../package.json")

const monoRoot = path.resolve(__dirname, "..", "..")
const projectRoot = path.resolve(monoRoot, "..")

const RELEASE = "release"
const RELEASE_MAC = "release:mac"

task(RELEASE_MAC, async (callback) => {
  const outputDirectory = path.resolve(projectRoot, "dist")
  const outputPaths = await packager({
    dir: outputDirectory,
    out: outputDirectory,
    electronVersion: versionConfig.devDependencies.electron,
  })
  console.log(outputPaths)
  callback()
})

task(RELEASE, series(RELEASE_MAC))
