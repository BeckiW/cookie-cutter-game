import React from "react"
import "./style.css"

class Cookie extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
        cookies: 0,
      }
    }

    componentDidMount() {

    }

    getButtonPressCount = () => {
      this.setState({
        cookies: this.state.cookies + 1,
      })
    }

  render() {
    return (
      <div>
       <button onclick={this.getButtonPressCount}> Yo! </button>
      </div>
    )
  }
}
export default Cookie
