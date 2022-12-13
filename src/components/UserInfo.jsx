import axios from 'axios'
import React from 'react'
import "./styles/userCard.css" 

const UserInfo = ({user, getAllUsers, setUpdateInfo, setCloseForm}) => {

    const deleteUserById = data => {
        const URL = `http://users-crud.academlo.tech/users/${user.id}/`
        axios.delete(URL, data)
            .then(res => {
                console.log(res.data)
                getAllUsers()
            })
            .catch(err => console.log(err))
    }

    const handleEdit = () => {
        setCloseForm(false)
        setUpdateInfo(user)
    }

  return (
    <article className='card'>
        <h3 className='card__title'>{user.first_name} {user.last_name}</h3>
        <ul className='card__body'>
            <li className='card__item'><span className='card__span'>E-mail</span> {user.email}</li>
            <li className='card__item'><span className='card__span'>Birthday</span> {user.birthday}</li>
        </ul>
        <footer className='card__footer'>
            <button className='card__btn card__btn__trash' onClick={deleteUserById}><i className="fa-solid fa-trash-can"></i></button>
            <button className='card__btn card__btn__edit'onClick={handleEdit}><i className="fa-solid fa-pencil"></i></button>
        </footer>
    </article>
  )
}

export default UserInfo