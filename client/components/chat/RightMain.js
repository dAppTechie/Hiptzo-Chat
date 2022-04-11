import { BsPersonPlus } from 'react-icons/bs';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { BsMic } from 'react-icons/bs';
import { BsCameraVideo } from 'react-icons/bs';
import { AiOutlineFileImage } from 'react-icons/ai';
import { AiOutlineFileText } from 'react-icons/ai';
import { AiOutlineDownload } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';

const RightMain = () => {
  return (
    <div className="flex w-96 flex-col items-center border-l border-stone-500 pt-5">
      <div className="avatar placeholder ">
        <div className="w-40 rounded-full bg-neutral-focus text-neutral-content">
          <span className="text-3xl">K</span>
        </div>
      </div>
      <div className="mt-3">
        <span className="text-white">test</span>
      </div>
      <div className=" mt-3 flex space-x-3 text-white">
        <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white bg-stone-700">
          <BsPersonPlus />
        </div>
        <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white  bg-stone-700">
          <AiOutlineFileSearch />
        </div>
        <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white  bg-stone-700">
          <BsMic />
        </div>
        <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white  bg-stone-700">
          <BsCameraVideo />
        </div>
      </div>
      <div tabIndex="0" className="collapse-arrow collapse mt-3 w-full">
        <input type="checkbox" />
        <div className="collapse-title text-base font-medium">About</div>
        <div className="collapse-content">
          <div className="flex flex-col space-y-1">
            <div className="flex flex-col rounded-tr-xl rounded-tl-xl bg-gray-400 p-2">
              <p className=" mb-1 text-xs text-black opacity-80">Topic</p>
              <span className=" text-xs text-black opacity-80">
                Lorem ipsom
              </span>
            </div>
            <div className="flex flex-col bg-gray-400 p-2">
              <p className=" mb-1 text-xs text-black opacity-80">Description</p>
              <span className=" text-xs text-black opacity-80">
                Lorem ipsom
              </span>
            </div>
            <div className="flex items-center space-x-1 rounded-br-xl rounded-bl-xl bg-gray-400 p-2">
              <div className="avatar">
                <div className="w-5 rounded-full">
                  <img src="https://api.lorem.space/image/face?hash=92310" />
                </div>
              </div>
              <span className=" text-xs text-black opacity-80">
                Created on April 5th, 2020
              </span>
            </div>
          </div>
        </div>
      </div>
      <div tabIndex="0" className="collapse-arrow collapse w-full">
        <input type="checkbox" />
        <div className="collapse-title text-base font-medium">Members</div>
        <div className="collapse-content">
          <ul>
            <li className="flex items-center space-x-1">
              <div className="avatar">
                <div className="w-5 rounded-full">
                  <img src="https://api.lorem.space/image/face?hash=92310" />
                </div>
              </div>
              <span className="text-xs">Someone Doe</span>
            </li>
          </ul>
        </div>
      </div>
      <div tabIndex="0" className="collapse-arrow collapse w-full">
        <input type="checkbox" />
        <div className="collapse-title text-base font-medium">Media</div>
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
export default RightMain;
