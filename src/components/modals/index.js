import ChannelNameDialog from './ChannelNameDialog.jsx';
import Remove from './Remove.jsx';

const modals = {
  adding: ChannelNameDialog,
  renaming: ChannelNameDialog,
  removing: Remove,
};

export default (modalName) => modals[modalName];
