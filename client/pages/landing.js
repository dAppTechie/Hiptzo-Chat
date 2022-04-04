import {
  Hero,
  ChatSection,
  NFTSection,
  ETHSection,
  Footer,
} from '../components/landingPage';

const landing = () => {
  return (
    <div id="home" className="my-0 mx-auto">
      <Hero />
      <ChatSection />
      <NFTSection />
      <ETHSection />
      <Footer />
    </div>
  );
};
export default landing;
