// TODO Profile
// TODO User Profile

import Image from 'next/image';
import ChatLogoSVG from '/public/images/chatlogo.svg';
import { useDispatch } from 'react-redux';
import { setUserProfile } from '../../redux/profileSlice';

const LeftMain = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex w-fit flex-col items-center justify-between border-r border-stone-600 p-4">
      <div className="flex flex-col items-center space-y-4">
        <div>
          <Image src={ChatLogoSVG} alt="Logo" width={32} />
        </div>
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://api.lorem.space/image/face?hash=28212" />
          </div>
        </div>
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://api.lorem.space/image/face?hash=27212" />
          </div>
        </div>
        <div className="avatar offline">
          <div className="w-12 rounded-full">
            <img src="https://api.lorem.space/image/face?hash=26212" />
          </div>
        </div>
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://api.lorem.space/image/face?hash=25212" />
          </div>
        </div>
        <div className="avatar offline">
          <div className="w-12 rounded-full">
            <img src="https://api.lorem.space/image/face?hash=24212" />
          </div>
        </div>
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
