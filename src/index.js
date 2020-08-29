import 'core-js/stable';
import 'regenerator-runtime/runtime';

import '../assets/application.scss';

import Rollbar from 'rollbar';
import gon from 'gon';
import runApp from './app';

const configureRollbar = () => new Rollbar({
  accessToken: process.env.POST_CLIENT_ITEM_ACCESS_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
});

configureRollbar();

const { channels, currentChannelId, messages } = gon;

runApp(channels, currentChannelId, messages);
