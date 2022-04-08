import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import { setDefaultHeader } from '../redux/headSlice';
import { RiUserSearchLine } from 'react-icons/ri';

const Search = () => {
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName();
  };

  return (
    <div className="sticky top-0 flex h-fit flex-col items-center justify-center border-b border-stone-500 p-4 px-5">
      <div className="flex w-full items-center justify-center">
        <AiOutlineClose
          className="absolute right-0 mr-4 cursor-pointer text-white"
          onClick={() => dispatch(setDefaultHeader())}
        />
        <RiUserSearchLine className="mr-2 text-3xl text-white opacity-50" />
        <input
          type="text"
          placeholder="Search username"
          className="input w-full max-w-xs"
          onKeyPress={(e) => {
            e.key === 'Enter' && handleSubmit(e);
          }}
        />
      </div>
    </div>
  );
};
export default Search;
