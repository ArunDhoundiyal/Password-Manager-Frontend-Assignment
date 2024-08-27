import './index.css'

const DisplayPassword = ({eachList, deleteList}) => {
  const {id, website, username, password} = eachList
  const firstLetter = website.split('')[0]
  const onDelete = () => {
    deleteList(id)
  }
  return (
    <li className="password-card">
      <div className="numberCircle">{firstLetter}</div>
      <div className="list-content-container">
        <p>{website}</p>
        <p>{username}</p>
        <p>{password}</p>
      </div>

      <button className="delete-button" type="button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
          alt="delete-icon"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default DisplayPassword
