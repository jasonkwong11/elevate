import { sortBy } from 'lodash';

export const DEFAULT_PAGE = 0;
export const DEFAULT_HPP = '20';

const SORTS = {
  NONE: alert => alert,
  ALERTID: alert => sortBy(alert, 'AlertId').reverse(),
  ALERTTIME: alert => sortBy(alert, 'AlertTime'),
  SEVERITY: alert => sortBy(alert, 'Severity'),
  CLIENTIP: alert => sortBy(alert, 'ClientIP'),
  SERVERIP: alert => sortBy(alert, 'ServerIP'),
  PROTOCOL: alert => sortBy(alert, 'Protocol'),
  CLIENTCOUNTRY: alert => sortBy(alert, 'ClientCountry'),
};

export default SORTS
