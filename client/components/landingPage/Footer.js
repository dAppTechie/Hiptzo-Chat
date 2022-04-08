import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiTwitterLine,
  RiYoutubeLine,
  RiLinkedinBoxLine,
} from 'react-icons/ri';

const Footer = () => {
  return (
    <div className=" mt-20 flex flex-col items-center justify-center md:mt-36">
      <h1 className="main-text text-left text-2xl font-bold text-white md:text-6xl">
        The Future of Chat is Now
      </h1>
      <p className="main-text mt-10 text-white md:text-xl">Connect with us</p>
      <div className="mt-5 flex items-center justify-between">
        <RiFacebookCircleLine className="text-3xl md:text-5xl" />
        <RiInstagramLine className="text-3xl md:text-5xl" />
        <RiTwitterLine className="text-3xl md:text-5xl" />
        <RiYoutubeLine className="text-3xl md:text-5xl" />
        <RiLinkedinBoxLine className="text-3xl md:text-5xl" />
      </div>
      <p className="mt-5 mb-10 text-xs text-white md:mt-10 md:text-sm">
        Copyright &copy; {new Date().getFullYear()} Hiptzo Chat All Rights
        Reserved
      </p>
    </div>
  );
};
export default Footer;
