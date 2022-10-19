import React from 'react'

const Dropdown = ({options}) => {

    const renderedOptions = options.map((option) =>{
        return(
            <div key={option.value} className="item">
                {option.label}
            </div>
        );
    }); 
    return (
        <div className="ui form">
            <div className="field">
                <label className='label'>Select a Color</label>
                <div className="ui selection dropdwon visibla active">
                    <i className="dropdwon icon"></i>
                    <div className="text">Select Color</div>
                    <div className="menu visible transition">{renderedOptions}</div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown