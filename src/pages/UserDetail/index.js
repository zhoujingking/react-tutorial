import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";



export default function UserDetail() {
  const params = useParams();
  const userList = useSelector(state => state.userList);
  const user = userList.find(u => u.id === Number(params.id));
  return (
    <>
      <h1>user detail page, router params for demo</h1>
      <div>{user.name}, {user.email}</div>
    </>
  )
}