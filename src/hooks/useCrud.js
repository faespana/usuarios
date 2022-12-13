import axios from "axios"
import { useState } from "react"

const useCrud = () => {

    const [users, setUsers] = useState()

    const getAllUsers = () => {
        const URL = `http://users-crud.academlo.tech/users/`
        axios.get(URL)
          .then(res => setUsers(res.data))
          .catch(err => console.log(err))
      }
    
      const createUser = data => {
        const URL = `http://users-crud.academlo.tech/users/`
        axios.post(URL, data)
          .then(res => {
            console.log(res.data)
            getAllUsers()
          })
          .catch(err => console.log(err))
      }

      const updateUserById = (id, data) => {
        const URL = `http://users-crud.academlo.tech/users/${id}/`
        axios.patch(URL, data)
          .then(res => {
            console.log(res)
            getAllUsers()
          })
          .catch(err => console.log(err))  
      }

      return {
        users, 
        createUser, 
        getAllUsers, 
        updateUserById
    }
}

export default useCrud