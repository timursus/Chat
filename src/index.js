import 'core-js/stable';
import 'regenerator-runtime/runtime';

import '../assets/application.scss';

import gon from 'gon';
import configureRollbar from './rollbar.js';
import runApp from './app';

const {
  channels,
  currentChannelId,
  messages,
  config,
} = gon;

configureRollbar(config.rollbarAccessToken);

runApp(channels, currentChannelId, messages);
