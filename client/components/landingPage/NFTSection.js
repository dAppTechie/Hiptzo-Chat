import Image from 'next/image';

import NFTSvg from '../../public/images/NFT.svg';

const styles = {
  wrapper:
    'flex flex-col md:flex-row-reverse items-center justify-center mt-10',
  textWrapper: 'md:w-2/5 w-10/12',
  h1: 'md:text-2xl font-bold text-left text-white main-text',
  p: 'text-left text-lg text-white mt-3 secondary-text',
};

const NFTSection = () => {
  return (
    <section id="NFT" className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <h1 className={styles.h1}>Make your avatar a NFT</h1>
        <p className={styles.p}>
          With Hiptzo Chat, you can personalize your chat experience by making
          your avatar a Non-fungible token. Be the one of a kind in the world of
          chat apps.
        </p>
      </div>
      <div>
        <Image src={NFTSvg} width={406} height={407} />
      </div>
    </section>
  );
};
export default NFTSection;
