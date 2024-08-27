import {useState} from 'react'
import AddPass from '../AddPass'
import YourPass from '../YourPass'
import './index.css'

const Home = () => {
  const [passwordList, setPasswordList] = useState([])
  const [search, setSearch] = useState('')
  const onWebSearch = searchEvent => {
    setSearch(searchEvent)
  }
  const searchWeb = passwordList.filter(eachList =>
    eachList.website.toLowerCase().includes(search),
  )
  const onAddUserPasswordList = updatedPasswordList => {
    setPasswordList([...passwordList, updatedPasswordList])
  }
  const onDeleteWebsite = id => {
    const deleteWeb = passwordList.filter(eachList => eachList.id !== id)
    setPasswordList(deleteWeb)
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
        <YourPass
          passwordList={searchWeb}
          onSearch={onWebSearch}
          deleteWeb={onDeleteWebsite}
        />
      </div>
    </div>
  )
}

export default Home
