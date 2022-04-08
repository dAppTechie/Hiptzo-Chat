import Image from 'next/image';

import NFTSvg from '../../public/images/NFT.svg';

const NFTSection = () => {
  return (
    <section
      id="NFT"
      className="mt-10 flex flex-col items-center justify-center md:flex-row-reverse"
    >
      <div className="w-10/12 md:w-2/5">
        <h1 className="main-text text-left font-bold text-white md:text-2xl">
          Make your avatar a NFT
        </h1>
        <p className="secondary-text mt-3 text-left text-lg text-white">
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
