import { HiOutlineChevronDown } from 'react-icons/hi';
import { HiOutlinePlus } from 'react-icons/hi';

const InnerSidebar = () => {
  return (
    <div className="flex min-h-screen w-min flex-col bg-[#5E6D8C] p-3">
      <div className="mt-3 ml-2 text-xl">
        <h1 className="text-white">Hiptzo Chat</h1>
      </div>
      <div className="mt-10 flex items-center space-x-36">
        <div className="flex items-center space-x-1">
          <HiOutlineChevronDown className="cursor-pointer  text-white" />
          <h3 className="cursor-pointer text-white">CHANNELS</h3>
        </div>
        <div>
          <HiOutlinePlus className="cursor-pointer  text-white" />
        </div>
      </div>

      <div className="mt-60 flex items-center space-x-1">
        <HiOutlineChevronDown className="cursor-pointer  text-white" />
        <h3 className="cursor-pointer  text-white">DIRECT MESSAGES</h3>
      </div>
    </div>
  );
};
export default InnerSidebar;
