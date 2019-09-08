import React from "react";
import PropTypes from 'prop-types';

//Deps
import clsx from 'clsx';



//#A1UI
import Btn from "appRoot/components/Btn";
import Icon from "appRoot/components/Icon";

const ToolbarItem = (props) => {
    const {
        color = 'initial',
        icon,
        className,
        ...others
    } = props;

    return (
        <Btn
            color={`${color !== 'initial' ? color : '#616161'}`}
            className={
                clsx(
                    "toolbar_item",
                    className
                )}

            {...others}
        >
            <Icon icon={icon} />

        </Btn>
    );
};

ToolbarItem.propTypes = {
    icon: PropTypes.string.isRequired,
    color: PropTypes.string,
    className: PropTypes.string,
};

export default ToolbarItem;
