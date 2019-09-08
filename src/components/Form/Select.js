import React from "react";
import PropTypes from 'prop-types';

//Deps
import clsx from 'clsx';




const Select = (props) => {
    const {
        showLabel = true,
        withGroup = true,
        options = [],
        className,
        ...others
    } = props;

    let label = props.label || props.name;
    let ariaLabelledby = `select_id_${props.name}`;

    return (
        <div className={clsx({ 'form-group': withGroup, })}>
            {
                showLabel
                    ?
                    <label className="form-label" htmlFor={ariaLabelledby}>{label}</label>
                    :
                    null
            }
            <select id={ariaLabelledby} className={clsx("form-input", className)} {...others}>
                {options.map((opt, i) => {
                    return (
                        <option key={`select_${props.name}_${i}_${opt.value}`} value={opt.value}>
                            {opt.label}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

Select.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    showLabel: PropTypes.bool,
    withGroup: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.exact({ label: PropTypes.string, value: PropTypes.string })).isRequired,
    className: PropTypes.string,
};


export default Select;
