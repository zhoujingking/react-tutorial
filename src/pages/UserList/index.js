import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from 'react-router-dom';

import { addNewUser } from "../../store/slice/userListSlice";

export default function UserList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userList = useSelector(state => state.userList)

  const onCreateNewUser = () => {
    dispatch(addNewUser())
  }

  const goUserDetailPage = () => {
    navigate('/user/1');
  }
  return (
    <>
      {
        userList.map(user => {
          return (
            <div key={user.id}>
              <Link to={`/user/${user.id}`}>{user.name}, {user.email}</Link>
            </div>
          )
        })
      }
      <button onClick={onCreateNewUser}>create new user</button>
    </>
  )
}
