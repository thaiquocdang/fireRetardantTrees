import React, { useState } from 'react';

export function Category(props) {
    const [checked, setChecked] = useState(false); // should be defined in parent classes
    let {categoryName, categoryCount, value, onClick } = props;

    const handleOnClick = e => {

        
        onClick(props.id);
        setChecked(!checked);
    }


    return (
        <div className="custom-control custom-checkbox d-flex align-items-center mb-2" onClick={handleOnClick}>
            { <input type="checkbox" className="custom-control-input" checked={checked} />}
            <label className="custom-control-label" htmlFor="customCheck2">{categoryName} <span className="text-muted">({categoryCount})</span></label>
        </div>
    );
}



