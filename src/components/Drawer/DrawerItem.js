import React from "react";



//Deps
import clsx from 'clsx';

//#A1UI
import Btn from "appRoot/components/Btn";
import Icon from "appRoot/components/Icon";



const DrawerItem = (props) => {
    const {
        icon,
        title,
        isActive = false,
        color = 'initial',
        activeColor = 'initial',
        className,
        ...others
    } = props;
    return (
        <Btn className={
            clsx(
                "drawer_item",
                className
            )}
            color={`${
                isActive !== false
                    ?
                    (activeColor !== 'initial' ? activeColor : '#3f51b5')
                    :
                    (color !== 'initial' ? color : '#616161')
                }`}
            title={title}

            {...others}
        >
            <Icon icon={icon} className="marginRight" />
            {title}
        </Btn>
    );
};





export default DrawerItem;
