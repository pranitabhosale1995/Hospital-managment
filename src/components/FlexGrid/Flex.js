import React from 'react';
import PropTypes from 'prop-types';

//Deps
import clsx from 'clsx';


const Flex = (props) => {

    const {
        dir = 'row',
        justify = 'center',
        children,
        className,
        ...others
    } = props;

    return (
        <div className={
            clsx(
                `flex_${dir}`,
                className
            )
        }
            style={{
                justifyContent: `${justify}`
            }}
            {...others}
        >
            {children}
        </div>
    );
};

Flex.propTypes = {
    dir: PropTypes.oneOf(['row', 'column']),
    justify: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};


export default Flex;
