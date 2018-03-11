import React from 'react';


const Stats = ({ alertCount, severityHigh, severityMedium, severityLow, httpProtocol, ftpProtocol, tlsProtocol  }) => {
  return (
    <div className="stats">
      <h4>Stats</h4>
      <p>Alert Count: {alertCount}</p>
      <p>Severity</p>
      <p>High: {severityHigh}, Medium: {severityMedium}, Low: {severityLow}</p>
      <p>Protocol</p>
      <p>HTTP: {httpProtocol}, FTP: {ftpProtocol}, TLS: {tlsProtocol}</p>
    </div>
  )
}

export default Stats