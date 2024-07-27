import ReactGA from 'react-ga4';

const measurementId= 'G-1WZHVGXKXW';

export const initGA= (): void => {
  ReactGA.initialize(measurementId);
}

export const logPageView = (): void => {
  ReactGA.send({
    hitType: 'pageView',
    page: window.location.pathname
  });
};