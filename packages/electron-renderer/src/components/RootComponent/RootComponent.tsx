import * as React from "react"
// type checking seems to be broken for props in vscode, need to fix that.
class RootComponent extends React.Component {
  state = {
    nodeVersion: "",
    chromeVersion: "",
    electronVersion: "",
  }

  componentDidMount() {
    const nodeVersion = process.versions.node
    const chromeVersion = process.versions.chrome
    const electronVersion = process.versions.electron
    this.setState({ nodeVersion, chromeVersion, electronVersion })
  }
  render() {
    const { nodeVersion, chromeVersion, electronVersion } = this.state

    return (
      <div>
        <h3>Node = v${nodeVersion}</h3>
        <h3>Chrome = v${chromeVersion}</h3>
        <h3>Electron = v${electronVersion}</h3>
      </div>
    )
  }
}

export default RootComponent
