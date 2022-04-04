import Image from 'next/image';

import ETHSvg from '../../public/images/ETH.svg';

const styles = {
  wrapper: 'flex flex-col md:flex-row items-center justify-center md:mt-10 ',
  textWrapper: 'md:w-2/5 w-10/12',
  h1: 'md:text-2xl font-bold text-left text-white main-text',
  p: 'text-left text-lg text-white mt-3 secondary-text',
};

const ETHSection = () => {
  return (
    <section id="ETH" className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <h1 className={styles.h1}>Send Ethereum to other users</h1>
        <p className={styles.p}>
          The next generation of chat is here and it's all powered by Ethereum.
          Send Ethereum to other users, and even pay for goods and services.
          Encourage a healthier world with Hiptzo!
        </p>
      </div>
      <div>
        <Image src={ETHSvg} width={300} height={300} />
      </div>
    </section>
  );
};
export default ETHSection;
