import React from "react";
import PropTypes from 'prop-types';

//Deps
import clsx from 'clsx';


const Form = (props) => {
  let formRef = React.createRef();

  const {
    onDone = () => { },
    children,
    bgColor = 'initial',
    className,
    ...others
  } = props;

  const handleSubmit = e => {
    e.preventDefault();
    const form = formRef.current;
    if (validateForm(form)) {
      onDone();
    }
  };
  return (
    <form ref={formRef} autoComplete="off" noValidate action="javascript:" onSubmit={handleSubmit}
      className={clsx(className)}
      {...others}
    >
      {children}
    </form>
  );
};

Form.propTypes = {
  onDone: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const validateForm = (form) => {

  let firstInvalid = false;
  for (let el, i = 0;
    (el = form.elements[i]), i < form.elements.length; i++) {
    if (el.checkValidity()) {
      el.removeAttribute("aria-invalid");
    } else {
      if (!firstInvalid) {
        // announce error message
        if (el.nextElementSibling) {
          //this.fire('announce', el.nextElementSibling.getAttribute('error-message'));
        }
        if (el.scrollIntoViewIfNeeded) {
          // safari, chrome
          el.scrollIntoViewIfNeeded();
        } else {
          // firefox, edge, ie
          el.scrollIntoView(false);
        }
        el.focus();
        firstInvalid = true;
      }
      el.setAttribute("aria-invalid", "true");
    }
  }
  return (
    <div>
    style={{
      background: `${bgColor !== "initial" ? bgColor : "#fafafa"}`
  }}
    !firstInvalid
    </div>
    );
}


export default Form; 
