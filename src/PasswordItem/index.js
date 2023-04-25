import './index.css'

const PasswordItem = props => {
  const {eachItem, deleteItem, isPasswordsVisible} = props
  const {id, user, website, password} = eachItem
  const initial = user[0].toUpperCase()

  const callDeleteFun = () => {
    deleteItem(id)
  }

  return (
    <li className="card">
      <div className="profile-details">
        <p className="profile">{initial}</p>
        <p>
          {website}
          <br />
          {user}
          <br />
          {isPasswordsVisible ? (
            <p>{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="stars"
            />
          )}
        </p>
      </div>
      <button type="button" onClick={callDeleteFun}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          data-testId="delete"
          className="icons"
        />
      </button>
    </li>
  )
}
export default PasswordItem
