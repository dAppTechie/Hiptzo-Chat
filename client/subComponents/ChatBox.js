import { ImAttachment } from 'react-icons/im';
import { FiSmile } from 'react-icons/fi';

const ChatBox = () => {
  return (
    <div className="center sticky top-0 z-10 mx-auto mb-5 mt-auto flex w-full items-center justify-center space-x-4">
      <div className="avatar">
        <div className="w-10 rounded-full">
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
    </div>
  );
};
export default ChatBox;
