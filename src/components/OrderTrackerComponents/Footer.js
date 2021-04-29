import { Link } from 'react-router-dom';
import SocialFollow from './socialFollow/SocialFollow.js';

const Footer = () => {
  return (
    <footer>
      <SocialFollow />
      <p>Copyright &copy; 2021</p>
      <Link to='about'>About</Link>
    </footer>
  );
};

export default Footer;
