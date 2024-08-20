import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import './index.css'

const AddPass = ({userPasswordList}) => {
  const [userInput, setUserInput] = useState({
    website: '',
    username: '',
    password: '',
  })

  const onChangeNewPassword = event => {
    const {name, value} = event.target
    setUserInput({...userInput, [name]: value})
  }

  const onClickSubmitButton = event => {
    event.preventDefault()
    const inputData = {
      id: uuidv4(),
      website: userInput.website,
      username: userInput.username,
      password: userInput.password,
    }
    userPasswordList(inputData)
    setUserInput({
      website: '',
      username: '',
      password: '',
    })
  }

  return (
    <div className="addPass-card-container">
      <form
        className="addPass-input-box-container"
        onSubmit={onClickSubmitButton}
      >
        <p className="password-title">Add New Password</p>
        <div className="input-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
            alt="website"
            className="input-logo"
          />
          <input
            className="input-style"
            type="text"
            placeholder="Enter Website"
            name="website"
            value={userInput.website}
            onChange={onChangeNewPassword}
            required
          />
        </div>
        <div className="input-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
            alt="website"
            className="input-logo"
          />
          <input
            type="text"
            className="input-style"
            placeholder="Enter Username"
            name="username"
            value={userInput.username}
            onChange={onChangeNewPassword}
            required
          />
        </div>
        <div className="input-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
            alt="website"
            className="input-logo"
          />
          <input
            type="password"
            className="input-style"
            placeholder="Enter Password"
            name="password"
            value={userInput.password}
            onChange={onChangeNewPassword}
            required
          />
        </div>
        <div className="add-button-container">
          <button className="add-button-style" type="submit">
            Add
          </button>
        </div>
      </form>
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
        alt="password-manager-logo"
        className="password-manager-logo"
      />
    </div>
  )
}

export default AddPass
