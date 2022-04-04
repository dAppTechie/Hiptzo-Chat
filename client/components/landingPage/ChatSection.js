import Image from 'next/image';

import chatSvg from '../../public/images/chat1.svg';

const styles = {
  wrapper: 'flex flex-col md:flex-row items-center justify-center mt-10',
  textWrapper: 'md:w-2/5 w-10/12',
  h1: 'md:text-2xl font-bold text-left text-white main-text',
  p: 'text-left text-lg text-white mt-3 secondary-text',
};

const ChatSection = () => {
  return (
    <section id="chat" className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <h1 className={styles.h1}>Decentralized communication</h1>
        <p className={styles.p}>
          With Hiptzo, you can chat without giving up your data to the big tech
          giants. We offer a decentralized web3 chat app that makes it easy for
          teams to securely collaborate on any project, no matter where they are
          in the world. It's the next level of chat that supports crypto
          payments, in-chat tipping, audio & video call, and more.
        </p>
      </div>
      <div>
        <Image src={chatSvg} width={406} height={407} />
      </div>
    </section>
  );
};
export default ChatSection;
