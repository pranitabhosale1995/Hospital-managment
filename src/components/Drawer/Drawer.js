import React, { Fragment } from "react";



//Deps
import clsx from 'clsx';



//#A1UI


const Drawer = (props) => {
    const {
        bgColor = 'initial',
        opened = false,
        anchor = 'left',
        onClose = () => { },
        children,
        className,
        ...others
    } = props;


    return (
        <Fragment>
        

            <div className={
                clsx(
                    "a1_drawer",
                    `${anchor}`,
                    {
                        "opened": opened,
                        "closed": !opened,
                    },
                    className
                )}
                style={{
                    background: `${bgColor !== "initial" ? bgColor : "#ffffff"}`
                }}
                {...others}
            >
                {children}


            </div>
        </Fragment >
    );
}




export default Drawer;