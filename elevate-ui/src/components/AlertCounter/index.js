import React from 'react';


const AlertCounter = ({ value }) => {
  let count =  value;
  return (
    <h3 className="alert-counter">
      Alerts ({ count })
    </h3>
  )
}

export default AlertCounter