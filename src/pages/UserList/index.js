import React from "react";
import { useNavigate } from 'react-router-dom'

export default function UserList() {
  const navigate = useNavigate();

  const onCreateNewUser = () => {
    console.log('create new user')
  }

  const goUserDetailPage = () => {
    navigate('/user/1');
  }
  return (
    <>
      <button onClick={onCreateNewUser}>create new user</button>
      <button onClick={goUserDetailPage}>Go Detail Page</button>
    </>
  )
}
