import React from 'react';
import PropTypes from 'prop-types';

//Deps
import clsx from 'clsx';


const FlexItem = (props) => {

    const {
        width = "initial",
        bgColor = 'initial',
        children,
        className,
        ...others
    } = props;

    const style = {};
    if (width !== 'initial') {
        style.width = `${width}`;
    }
    if (bgColor !== 'initial') {
        style.background = `${bgColor}`;
    }


    return (
        <div className={
            clsx(
                'flex_item',
                className
            )}

            style={style}

            {...others}
        >
            {children}
        </div>
    );
};

FlexItem.propTypes = {
    width: PropTypes.string,
    bgColor: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};


export default FlexItem;
