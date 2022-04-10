import {
  LeftMain,
  LeftInside,
  Main,
  RightMain,
  UserProfile,
  Profile,
} from '../components/chat';

const chat = () => {
  return (
    <div className="absolute top-0 left-0 flex h-full w-full">
      <LeftMain />
      <LeftInside />
      <Main />
      {/* <UserProfile />
      <Profile /> */}
      <RightMain />
    </div>
  );
};
export default chat;
