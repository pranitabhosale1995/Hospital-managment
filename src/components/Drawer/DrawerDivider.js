import React, { Fragment } from "react";
import PropTypes from 'prop-types';


//Deps
import clsx from 'clsx';

const DrawerDivider = (props) => {
    const {
        color = 'initial',
        className,
        ...others
    } = props;
    return (
        <Fragment>
            <hr className={
                clsx(
                    "a1_hr",
                    className
                )}
                style={{
                    borderTop: `1px solid ${color !== "initial" ? color : "#eeeeee"}`
                }}

                {...others}
            />
        </Fragment>
    );
}

DrawerDivider.propTypes = {
    color: PropTypes.string,
    className: PropTypes.string,
};


export default DrawerDivider;
