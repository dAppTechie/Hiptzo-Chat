import {
  Hero,
  ChatSection,
  NFTSection,
  ETHSection,
  Footer,
} from '../components/landingPage';
import Navbar from '../subComponents/Navbar';

const landing = () => {
  return (
    <div id="home" className="my-0 mx-auto">
      <Navbar />
      <Hero />
      <ChatSection />
      <NFTSection />
      <ETHSection />
      <Footer />
    </div>
  );
};
export default landing;
