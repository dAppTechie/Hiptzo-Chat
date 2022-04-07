import { useMoralis } from 'react-moralis';
import { FaRegUserCircle } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const UserName = () => {
  const { setUserData, userError, isUserUpdating, user } = useMoralis();
  return (
    <div className="sticky top-0 flex h-fit items-center justify-center border-b border-stone-500 p-4 px-5">
      {userError && <p>{userError.message}</p>}
      <AiOutlineClose className="absolute right-0 mr-4 text-white" />
      <FaRegUserCircle className="mr-2 text-3xl text-white opacity-50" />
      <input
        type="text"
        placeholder="Change user name"
        className="input w-full max-w-xs"
      />
    </div>
  );
};
export default UserName;
