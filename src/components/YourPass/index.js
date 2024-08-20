import DisplayPassword from '../DisplayPassword'
import './index.css'

const YourPass = ({passwordList}) => {
  console.log(passwordList)
  return (
    <div className="yourPass-card-container">
      <div className="yourPass-container">
        <span className="password-title">Your Passwords</span>
        <div className="search-pass-container">
          <div className="search-box-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="search-logo"
            />
          </div>
          <input placeholder="Search" type="search" className="input-search" />
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
          <DisplayPassword key={eachList.id} eachList={eachList} />
        ))}
      </ul>
    </div>
  )
}
export default YourPass
