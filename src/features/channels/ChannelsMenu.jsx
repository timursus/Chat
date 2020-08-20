import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';
import { setCurrentChannel } from './channelsSlice.js';

const ChannelsMenu = ({ currentChannelId }) => {
  const { channels } = useSelector(
    (state) => state.channelsInfo,
  );
  const dispatch = useDispatch();

  const openChannel = (id) => (e) => {
    e.preventDefault();
    dispatch(setCurrentChannel({ id }));
  };

  return (
    <nav className="nav nav-pills flex-column">
      {channels.map(({ id, name }) => {
        const classes = cn('nav-link w-100 text-truncate', { active: currentChannelId === id });
        return (
          <a className={classes} key={id} href={`#${id}`} onClick={openChannel(id)}>{name}</a>
        );
      })}
    </nav>
  );
};

export default ChannelsMenu;
