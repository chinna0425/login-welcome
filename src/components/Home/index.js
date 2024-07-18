import {Component} from 'react'

import Message from '../Message'
import Login from '../Login'
import LogOut from '../Logout'
import './index.css'

class Home extends Component {
  state = {login: false, logout: true}

  logIn = () => {
    this.setState(prevstate => ({
      login: !prevstate.login,
      logout: !prevstate.logout,
    }))
  }

  logOut = () => {
    this.setState(prevstate => ({
      login: !prevstate.login,
      logout: !prevstate.logout,
    }))
  }

  render() {
    const {login, logout} = this.state
    return (
      <div className="background-container">
        {!login && (
          <div className="inner-container">
            <Message name="Please login" />
            <Login logIn={this.logIn} />
          </div>
        )}
        {!logout && (
          <div className="inner-container">
            <Message name="Welcome User" />
            <LogOut logOut={this.logOut} />
          </div>
        )}
      </div>
    )
  }
}
export default Home
