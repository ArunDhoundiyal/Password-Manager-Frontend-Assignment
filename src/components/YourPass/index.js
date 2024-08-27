import DisplayPassword from '../DisplayPassword'
import './index.css'

const YourPass = ({passwordList, onSearch, deleteWeb}) => {
  const onChangeSearch = event => {
    onSearch(event.target.value)
  }
  const deleteWebList = id => {
    deleteWeb(id)
  }
  return (
    <div className="yourPass-card-container">
      <div className="yourPass-container">
        <span className="password-title">
          Your Passwords: <span className="count">{passwordList.length}</span>
        </span>
        <div className="input-enter-container">
          <div className="search-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="website"
              className="input-search-logo"
            />
          </div>
          <input
            className="style-input"
            type="search"
            placeholder="Search"
            onChange={onChangeSearch}
          />
        </div>
      </div>
      <div className="checkbox-container">
        <div className="checkbox">
          <input className="checkbox-style" type="checkbox" />
          <span className="show-pass">Show Passwords</span>
        </div>
      </div>
      <ul className="display-password-container">
        {passwordList.map(eachList => (
          <DisplayPassword
            deleteList={deleteWebList}
            key={eachList.id}
            eachList={eachList}
          />
        ))}
      </ul>
    </div>
  )
}
export default YourPass
