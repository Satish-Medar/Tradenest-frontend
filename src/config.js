export const LANDING_URL =
  process.env.REACT_APP_LANDING_URL || window.location.origin;
export const DASHBOARD_URL =
  process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001";

export const landingPath = (path) =>
  `${LANDING_URL}/#${path.startsWith("/") ? path : `/${path}`}`;
export const dashboardPath = (path) =>
  `${DASHBOARD_URL}/#${path.startsWith("/") ? path : `/${path}`}`;
