import './index.css'

const DisplayPassword = ({eachList}) => {
  const {website, username, password} = eachList
  return (
    <li className="password-card">
      <p>{website}</p>
      <p>{username}</p>
      <p>{password}</p>
    </li>
  )
}

export default DisplayPassword
