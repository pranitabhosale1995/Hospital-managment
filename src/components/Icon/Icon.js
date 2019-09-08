import React from "react";
import PropTypes from 'prop-types';

//Deps
import clsx from 'clsx';


const Icon = (props) => {
    const {
        icon = "star",
        size = 24,
        color = 'initial',
        className,
        children,
        ...others
    } = props;

    const style = {
        fontSize: `${size}px`,
        lineHeight: `${size}px`,
        verticalAlign: `middle`,
    };

    if (color !== 'initial') {
        style.color = `${color}`;
    }


    return (
        <i className={
            clsx(
                'material-icons',
                className
            )}
            style={style}

            {...others}
        >
            {icon}{children}

        </i>
    );
};

Icon.propTypes = {
    icon: PropTypes.string,
    size: PropTypes.number,
    color: PropTypes.string,
    className: PropTypes.string,
};

export default Icon;
