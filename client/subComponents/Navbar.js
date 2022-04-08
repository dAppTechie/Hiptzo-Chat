const Navbar = () => {
  const login = async () => {};
  const logOut = async () => {};

  return (
    <div className="gradient-bg sticky top-0 z-10 flex h-20 w-full justify-between">
      <div className="ml-20 flex items-center">
        <a href="#home">
          <h1 className="main-text cursor-pointer text-4xl font-bold text-white">
            Hiptzo Chat
          </h1>
        </a>
      </div>
      <div className="mr-5 hidden w-fit items-center space-x-4 md:flex">
        <ul className="main-text flex space-x-4 text-white">
          <a href="#chat">
            <li className="cursor-pointer hover:text-[#FF7F50]">Chat</li>
          </a>
          <a href="#NFT">
            <li className="cursor-pointer hover:text-[#FF7F50]">NFT</li>
          </a>
          <a href="#ETH">
            <li className="cursor-pointer hover:text-[#FF7F50]">Send ETH</li>
          </a>
        </ul>
        <div className="flex items-center">
          <button
            onClick={login}
            className="main-text rounded-full border border-[#FF7F50] bg-[#FF7F50] bg-opacity-25 py-2 px-4 text-sm font-bold text-[#FF7F50] hover:border-opacity-10 hover:bg-[#FF7F50] hover:text-white"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
