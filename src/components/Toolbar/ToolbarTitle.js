import React from "react";
import PropTypes from 'prop-types';

//Deps
import clsx from 'clsx';


const ToolbarTitle = (props) => {
    const {
        color = 'initial',
        title,
        className,
        ...others
    } = props;

    return (
        <div className={
            clsx(
                "toolbar_title",
                className
            )}
            style={{
                color: `${color !== "initial" ? color : "#414141"}`
            }}
            {...others}
        >
            {title}
        </div>
    );
};

ToolbarTitle.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    className: PropTypes.string,
};

export default ToolbarTitle;
