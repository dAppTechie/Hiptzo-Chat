import { IoIosArrowDown } from 'react-icons/io';
import { FiPlus } from 'react-icons/fi';

const InnerSidebar = () => {
  return (
    <div className="flex min-h-screen w-min flex-col bg-[#5E6D8C] p-1">
      <div className="mt-3 ml-5">
        <h1 className="text-white">Hiptzo Chat</h1>
      </div>
      <div className="mt-10 flex">
        <IoIosArrowDown className="mt-1 ml-5 cursor-pointer  text-white" />
        <h3 className="ml-2 cursor-pointer  text-white">CHANNELS</h3>
        <FiPlus className="ml-28 mt-1 cursor-pointer  text-white" />
      </div>

      <div className="mt-72 flex">
        <IoIosArrowDown className="mt-1 ml-5 cursor-pointer  text-white" />
        <h3 className="ml-2 cursor-pointer  text-white">DIRECT MESSAGES</h3>
      </div>
    </div>
  );
};
export default InnerSidebar;
