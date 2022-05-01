import React from 'react'
import { useDispatch } from 'react-redux';
import { logout} from '../../features/users';

export default function Logout() {
    const dispatch = useDispatch();
  return (
    <>
        <button onClick={()=>dispatch(logout({name: 'Name not Found', age: 0, email: 'Not available'}))}>Logout</button>
    </>
  )
}
