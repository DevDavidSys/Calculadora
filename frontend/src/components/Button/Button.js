import React from 'react';
import "./Button.css";
export default function Button(props){
    return(
    <div className='button' onClick={AddNumber(props.con)}>
        {props.con}
    </div>
    );


}
