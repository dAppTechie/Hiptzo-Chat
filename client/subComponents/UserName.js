import { useMoralis } from 'react-moralis';
import { useDispatch } from 'react-redux';
import { FaRegUserCircle } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { setDefaultHeader } from '../redux/headSlice';

const UserName = () => {
  const { setUserData, userError, isUserUpdating, user } = useMoralis();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({ username: e.target.value });
  };

  return (
    <div className="sticky top-0 flex h-fit flex-col items-center justify-center border-b border-stone-500 p-4 px-5">
      {userError && <p className="ml-9">{userError.message}</p>}
      <div className="flex w-full items-center justify-center">
        <AiOutlineClose
          className="absolute right-0 mr-4 cursor-pointer text-white"
          onClick={() => dispatch(setDefaultHeader())}
        />
        <FaRegUserCircle className="mr-2 text-3xl text-white opacity-50" />
        <input
          type="text"
          placeholder="Change user name"
          className="input w-full max-w-xs"
          onKeyPress={(e) => {
            e.key === 'Enter' && handleSubmit(e);
          }}
        />
      </div>
    </div>
  );
};
export default UserName;
