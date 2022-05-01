import React,{} from 'react';
import {increment, decrement} from '../../features/counter';
import { useSelector, useDispatch } from 'react-redux';

export default function Counter() {
    const counter = useSelector(state=>state.counter.counter);
    const dispatch = useDispatch();

  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  )
}
