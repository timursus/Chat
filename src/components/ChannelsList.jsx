import React from 'react';
import cn from 'classnames';

const ChannelsList = (props) => {
  const { channels, currentChannelId } = props;
  return (
    <nav className="nav nav-pills nav-fill flex-column">
      {channels.map(({ id, name }) => {
        const classes = cn({ 'nav-item nav-link': true, active: currentChannelId === id });
        return <a className={classes} key={id} href={`#${id}`}>{name}</a>;
      })}
    </nav>
  );
};

export default ChannelsList;
