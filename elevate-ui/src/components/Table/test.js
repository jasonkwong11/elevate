import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Table from './index';


describe('Table', () => {

  const props = {
    alerts: [
      {
        "AlertId": 24859,
        "AlertTime": "2018-02-26 07:59:22",
        "Severity": "Low",
        "ClientIP": "155.175.121.134",
        "ServerIP": "154.224.236.156",
        "Protocol": "SMTP",
        "ClientCountry": "Canada"
      },
      {
        "AlertId": 24860,
        "AlertTime": "2018-02-21 15:28:26",
        "Severity": "Medium",
        "ClientIP": "66.78.200.140",
        "ServerIP": "142.6.126.64",
        "Protocol": "HTTP",
        "ClientCountry": "Germany"
      }
    ]
  };

  it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Table {...props} />, div);
  });

  it('shows two items in list', () => {
    const element = shallow(
      <Table { ...props } />
    );

    expect(element.find('.table-row').length).toBe(2);
  })

  test('snapshots', () => {
    const component = renderer.create(
      <Table { ...props } />
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});