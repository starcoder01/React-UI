import React from 'react';
import "../css/TypeCard.css";

function TypeCard(props) {
    return (
        <React.Fragment>
            <div className="type-card">
                <div className='type-card-image'>
                <img alt="" src={`${props.image}`}/>
                </div>
                <div className="type-card-title">{props.type}</div>
            </div>
        </React.Fragment>
    )
}

export default TypeCard;
