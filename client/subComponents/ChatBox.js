import { RiSendPlaneFill } from 'react-icons/ri';
import { ImAttachment } from 'react-icons/im';
import { FiSmile } from 'react-icons/fi';

const ChatBox = () => {
  return (
    <div className="center item-center sticky top-0 z-10 mx-auto mb-5 mt-auto flex w-full justify-center space-x-4">
      <div class="avatar">
        <div class="w-10 rounded-full">
          <img src="https://api.lorem.space/image/face?hash=96310" />
        </div>
      </div>
      <div className=" flex h-10 w-1/2 items-center space-x-3 rounded-xl border border-stone-500 bg-stone-800 px-4">
        <input
          className="w-full bg-stone-800 opacity-50 outline-none"
          type="text"
          placeholder="Type a message"
        />{' '}
        <ImAttachment className="text-white opacity-50" />
        <FiSmile className="text-white opacity-50" />
      </div>
      <button className="flex flex-row items-center rounded-lg bg-[#FF7F50] px-5 text-white">
        <RiSendPlaneFill className="mr-1" />
        Send
      </button>
    </div>
  );
};
export default ChatBox;
