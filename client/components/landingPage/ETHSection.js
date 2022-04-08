import Image from 'next/image';

import ETHSvg from '/public/images/ETH.svg';

const ETHSection = () => {
  return (
    <section
      id="ETH"
      className="flex flex-col items-center justify-center md:mt-10 md:flex-row "
    >
      <div className="w-10/12 md:w-2/5">
        <h1 className="main-text text-left font-bold text-white md:text-2xl">
          Send Ethereum to other users
        </h1>
        <p className="secondary-text mt-3 text-left text-lg text-white">
          The next generation of chat is here and it's all powered by Ethereum.
          Send Ethereum to other users, and even pay for goods and services.
          Encourage a healthier world with Hiptzo!
        </p>
      </div>
      <div className="mt-5">
        <Image src={ETHSvg} width={250} height={250} />
      </div>
    </section>
  );
};
export default ETHSection;
