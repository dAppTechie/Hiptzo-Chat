import { useState, useEffect } from 'react';
import { FiUsers } from 'react-icons/fi';
import { BsGear } from 'react-icons/bs';

import { useMoralis } from 'react-moralis';

const channelInfo = [
  {
    id: 1,
    users: 20,
    name: '#general',
    description: 'Welcome to Hiptzo Chat',
  },
];

const MainHeader = () => {
  // const [channelitems, setChannelItems] = useState(channelInfo);
  const { id, users, name, description } = channelInfo[0];
  const { logout } = useMoralis();

  return (
    <div className="sticky top-0 flex h-fit items-center justify-between border-b border-stone-500 p-4 px-5">
      <div className="flex flex-col space-y-1">
        <div className="flex items-center">
          <h2 className="main-text mr-5 text-white">{name}</h2>
          <FiUsers className="mr-1 text-white" />
          <span className="text-white">{users}</span>
          <span className="ml-5 cursor-pointer" onClick={() => logout()}>
            Logout
          </span>
        </div>
        <p className="main-text text-sm">{description}</p>
      </div>

      <div>
        <BsGear />
      </div>
    </div>
  );
};
export default MainHeader;
