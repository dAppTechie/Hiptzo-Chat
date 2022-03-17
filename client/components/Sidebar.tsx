import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className="flex min-h-screen w-min flex-col items-center border-r-[1px] border-[#F2F2F2] bg-[#5E6D8C] pl-2 pr-2">
      <div className="mt-2 cursor-pointer">
        <Image src="/assets/images/logo1.svg" width={30} height={30} />
      </div>
      <div className="mt-5 flex flex-col items-center space-y-2">
        <div className="avatar online">
          <div className="w-11 cursor-pointer rounded-full ring-1 ring-[#F2F2F2]">
            <img src="https://api.lorem.space/image/face?hash=28212" />
          </div>
        </div>
        <div className="avatar online cursor-pointer">
          <div className="w-11 rounded-full ring-1 ring-[#F2F2F2]">
            <img src="https://api.lorem.space/image/face?hash=28288" />
          </div>
        </div>
        <div className="avatar online cursor-pointer">
          <div className="w-11 rounded-full ring-1 ring-[#F2F2F2]">
            <img src="https://api.lorem.space/image/face?hash=28299" />
          </div>
        </div>
        <div className="avatar offline cursor-pointer">
          <div className="w-11 rounded-full ring-1 ring-[#F2F2F2]">
            <img src="https://api.lorem.space/image/face?hash=28300" />
          </div>
        </div>
        <div className="avatar offline cursor-pointer">
          <div className="w-11 rounded-full ring-1 ring-[#F2F2F2]">
            <img src="https://api.lorem.space/image/face?hash=28322" />
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <div className="avatar cursor-pointer">
          <div className="w-11 rounded-full ring-1 ring-[#F2F2F2]">
            <img src="https://api.lorem.space/image/face?hash=3174" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
