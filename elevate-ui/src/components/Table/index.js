import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SORTS from '../../constants'
import Sort from '../Sort'
import Button from '../Button'

class Table extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      sortKey: 'NONE',
      isSortReverse: false,
    };

  }

  render() {
    const {
      alerts
    } = this.props;

    const {
      sortKey,
      isSortReverse
    } = this.state;

    const sortedList = SORTS[sortKey](alerts);
    const reverseSortList = isSortReverse
      ? sortedList.reverse()
      : sortedList

    return(
      <div className="table">
          <div className="table-header">
            <span style={smallColumn}>
              <Sort
                sortKey={'ALERTID'}
                activeSortKey={sortKey}
              >
                AlertId
              </Sort>
            </span>
            <span style={midColumn}>
              <Sort
                sortKey={'ALERTTIME'}
                activeSortKey={sortKey}
              >
                AlertTime
              </Sort>
            </span>
            <span style={smallColumn}>
              <Sort
                sortKey={'SEVERITY'}
                activeSortKey={sortKey}
              >
                Severity
              </Sort>
            </span>
            <span style={smallColumn}>
              <Sort
                sortKey={'CLIENTIP'}
                activeSortKey={sortKey}
              >
                ClientIP
              </Sort>
            </span>
            <span style={smallColumn}>
              <Sort
                sortKey={'SERVERIP'}
                activeSortKey={sortKey}
              >
                ServerIP
              </Sort>
            </span>
            <span style={smallColumn}>
              <Sort
                sortKey={'PROTOCOL'}
                activeSortKey={sortKey}
              >
                Protocol
              </Sort>
            </span>
            <span style={smallColumn}>
              <Sort
                sortKey={'CLIENTCOUNTRY'}
                activeSortKey={sortKey}
              >
                ClientCountry
              </Sort>
            </span>
          </div>
          { alerts.map(item =>
            <div key={item.AlertId} className="table-row">
              <span style={smallColumn}>
                {item.AlertId}
              </span>
              <span style={midColumn}>
                {item.AlertTime}
              </span>
              <span style={smallColumn}>
                {item.Severity}
              </span>
              <span style={smallColumn}>
                {item.ClientIP}
              </span>
              <span style={smallColumn}>
                {item.ServerIP}
              </span>
              <span style={smallColumn}>
                {item.Protocol}
              </span>
              <span style={smallColumn}>
                {item.ClientCountry}
              </span>
            </div>
          )}
        </div>
    );
  }
}

Table.propTypes = {
  alerts: PropTypes.arrayOf(
    PropTypes.shape({
      alertId: PropTypes.number.isRequired,
      alertTime: PropTypes.string,
      severity: PropTypes.string,
      clientIp: PropTypes.string,
      serverIp: PropTypes.string,
      protocol: PropTypes.string,
      clientCountry: PropTypes.string
    })
  ).isRequired
}

// table column styles
  const largeColumn = {
    width: '40%'
  }

  const midColumn = {
    width: '30%'
  }

  const smallColumn = {
    width: '10%'
  }
// end styles

export default Table