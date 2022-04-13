import { useEffect, useState } from 'react';
import { useNewMoralisObject, useMoralis } from 'react-moralis';
import uuid from 'react-uuid';
import { AiOutlinePlus } from 'react-icons/ai';

import Channels from '../../subComponents/Channels';
import DirectMessages from '../../subComponents/DirectMessages';

const LeftInside = () => {
  const [channels, setChannels] = useState([]);
  const [directmessages, setDirectMessages] = useState([]);
  const { user } = useMoralis();
  useEffect(async () => {}, []);

  console.log('user', user);

  const makeChannel = async () => {};

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
            <div
              className="flex cursor-pointer items-center space-x-4"
              onClick={makeChannel}
            >
              <AiOutlinePlus className="text-sm text-[#FDE05D]" />
              <span className="text-sm text-[#FDE05D]">Create Channel</span>
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
