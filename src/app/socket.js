import io from 'socket.io-client';
import { addMessage, removeChannelMessages } from '../features/messages/messagesSlice.js';
import { addChannel, removeChannel, renameChannel } from '../features/channels/channelsSlice.js';

export default (dispatch) => {
  const socket = io();

  socket.on('newMessage', ({ data }) => dispatch(addMessage({ message: data.attributes })));

  socket.on('newChannel', ({ data }) => dispatch(addChannel({ channel: data.attributes })));

  socket.on('removeChannel', ({ data }) => {
    const removingChannelId = data.id;
    dispatch(removeChannel({ removingChannelId }));
    dispatch(removeChannelMessages({ removingChannelId }));
  });

  socket.on('renameChannel', ({ data }) => dispatch(renameChannel({ channelId: data.id, editedChannel: data.attributes })));
};
