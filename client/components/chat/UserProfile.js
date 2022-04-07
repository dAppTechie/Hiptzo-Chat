import { useMoralis } from 'react-moralis';
import { useDispatch } from 'react-redux';

import { AiOutlineFileImage } from 'react-icons/ai';
import { AiOutlineFileText } from 'react-icons/ai';
import { AiOutlineDownload } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';
import { setDefaultProfile } from '../../redux/profileSlice';
import { shortenAddress } from '../../utils/shortenAddress';

const UserProfile = () => {
  const { user, logout, account } = useMoralis();
  const currentUser = user;
  const ethAddress = user.attributes.ethAddress;

  const dispatch = useDispatch();

  const logOut = async () => {
    await logout();
    console.log('logged out');
  };

  return (
    <div className="relative flex w-96 flex-col items-center border-l border-stone-500 pt-5">
      <AiOutlineClose
        className="absolute top-2 right-2 cursor-pointer text-white"
        onClick={() => dispatch(setDefaultProfile())}
      />
      <div className="avatar placeholder ">
        <div className="w-40 rounded-full bg-neutral-focus text-neutral-content">
          <span className="text-3xl">Avatar</span>
        </div>
      </div>
      <div className="mt-3 flex flex-col items-center">
        <span className="text-white">UserName</span>
        <span className="text-[#FF7F50]">{shortenAddress(ethAddress)}</span>
        <button className="mt-3 text-[#FFBA7A]" onClick={logOut}>
          LOGOUT
        </button>
      </div>
      <div tabIndex="0" className="collapse-arrow collapse w-full">
        <input type="checkbox" />
        <div className="collapse-title text-base font-medium">Friends</div>
        <div className="collapse-content">
          <ul>
            <li className="flex items-center space-x-1">
              <div className="avatar">
                <div className="w-5 rounded-full">
                  <img src="https://api.lorem.space/image/face?hash=92310" />
                </div>
              </div>
              <span className="text-xs">Someone Doe</span>
            </li>
          </ul>
        </div>
      </div>
      <div tabIndex="0" className="collapse-arrow collapse w-full">
        <input type="checkbox" />
        <div className="collapse-title text-base font-medium">
          Uploaded Media
        </div>
        <div className="collapse-content">
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white bg-stone-700">
                <AiOutlineFileText className="text-[#FF7F50]" />
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-xs text-white">Transactions.pdf</span>
                  <span className="flex items-center text-xs">
                    4-5-2022 <IoIosArrowForward className="text-xs" /> 150 KB
                  </span>
                </div>
                <div>
                  <AiOutlineDownload className="text-white" />
                </div>
              </div>
            </li>
            <li className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white bg-stone-700">
                <AiOutlineFileImage className="text-[#FF7F50]" />
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-xs text-white">me.png</span>
                  <span className="flex items-center text-xs">
                    4-4-2022 <IoIosArrowForward className="text-xs" /> 150 KB
                  </span>
                </div>
                <div>
                  <AiOutlineDownload className="text-white" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
