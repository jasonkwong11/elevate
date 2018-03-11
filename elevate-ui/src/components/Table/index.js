import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SORTS from '../../constants';
import Sort from '../Sort'

const AlertDetails = ({details}) =>
  <div className="alert-details">
    <h4>Alert Details #{details[0]}</h4>
    <p>Alert Id: {details[0]}</p>
    <p>Alert Time: {details[1]}</p>
    <p>Severity: {details[2]}</p>
    <p>Protocol: {details[3]}</p>
    <p>Client IP: {details[4]}</p>
    <p>Server IP: {details[5]}</p>
    <p>Client Country: {details[6]}</p>
  </div>

class Table extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      sortKey: 'NONE',
      isSortReverse: false,
      showAlertDetails: false,
      clickedAlertDetails: []
    };
    this.onSort = this.onSort.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onSort(sortKey) {
    this.setState((prevState) => {
      const isSortReverse = prevState.sortKey === sortKey && !prevState.isSortReverse;
      return {
        sortKey,
        isSortReverse 
      }
    });
  }

  onButtonClick(e) {
    let details = e.currentTarget.innerText.split("\n");

    this.setState({
      showAlertDetails: !this.state.showAlertDetails,
      clickedAlertDetails: details
    });
  }

  render() {
    const {
      alerts
    } = this.props;

    const {
      sortKey,
      isSortReverse,
      clickedAlertDetails
    } = this.state;

    const sortedList = SORTS[sortKey](alerts);
    const reverseSortList = isSortReverse
      ? sortedList.reverse()
      : sortedList

    return(
      <div className="table">
        {this.state.showAlertDetails ?
           <AlertDetails 
            details={clickedAlertDetails}
           /> :
           null
        }
          <div className="table-header">
            <span style={smallColumn}>
              <Sort
                sortKey={'ALERTID'}
                onSort={this.onSort}
                activeSortKey={sortKey}
              >
                AlertId
              </Sort>
            </span>
            <span style={midColumn}>
              <Sort
                sortKey={'ALERTTIME'}
                onSort={this.onSort}
                activeSortKey={sortKey}
              >
                AlertTime
              </Sort>
            </span>
            <span style={smallColumn}>
              <Sort
                sortKey={'SEVERITY'}
                onSort={this.onSort}
                activeSortKey={sortKey}
              >
                Severity
              </Sort>
            </span>
            <span style={midColumn}>
              <Sort
                sortKey={'CLIENTIP'}
                onSort={this.onSort}
                activeSortKey={sortKey}
              >
                ClientIP
              </Sort>
            </span>
            <span style={midColumn}>
              <Sort
                sortKey={'SERVERIP'}
                onSort={this.onSort}
                activeSortKey={sortKey}
              >
                ServerIP
              </Sort>
            </span>
            <span style={smallColumn}>
              <Sort
                sortKey={'PROTOCOL'}
                onSort={this.onSort}
                activeSortKey={sortKey}
              >
                Protocol
              </Sort>
            </span>
            <span style={midColumn}>
              <Sort
                sortKey={'CLIENTCOUNTRY'}
                onSort={this.onSort}
                activeSortKey={sortKey}
              >
                ClientCountry
              </Sort>
            </span>
          </div>
          { reverseSortList.map(item =>
            <div key={item["AlertId"]} className="table-row" onClick={this.onButtonClick}>
              <span style={smallColumn}>
                {item.AlertId}
              </span>
              <span style={midColumn}>
                {item.AlertTime}
              </span>
              <span style={smallColumn}>
                {item.Severity}
              </span>
              <span style={midColumn}>
                {item.ClientIP}
              </span>
              <span style={midColumn}>
                {item.ServerIP}
              </span>
              <span style={smallColumn}>
                {item.Protocol}
              </span>
              <span style={midColumn}>
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
      alertId: PropTypes.number,
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
  const midColumn = {
    width: '30%'
  }

  const smallColumn = {
    width: '10%'
  }
// end styles

export default Table