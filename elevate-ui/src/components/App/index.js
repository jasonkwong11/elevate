import React, { Component } from 'react';
import './index.css';
import alerts from '../../constants/alerts.json'
import { DEFAULT_QUERY } from '../../constants';

import Search from '../Search';
import Header from '../Header';
import Table from '../Table';
import Stats from '../Stats';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      originalData: alerts,
      alerts: alerts,
      searchTerm: DEFAULT_QUERY,
      stats: {
        alertCount: alerts.length,
        severityHigh: alerts.map(x => x["Severity"] === "High").filter(Boolean).length,
        severityMedium: alerts.map(x => x["Severity"] === "Medium").filter(Boolean).length,
        severityLow: alerts.map(x => x["Severity"] === "Low").filter(Boolean).length,
        httpProtocol: alerts.map(x => x["Protocol"] === "HTTP").filter(Boolean).length,
        ftpProtocol: alerts.map(x => x["Protocol"] === "FTP").filter(Boolean).length,
        tlsProtocol: alerts.map(x => x["Protocol"] === "TLS").filter(Boolean).length,
      },
    }

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.filterSearchAlerts = this.filterSearchAlerts.bind(this);
  }

  filterSearchAlerts(searchTerm) {
    let alerts = this.state.alerts;

    let results = [];

    // find the searchTerm substring in any alert field
    alerts.forEach((alert) => {
      if (alert["AlertId"].toString().indexOf(searchTerm) >= 0){ results.push(Object.assign({}, alert))}
      if (alert["AlertTime"].indexOf(searchTerm) >= 0){ results.push(Object.assign({}, alert))}
      if (alert["Severity"].indexOf(searchTerm) >= 0){ results.push(Object.assign({}, alert))}
      if (alert["ClientIP"].indexOf(searchTerm) >= 0){ results.push(Object.assign({}, alert))}
      if (alert["ServerIP"].indexOf(searchTerm) >= 0){ results.push(Object.assign({}, alert))}
      if (alert["Protocol"].indexOf(searchTerm) >= 0){ results.push(Object.assign({}, alert))}
      if (alert["ClientCountry"].indexOf(searchTerm) >= 0){ results.push(Object.assign({}, alert))}
    })
    this.setState({ 
      alerts: results,
      stats: {
        alertCount: results.length,
        severityHigh: results.map(x => x["Severity"] === "High").filter(Boolean).length,
        severityMedium: results.map(x => x["Severity"] === "Medium").filter(Boolean).length,
        severityLow: results.map(x => x["Severity"] === "Low").filter(Boolean).length,
        httpProtocol: results.map(x => x["Protocol"] === "HTTP").filter(Boolean).length,
        ftpProtocol: results.map(x => x["Protocol"] === "FTP").filter(Boolean).length,
        tlsProtocol: results.map(x => x["Protocol"] === "TLS").filter(Boolean).length,
      }
    })
  }

  onSearchChange(event) {
    //change the search term state as the user types into the input bar
    this.setState({ searchTerm: event.target.value });

    //reset the alerts to original data if input bar is empty
    if (!event.target.value) {
      let originalData = this.state.originalData
      this.setState({ 
        alerts: originalData,
        stats: {
          alertCount: originalData.length,
          severityHigh: originalData.map(x => x["Severity"] === "High").filter(Boolean).length,
          severityMedium: originalData.map(x => x["Severity"] === "Medium").filter(Boolean).length,
          severityLow: originalData.map(x => x["Severity"] === "Low").filter(Boolean).length,
          httpProtocol: originalData.map(x => x["Protocol"] === "HTTP").filter(Boolean).length,
          ftpProtocol: originalData.map(x => x["Protocol"] === "FTP").filter(Boolean).length,
          tlsProtocol: originalData.map(x => x["Protocol"] === "TLS").filter(Boolean).length,
        }
      })
    }
  }

  onSearchSubmit(event) {
    event.preventDefault();
    const { searchTerm } = this.state;
    if (!searchTerm){ // if user searches for an empty string
      return null
    } else {
      this.filterSearchAlerts(searchTerm);
    }
  }

  render() {

    const {
      searchTerm,
      alerts,
    } = this.state;

    const {
      alertCount,
      severityHigh,
      severityLow,
      severityMedium,
      httpProtocol,
      ftpProtocol,
      tlsProtocol
    } = this.state.stats;

    return (
      <div className="App">
        <Header />
        <Stats
          alertCount={alertCount}
          severityHigh={severityHigh}
          severityMedium={severityMedium}
          severityLow={severityLow}
          httpProtocol={httpProtocol}
          ftpProtocol={ftpProtocol}
          tlsProtocol={tlsProtocol}
        />
        <Search
          value={searchTerm}
          onChange={this.onSearchChange}
          onSubmit={this.onSearchSubmit}
        >
          Search
        </Search>
        <Table 
          alerts={alerts}
        />
      </div>
    );
  }
}

export default App;
