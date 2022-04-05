import { AiOutlinePlus } from 'react-icons/ai';

const LeftInside = () => {
  return (
    <div className="flex w-96 flex-col border-r border-stone-600 p-5">
      <div className="mb-10">
        <h1 className="main-text text-xl font-bold text-white">Hiptzo Chat</h1>
      </div>
      <div className="flex h-full flex-col space-y-40">
        <div tabindex="0" className="collapse collapse-arrow">
          <input type="checkbox" />
          <div className="collapse-title text-base font-medium">CHANNELS</div>
          <div className="collapse-content">
            <ul>
              <li># test</li>
            </ul>
            <div className="mt-5 flex items-center space-x-4">
              <AiOutlinePlus className="text-sm text-white" />
              <span className="text-sm">Create Channel</span>
            </div>
          </div>
        </div>
        <div tabindex="0" className="collapse collapse-arrow">
          <input type="checkbox" />
          <div className="collapse-title text-base font-medium">
            DIRECT MESSAGES
          </div>
          <div className="collapse-content">
            <ul>
              <li># test</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeftInside;
