import { addMessage } from '../features/messages/messagesSlice.js';

export default (socket, dispatch) => {
  socket.on('newMessage', ({ data }) => dispatch(addMessage({ message: data.attributes })));
};
