import React from 'react';
import PropTypes from 'prop-types';

//Deps
import clsx from 'clsx';


const Box = (props) => {
    const {
        variant = 'inherit',
        bgColor = 'initial',
        children,
        className,
        ...others
    } = props;

    return (
        <div className={
            clsx(
                {
                    [variant]: variant !== 'inherit',
                },
                className,
            )}
            style={{ background: `${bgColor !== "initial" ? bgColor : "inherit"}` }}

            {...others}
        >
            {children}

        </div>
    );
};

Box.propTypes = {
    variant: PropTypes.oneOf(['content', 'container', 'panel', 'inherit']),
    bgColor: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Box;