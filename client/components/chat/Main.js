import { useSelector } from 'react-redux';
import MainHeader from '../../subComponents/MainHeader';
import ChatBox from '../../subComponents/ChatBox';
import UserName from '../../subComponents/UserName';
import Search from '../../subComponents/Search';

const Main = () => {
  const header = useSelector((state) => state.header.value);
  return (
    <div className="flex w-full flex-col">
      {header === 'navbar' && <MainHeader />}
      {header === 'userName' && <UserName />}
      {header === 'searchBar' && <Search />}
      <ChatBox />
    </div>
  );
};
export default Main;
