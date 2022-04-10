import { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import { AiOutlinePlus } from 'react-icons/ai';

import Channels from '../../subComponents/Channels';
import DirectMessages from '../../subComponents/DirectMessages';
import { Router } from 'next/router';

const LeftInside = () => {
  const [channels, setChannels] = useState([]);
  const [directmessages, setDirectMessages] = useState([]);

  useEffect(async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/getchannels`
      );

      const data = await response.json();
      setChannels(data);
      Router.push(`?channel=${data[0].roomId}&name=${data[0].roomName}`);
    } catch (error) {
      console.error(error);
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/getdms`);

      const dms = await response.json();
      setDirectMessages(dms);
      console.log('dm', dms);
    } catch (error) {
      console.error(error);
    }
  }, []);

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
