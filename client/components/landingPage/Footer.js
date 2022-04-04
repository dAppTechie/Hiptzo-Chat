import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiTwitterLine,
  RiYoutubeLine,
  RiLinkedinBoxLine,
} from 'react-icons/ri';

const styles = {
  wrapper: 'flex flex-col items-center justify-center md:mt-36 mt-20',
  h1: 'md:text-6xl text-2xl font-bold text-left text-white main-text',
  p: 'mt-10 md:text-xl text-white main-text',
  iconWrapper: 'flex justify-between items-center mt-5',
  icons: 'md:text-5xl text-3xl',
  copy: 'text-xs md:text-sm md:mt-10 mt-5 mb-10 text-white',
};

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>The Future of Chat is Now</h1>
      <p className={styles.p}>Connect with us</p>
      <div className={styles.iconWrapper}>
        <RiFacebookCircleLine className={styles.icons} />
        <RiInstagramLine className={styles.icons} />
        <RiTwitterLine className={styles.icons} />
        <RiYoutubeLine className={styles.icons} />
        <RiLinkedinBoxLine className={styles.icons} />
      </div>
      <p className={styles.copy}>
        Copyright &copy; {new Date().getFullYear()} Hiptzo Chat All Rights
        Reserved
      </p>
    </div>
  );
};
export default Footer;
