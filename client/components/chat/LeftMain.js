import { useState } from 'react';
import uuid from 'react-uuid';

import Image from 'next/image';
import ChatLogoSVG from '/public/images/chatlogo.svg';

import OnlineFriends from '../../subComponents/OnlineFriends';

const dummyFriends = [
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
  {
    id: 5,
    name: 'Lacey',
  },
];

const LeftMain = () => {
  const [onlineFriends, setOnlineFriends] = useState(dummyFriends);

  return (
    <div className="flex w-fit flex-col items-center justify-between border-r border-stone-600 p-4">
      <div className="flex flex-col items-center space-y-4">
        <div>
          <Image src={ChatLogoSVG} alt="Logo" width={32} />
        </div>
        {onlineFriends.map((friend) => (
          <OnlineFriends key={uuid()} id={friend.id} name={friend.name} />
        ))}
      </div>
      <div>
        <div
          className="avatar cursor-pointer"
          onClick={() => dispatch(setUserProfile())}
        >
          <div className="w-12 rounded-full">
            <img src="https://api.lorem.space/image/face?hash=92310" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeftMain;
