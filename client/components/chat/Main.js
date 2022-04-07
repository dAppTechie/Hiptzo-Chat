import MainHeader from '../../subComponents/MainHeader';
import ChatBox from '../../subComponents/ChatBox';
import UserName from '../../subComponents/UserName';

const Main = () => {
  return (
    <div className="flex w-full flex-col">
      {/* <MainHeader /> */}
      <UserName />
      <ChatBox />
    </div>
  );
};
export default Main;
