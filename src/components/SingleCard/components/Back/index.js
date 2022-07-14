import React from "react";

const Back = (props) => {

    return (
        <img
        className="back"
        src="/img/cover.png"
        onClick={props.onClick}
        alt="card back"
    />
    )
};

export default Back;