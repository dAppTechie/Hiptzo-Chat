import { BsPersonPlus } from 'react-icons/bs';
import { BsPersonX } from 'react-icons/bs';
import { FaEthereum } from 'react-icons/fa';
import { BiBlock } from 'react-icons/bi';
import { BsCameraVideo } from 'react-icons/bs';
import { BiMessageRoundedAdd } from 'react-icons/bi';
import { AiOutlineFileImage } from 'react-icons/ai';
import { AiOutlineFileText } from 'react-icons/ai';
import { AiOutlineDownload } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';

const Profile = () => {
  return (
    <div className="flex w-96 flex-col items-center border-l border-stone-500 pt-5">
      <div className="avatar placeholder ">
        <div className="relative w-40 rounded-full bg-neutral-focus text-neutral-content">
          <span className="text-3xl">Avatar</span>
        </div>
        <div className="absolute bottom-0 left-4 flex h-9 w-9 items-center justify-center rounded-full border border-white bg-stone-700">
          <BiBlock className="text-white" />
        </div>
        <div className="absolute right-4 bottom-0 flex h-9 w-9 items-center justify-center rounded-full border border-white bg-stone-700">
          <BsPersonPlus className="text-white" />
        </div>
      </div>
      <div className="mt-3 flex flex-col items-center">
        <span className="text-white">UserName</span>
        <span className="text-[#FF7F50]">0x0bcd....bcbc</span>
      </div>
      <div className=" mt-3 flex space-x-3 text-white">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white bg-stone-700">
          <BiMessageRoundedAdd className="text-white" />
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white bg-stone-700">
          <BsCameraVideo className="text-white" />
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white bg-stone-700">
          <FaEthereum className="text-white" />
        </div>
      </div>
      <div tabIndex="0" className="collapse-arrow collapse mt-14 w-full">
        <input type="checkbox" />
        <div className="collapse-title text-base font-medium">
          Uploaded Media
        </div>
        <div className="collapse-content">
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white bg-stone-700">
                <AiOutlineFileText className="text-[#FF7F50]" />
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-xs text-white">Transactions.pdf</span>
                  <span className="flex items-center text-xs">
                    4-5-2022 <IoIosArrowForward className="text-xs" /> 150 KB
                  </span>
                </div>
                <div>
                  <AiOutlineDownload className="text-white" />
                </div>
              </div>
            </li>
            <li className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white bg-stone-700">
                <AiOutlineFileImage className="text-[#FF7F50]" />
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-xs text-white">me.png</span>
                  <span className="flex items-center text-xs">
                    4-4-2022 <IoIosArrowForward className="text-xs" /> 150 KB
                  </span>
                </div>
                <div>
                  <AiOutlineDownload className="text-white" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Profile;
