import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUser from './components/FormUser'
import UserInfo from './components/UserInfo'
import useCrud from './hooks/useCrud'

function App() {

  const [closeForm, setCloseForm] = useState(true)

  const {users, getAllUsers, createUser, updateUserById} = useCrud()
  
  const [updateInfo, setUpdateInfo] = useState()
 
  useEffect(() => {
    getAllUsers()
  }, [])

  // const deleteUserById = id => { (OTRA FORMA DEL DELETE CON ID COMO PARAMETRO)
  //   const URL = `http://users-crud.academlo.tech/users/${id}/`
  //   axios.delete(URL)
  //       .then(res => {
  //           console.log(res.data)
  //           getAllUsers()
  //       })
  //       .catch(err => console.log(err))
  // }

  return (
    <div className="App">
      <h1>Users</h1>
      <button onClick={() => setCloseForm(false)} className='App__btn'>Open Form</button>
      <div className= {`form-container ${closeForm && 'close__form'}`}>
      <FormUser
        createUser = {createUser}
        updateInfo = {updateInfo}
        updateUserById = {updateUserById}
        setUpdateInfo = {setUpdateInfo}
        setCloseForm = {setCloseForm}
      />
      </div>
      <div className='user-container'>
        {
          users?.map(user => (
            <UserInfo
              key = {user.id}
              user = {user}
              getAllUsers = {getAllUsers}
              setUpdateInfo={setUpdateInfo}
              setCloseForm = {setCloseForm}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
