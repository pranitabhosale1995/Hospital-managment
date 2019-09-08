import React from "react";
import { Link } from "react-router-dom";



const ErrorView = (props) => {
  const { location } = props;
  return (
    <div style={{ textAlign: 'center' }}>

      <h3>Error 404</h3>
      icon
      <p>
        It looks like we hit a snag <br /> <b>{location.pathname}</b>
      </p>
      <br />

      <Link variant="outlined" color="primary" to="/">Dashboard</Link>

    </div>

  );

}

export default ErrorView;
