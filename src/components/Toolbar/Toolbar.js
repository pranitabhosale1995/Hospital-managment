import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

//Deps
import clsx from 'clsx';


const Toolbar = (props) => {

    const {
        bgColor = 'initial',
        scrolling = true,
        children,
        className,
        ...others
    } = props;

    const [isOpened, setIsOpened] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        if (scrolling) {
            window.addEventListener("scroll", handleScroll);
        }

        function handleScroll() {
            return requestAnimationFrame(() => {
                setScrollTop(document.documentElement.scrollTop);
            })
        }

        return function cleanup() {
            console.log("Toolbar cleanup");
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollTop > 62) {
            if (scrollTop > lastScrollTop) {
                if (isOpened) {
                    setIsOpened(false);
                }
            } else {
                if (!isOpened) {
                    setIsOpened(true);
                }
            }
        } else {
            if (!isOpened) {
                setIsOpened(true);
            }
        }
        setLastScrollTop(scrollTop);
    }, [scrollTop]);


    return (
        <div className={
            clsx(
                "a1_toolbar",
                {
                    "opened": isOpened,
                    "closed": !isOpened
                },
                className
            )}

            {...others}
        >
            <div
                className="toolbar_container"
                style={{
                    background: `${bgColor !== "initial" ? bgColor : "#fafafa"}`
                }}
            >
                {children}
            </div>
        </div>
    );

};

Toolbar.propTypes = {
    bgColor: PropTypes.string,
    children: PropTypes.node.isRequired,
    scrolling: PropTypes.bool,
    className: PropTypes.string,
};

export default Toolbar;
