import { HiUserAdd } from 'react-icons/hi';
import { HiDocumentSearch } from 'react-icons/hi';
import { HiMicrophone } from 'react-icons/hi';
import { HiVideoCamera } from 'react-icons/hi';
import { HiOutlineChevronDown } from 'react-icons/hi';

const GroupBar = () => {
  return (
    <div className="flex w-min flex-col items-center bg-[#5E6D8C] p-5">
      <div className="mb-2">
        <div className="avatar">
          <div className="w-40 rounded-full ring-1 ring-[#F2F2F2]">
            <img src="https://api.lorem.space/image/face?hash=3174" />
          </div>
        </div>
      </div>
      <div className="mb-3 text-white">
        <p>#channel-name</p>
      </div>
      <div className="mt-2 flex space-x-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-[#F2F2F2] bg-[#525863] text-white">
          <HiUserAdd className="h-6 w-6" />
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-[#F2F2F2] bg-[#525863] text-white">
          <HiDocumentSearch className="h-6 w-6" />
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-[#F2F2F2] bg-[#525863] text-white">
          <HiMicrophone className="h-6 w-6" />
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-[1px] border-[#F2F2F2] bg-[#525863] text-white">
          <HiVideoCamera className="h-6 w-6" />
        </div>
      </div>
      <div className="mt-5 flex items-center space-x-40">
        <p className="text-white">About</p>
        <HiOutlineChevronDown className="text-white" />
      </div>
    </div>
  );
};
export default GroupBar;
