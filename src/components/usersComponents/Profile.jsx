import React from "react";
import { useSelector } from "react-redux";
import Login from "./Login";
import Logout from "./Logout";

export function Profile() {
  const user = useSelector((state) => state.user.values);
  return (
    <>
      <h3>name: {user.name}</h3>
      <h3>age: {user.age}</h3>
      <h3>email: {user.email}</h3>
      <Login />
      <Logout/>
    </>
  );
}
