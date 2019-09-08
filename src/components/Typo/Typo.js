import React from 'react';
import PropTypes from 'prop-types';

//Deps
import clsx from 'clsx';


const defaultVarMap = {
    h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: 'h5', h6: 'h6',
    subtitle1: 'h6', subtitle2: 'h6', body1: 'div', body2: 'div',
};

const Typo = (props) => {
    const {
        variant = 'inherit',
        color = 'initial',
        renderAs,
        children,
        className,
        ...others
    } = props;


    const Component = renderAs || defaultVarMap[variant] || 'div';

    const style = {};
    if (color !== 'initial') {
        style.color = `${color}`;
    }


    return (
        <Component
            className={
                clsx(
                    'a1_typo',
                    {
                        [variant]: variant !== 'inherit'
                    },
                    className,
                )}
            style={style}

            {...others}
        >
            {children}

        </Component>
    );
};

Typo.propTypes = {
    variant: PropTypes.oneOf([
        'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline', 'inherit',
    ]).isRequired,
    color: PropTypes.string,
    renderAs: PropTypes.elementType,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Typo;
