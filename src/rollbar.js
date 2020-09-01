import Rollbar from 'rollbar';

export default (accessToken) => new Rollbar({
  accessToken,
  captureUncaught: true,
  captureUnhandledRejections: true,
});
