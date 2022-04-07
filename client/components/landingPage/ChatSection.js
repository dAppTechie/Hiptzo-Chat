import Image from 'next/image';
import chatSvg from '/public/images/chat1.svg';

const ChatSection = () => {
  return (
    <section
      id="chat"
      className="mt-10 flex flex-col items-center justify-center md:flex-row"
    >
      <div className="w-10/12 md:w-2/5">
        <h1 className="main-text text-left font-bold text-white md:text-2xl">
          Decentralized communication
        </h1>
        <p className="secondary-text mt-3 text-left text-lg text-white">
          With Hiptzo, you can chat without giving up your data to the big tech
          giants. We offer a decentralized web3 chat app that makes it easy for
          teams to securely collaborate on any project, no matter where they are
          in the world. It's the next level of chat that supports crypto
          payments, in-chat tipping, audio and video call, plus more.
        </p>
      </div>
      <div>
        <Image src={chatSvg} width={406} height={407} alt="image" />
      </div>
    </section>
  );
};
export default ChatSection;
