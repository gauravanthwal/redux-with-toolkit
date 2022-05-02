import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {setTheme} from '../../features/theme';
import { Link } from 'react-router-dom';

export default function Theme() {
    const [bgColor, setBgColor] = useState('');
    const dispatch = useDispatch();

    function setBg(e){
        setBgColor(e.target.value);
        dispatch(setTheme(e.target.value));
    }
  return (
    <div>
      <nav>
        <div className='links'>
          
          
          <Link to='/'><h2>🎶</h2></Link>
          <Link to='/profile'>Profile</Link>
          <Link to='/counter'>Counter</Link>

        </div>
        <div>
      <input type="color" value={bgColor}  onChange={setBg}/>
        </div>
      </nav>
    </div>
  )
}
