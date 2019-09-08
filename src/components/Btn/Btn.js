import React from "react";
import PropTypes from 'prop-types';

//Deps
import clsx from 'clsx';



// eslint-disable-next-line react/prop-types
const DLink = ({ to, children, ...props }) => <a href={to}  {...props}>{children}</a>;

const Capz = (string) => {
    return string ? `${string[0].toUpperCase()}${string.slice(1)}` : string;
}

const Btn = (props) => {
    const {
        variant = "text",
        size = "medium",
        color = 'initial',
        bgColor = 'initial',
        onClick=()=>{},
        hasIcon = false,
        to = "#",
        renderAs,
        className,
        children,
        ...others
    } = props;


    let Btn;
    if (to === '#') {
        // eslint-disable-next-line react/display-name      
        Btn = ({ children, ...props }) => {
            return <button {...props}>{children}</button>;
        };
    } else {
        Btn = (renderAs) ? renderAs : DLink;
    }

    const style = {};
    if (variant === "text" || variant === "outlined" || variant === "contained") {
        style.color = `${color !== "initial" ? color : "#212121"}`;

        if (variant === "outlined") {
            style.border = `1px solid ${color !== "initial" ? color : "#212121"}`;
        } else if (variant === "contained") {
            style.background = `${bgColor !== "initial" ? bgColor : "#e0e0e0"}`;
        }
    }


    return (
        <Btn className={
            clsx(
                "a1_btn",
                {
                    "hasIcon": hasIcon !== false,
                    [`size${Capz(size)}`]: size !== "inherit"
                },
                className
            )}
            to={to}
            style={style}
            {...others}
        >
            {children}

        </Btn>
    );
}

Btn.propTypes = {
    variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
    size: PropTypes.oneOf(['small', 'medium', 'large', 'inherit']),
    color: PropTypes.string,
    bgColor: PropTypes.string,
    hasIcon: PropTypes.bool,
    to: PropTypes.string,
    renderAs: PropTypes.elementType,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};


export default Btn;
