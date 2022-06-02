import React from 'react';

function MIBUTTON({type, placeholder}) {
    return (
        <input type={type} class="form-control " style={{borderRadius:"15px"}} id="inputPassword2" placeholder={placeholder} />
    );
}

export default MIBUTTON;