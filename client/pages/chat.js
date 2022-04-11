import { useSelector } from 'react-redux';
import { currentProfile } from '../redux/profileSlice';
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
      {profile === 'room' && <RightMain />}
      {profile === 'user' && <UserProfile />}
      {profile === 'profile' && <Profile />}
    </div>
  );
};
export default chat;
