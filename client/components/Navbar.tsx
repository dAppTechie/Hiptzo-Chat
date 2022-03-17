import { HiOutlineCog } from 'react-icons/hi';

const Navbar = () => {
  return (
    <nav className="sticky h-[73px] border-b-[1px] border-[#F2F2F2] bg-[#5E6D8C]">
      <div className="flex items-center justify-between p-5">
        <h2 className="text-white">#channel-name</h2>
        <div className="avatar-group -space-x-2">
          <div className="avatar">
            <div className="w-6 ring-[#5E6D8C]">
              <img src="https://api.lorem.space/image/face?hash=4818" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-6 ring-[#5E6D8C]">
              <img src="https://api.lorem.space/image/face?hash=40311" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-6 ring-[#5E6D8C]">
              <img src="https://api.lorem.space/image/face?hash=84348" />
            </div>
          </div>
          <div className="avatar placeholder">
            <div className="w-6 bg-neutral-focus text-neutral-content">
              <span>+99</span>
            </div>
          </div>
        </div>
        <div className="text-white">
          <HiOutlineCog />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
