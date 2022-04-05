import { LeftMain, LeftInside, Main, RightMain } from '../components/chat';

const chat = () => {
  return (
    <div className="absolute top-0 left-0 flex h-full w-full">
      <LeftMain />
      <LeftInside />
      <Main />
      <RightMain />
    </div>
  );
};
export default chat;
