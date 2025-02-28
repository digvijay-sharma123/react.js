import React from 'react';

function Alert(props) {
    return (
        props.alert && <div className="alert alert-warning alert-dismissible grey show" role="alert">
            <strong>{props.alert.type} !</strong> {props.alert.message}
        </div>
    );
}

export default Alert;

