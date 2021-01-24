import * as React from "react"
import "./RootComponent.css"
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

    const myNotification = new Notification("Title", {
      body: "Notification from the Renderer process",
    })

    myNotification.onclick = () => {
      console.log("Notification clicked")
    }

    this.setState({ nodeVersion, chromeVersion, electronVersion })
  }
  render() {
    const { nodeVersion, chromeVersion, electronVersion } = this.state

    return (
      <div className="container">
        <h3>Node = v${nodeVersion}</h3>
        <h3>Chrome = v${chromeVersion}</h3>
        <h3>Electron = v${electronVersion}</h3>
      </div>
    )
  }
}

export default RootComponent
