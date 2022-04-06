import { BsGear } from 'react-icons/bs';

const MainHeader = () => {
  return (
    <div className="sticky top-0 flex h-fit items-center justify-between border-b border-stone-500 p-4 px-5">
      <div className="flex items-center space-x-72">
        <h2 className="main-text text-white">#room-name</h2>
        <div className="avatar-group -space-x-3">
          <div className="avatar">
            <div className="w-9">
              <img src="https://api.lorem.space/image/face?hash=4818" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-9">
              <img src="https://api.lorem.space/image/face?hash=40311" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-9">
              <img src="https://api.lorem.space/image/face?hash=84348" />
            </div>
          </div>
          <div className="avatar placeholder">
            <div className="w-9 bg-neutral-focus text-neutral-content">
              <span className="text-xs">+10</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <BsGear />
      </div>
    </div>
  );
};
export default MainHeader;
