import {Component} from 'react'
import {v4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

class Password extends Component {
  state = {
    passwordsList: [],
    website: '',
    user: '',
    password: '',
    input: '',
    isPasswordsVisible: false,
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({user: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  deleteItem = id => {
    this.setState(prevState => ({
      passwordsList: prevState.passwordsList.filter(
        eachItem => eachItem.id !== id,
      ),
    }))
  }

  addItemsToList = event => {
    event.preventDefault()
    const {website, user, password} = this.state

    const newItem = {
      id: v4(),
      website,
      user,
      password,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newItem],
    }))
    this.setState({user: '', website: '', password: ''})
  }

  updateVisiblePassWords = () => {
    this.setState(prevState => ({
      isPasswordsVisible: !prevState.isPasswordsVisible,
    }))
  }

  updateSearchInput = event => {
    this.setState({input: event.target.value})
  }

  render() {
    const {
      passwordsList,
      website,
      user,
      password,
      input,
      isPasswordsVisible,
    } = this.state
    console.log(isPasswordsVisible)
    const newList = passwordsList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(input.toLowerCase()),
    )
    const isEmpty = newList.length === 0
    const count = newList.length

    return (
      <div className="bg">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="logo"
          />
        </div>
        <div className="top-card">
          <div className="form-img-container">
            <form className="form-details" onSubmit={this.addItemsToList}>
              <h1 className="heading">Add New Password</h1>
              <div>
                <div className="input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="icons"
                  />
                  <input
                    value={website}
                    type="text"
                    placeholder="Enter Website"
                    onChange={this.onChangeWebsite}
                  />
                </div>
                <div className="input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="icons"
                  />
                  <input
                    value={user}
                    type="text"
                    placeholder="Enter Username"
                    onChange={this.onChangeUsername}
                  />
                </div>
                <div className="input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="icons"
                  />
                  <input
                    value={password}
                    type="password"
                    placeholder="Enter Password"
                    onChange={this.onChangePassword}
                  />
                </div>
              </div>
              <button className="add-btn" type="submit">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="top-section-img"
            />
          </div>
        </div>
        <div className="bottom-section">
          <div className="heading-searchBar">
            <div className="heading-count">
              <h1 className="heading">Your Passwords</h1>
              <p className="count">{count}</p>
            </div>

            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="icons"
              />
              <input
                type="search"
                placeholder="Search"
                value={input}
                onChange={this.updateSearchInput}
              />
            </div>
          </div>
          <hr className="line" />
          <div className="show-password">
            <input
              type="checkbox"
              id="show"
              onChange={this.updateVisiblePassWords}
            />
            <label className="label-text" htmlFor="show">
              Show Passwords
            </label>
          </div>
          <ul className="passwords-container">
            {isEmpty ? (
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-passwords-img"
                />
                <p className="heading">No Passwords</p>
              </div>
            ) : (
              newList.map(eachItem => (
                <PasswordItem
                  key={eachItem.id}
                  eachItem={eachItem}
                  deleteItem={this.deleteItem}
                  isPasswordsVisible={isPasswordsVisible}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default Password
