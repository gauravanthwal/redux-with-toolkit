import React,{} from 'react';
import {increment, decrement} from '../../features/counter';
import { useSelector, useDispatch } from 'react-redux';

export default function Counter() {
    const counter = useSelector(state=>state.counter.counter);
    const dispatch = useDispatch();

  return (
    <div className='counter'>
        <h1>{counter}</h1>
        <button className='btn-inc red' onClick={()=>dispatch(increment())}>+</button>
        <button className='btn-inc cyan' onClick={()=>dispatch(decrement())}>-</button>
    </div>
  )
}
