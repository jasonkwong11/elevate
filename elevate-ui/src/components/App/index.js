import React, { Component } from 'react';
import './index.css';
import {
  DEFAULT_PAGE,
  DEFAULT_HPP
} from '../../constants';

import alerts from '../../constants/alerts.json'
import Search from '../Search';
import Header from '../Header'
import Table from '../Table';
import AlertCounter from '../AlertCounter';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      alerts: alerts,
      searchKey: '',
      searchTerm: '',
      alertCount: alerts.length
    }

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }
  componentDidMount() {
    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onSearchSubmit(event) {
    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });
  }

  render() {

    const {
      searchTerm,
      alerts,
      searchKey,
      alertCount
    } = this.state;

    return (
      <div className="App">
        <Header />
        <AlertCounter
          value={alertCount}
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
