import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {setTheme} from '../../features/theme';

export default function Theme() {
    const [bgColor, setBgColor] = useState('');
    const dispatch = useDispatch();

    function setBg(e){
        setBgColor(e.target.value);
        dispatch(setTheme(e.target.value));
    }
  return (
    <div>
        <input type="color" value={bgColor}  onChange={setBg}/>
    </div>
  )
}
