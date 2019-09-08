import React from "react";
import PropTypes from 'prop-types';

//Deps
import clsx from 'clsx';


const Radio = (props) => {
    const {
        inline = true,
        showLabel = true,
        withGroup = true,
        options = [],
        selectedValue,
        className,
        ...others
    } = props;

    let label = props.label || props.name;

    return (
        <div className={clsx({ 'form-group': withGroup, })}>
            {showLabel ? <label className="form-label">{label}</label> : null}

            <div style={{ display: `flex`, flexFlow: `${inline ? 'row' : 'column'}  wrap` }}>
                {options.map((opt, i) => {
                    let ariaLabelledby = `checkbox_id_${props.name}_${i}_${opt.value}`;
                    return (
                        <div key={ariaLabelledby} style={{ margin: 4, display: `inline-flex`, flexFlow: `row wrap`, alignItems: `center` }}>
                            <input
                                value={opt.value}
                                type="radio"
                                checked={selectedValue && selectedValue === String(opt.value)}
                                className={clsx("form-radio", className)}
                                id={ariaLabelledby}
                                {...others}
                            />
                            <label className="form-radio-label" htmlFor={ariaLabelledby}>{opt.label}</label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

Radio.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    inline: PropTypes.bool,
    showLabel: PropTypes.bool,
    withGroup: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.exact({ label: PropTypes.string, value: PropTypes.string })).isRequired,
    selectedValue: PropTypes.string,
    className: PropTypes.string,
};


export default Radio;
