import { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import { AiOutlinePlus } from 'react-icons/ai';

import Channels from '../../subComponents/Channels';
import DirectMessages from '../../subComponents/DirectMessages';

const dummyChannels = [
  {
    roomId: 1,
    roomName: 'general',
  },
  {
    roomId: 2,
    roomName: 'programming',
  },
  {
    roomId: 3,
    roomName: 'gaming',
  },
  {
    roomId: 4,
    roomName: 'chill',
  },
];

const dummyDMs = [
  {
    id: 1,
    name: 'Chad',
  },
  {
    id: 2,
    name: 'Jenna',
  },
  {
    id: 3,
    name: 'Autumn',
  },
  {
    id: 4,
    name: 'Mia',
  },
];

const LeftInside = () => {
  const [channels, setChannels] = useState(dummyChannels);
  const [directmessages, setDirectMessages] = useState(dummyDMs);

  return (
    <div className="flex w-96 flex-col border-r border-stone-600 p-5">
      <div className="mb-10">
        <h1 className="main-text text-xl font-bold text-white">Hiptzo Chat</h1>
      </div>
      <div className="flex h-full flex-col">
        <div tabIndex="0" className="collapse-arrow collapse">
          <input type="checkbox" />
          <div className="collapse-title text-base font-medium">CHANNELS</div>
          <div className="collapse-content space-y-1">
            {channels.map((channel) => (
              <Channels
                key={uuid()}
                id={channel.roomId}
                name={channel.roomName}
              />
            ))}
            <div className="flex items-center space-x-4">
              <AiOutlinePlus className="text-sm text-white" />
              <span className="text-sm">Create Channel</span>
            </div>
          </div>
        </div>
        <div tabIndex="0" className="collapse-arrow collapse">
          <input type="checkbox" />
          <div className="collapse-title text-base font-medium">
            DIRECT MESSAGES
          </div>
          <div className="collapse-content">
            {directmessages.map((message) => (
              <DirectMessages
                key={uuid()}
                id={message.id}
                name={message.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeftInside;
