import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';
import { setCurrentChannel } from './channelsSlice.js';

const ChannelsList = ({ currentChannelId }) => {
  const { channels } = useSelector(
    (state) => state.channelsInfo,
  );
  const dispatch = useDispatch();

  const goToChannel = (id) => (e) => {
    e.preventDefault();
    dispatch(setCurrentChannel({ id }));
  };

  return (
    <nav className="nav nav-pills nav-fill flex-column">
      {channels.map(({ id, name }) => {
        const classes = cn({ 'nav-item nav-link': true, active: currentChannelId === id });
        return (
          <a className={classes} key={id} href={`#${id}`} onClick={goToChannel(id)}>{name}</a>
        );
      })}
    </nav>
  );
};

export default ChannelsList;
