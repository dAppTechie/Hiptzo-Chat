import { useSelector } from 'react-redux';

import {
  LeftMain,
  LeftInside,
  Main,
  RightMain,
  UserProfile,
  Profile,
} from '../components/chat';

const chat = () => {
  const profile = useSelector((state) => state.profile.value);

  return (
    <div className="absolute top-0 left-0 flex h-full w-full">
      <LeftMain />
      <LeftInside />
      <Main />
      {profile === 'user' && <UserProfile />}
      {profile === 'profile' && <Profile />}
      {profile === 'room' && <RightMain />}
    </div>
  );
};
export default chat;
