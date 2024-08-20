import {useState} from 'react'
import AddPass from '../AddPass'
import YourPass from '../YourPass'
import './index.css'

const Home = () => {
  const [passwordList, setPasswordList] = useState([])
  const onAddUserPasswordList = updatedPasswordList => {
    setPasswordList([...passwordList, updatedPasswordList])
  }

  return (
    <div className="bg-container">
      <div className="home-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
        </div>
        <AddPass userPasswordList={onAddUserPasswordList} />
        <YourPass passwordList={passwordList} />
      </div>
    </div>
  )
}

export default Home
