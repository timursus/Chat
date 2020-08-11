import 'core-js/stable';
import 'regenerator-runtime/runtime';

import '../assets/application.scss';

import faker from 'faker';
import gon from 'gon';
import cookies from 'js-cookie';
import io from 'socket.io-client';
import runApp from './app';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

if (!cookies.get('username')) {
  cookies.set('username', faker.fake('{{internet.userName}}'));
}

const username = cookies.get('username');

const socket = io();

const { channels, currentChannelId, messages } = gon;

runApp(channels, currentChannelId, messages, username, socket);
