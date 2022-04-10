import MainHeader from '../../subComponents/MainHeader';
import ChatBox from '../../subComponents/ChatBox';
import UserName from '../../subComponents/UserName';
import Search from '../../subComponents/Search';

const Main = () => {
  return (
    <div className="flex w-full flex-col">
      <MainHeader />
      {/* <UserName />
      <Search /> */}
      <ChatBox />
    </div>
  );
};
export default Main;
