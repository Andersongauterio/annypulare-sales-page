import './styles.css';
import instagramImg from '../../assets/images/instagram.png';
import youtubeImg from '../../assets/images/youtube.png';
import whatsappImg from '../../assets/images/whatsapp.png';
import websiteImg from '../../assets/images/website.png';

const Footer = () => {
  return (
    <div className='annypulare-footer-container'>
      <div className='annypulare-footer-images'>
        <img src={instagramImg} alt="Instagram" />
        <img src={youtubeImg} alt="Youtube" />
        <img src={whatsappImg} alt="WhatsApp" />
        <img src={websiteImg} alt="Site Annypulare" />
      </div>
    </div>
  );
};

export default Footer;