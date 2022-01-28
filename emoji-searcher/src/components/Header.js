import React from 'react';
import "../App.css";

const Header = ({textChange}) => {


    return(
        <div className='header'>
            <div className='form_group'>
                <input onChange={(data) => textChange(data)} type="input" className="form_field" placeholder=' '></input>
                <label htmlFor="name" className="form_label">Emoji Name</label>
            </div>
        </div>
    )

}

export default Header;