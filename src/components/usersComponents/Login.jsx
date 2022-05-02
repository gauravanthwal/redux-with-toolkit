import React from "react";
import { login } from "../../features/users";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  return (
    <>
      <button
        className="btn"
        onClick={() =>
          dispatch(
            login({ name: "Gaurav", age: 21, email: "gaurav@gmail.com" })
          )
        }
      >
        Login
      </button>
    </>
  );
}

export default Login;
