import './styles.css';
import instagramImg from '../../assets/images/instagram.png';
import youtubeImg from '../../assets/images/youtube.png';
import whatsappImg from '../../assets/images/whatsapp.png';
import websiteImg from '../../assets/images/website.png';

const Footer = () => {
  return (
    <div className='annypulare-footer-container'>
      <div className='annypulare-footer-images'>
        <a href="https://www.instagram.com/annypulare">
          <img src={instagramImg} alt="Instagram" />
        </a>
        <a href="https://www.youtube.com/@Annypulare">
          <img src={youtubeImg} alt="Youtube" />
        </a>
        <a href="https://wa.me/5197559610">
          <img src={whatsappImg} alt="WhatsApp" />
        </a>
        <a href="https://www.annypulare.com.br">
          <img src={websiteImg} alt="Site Annypulare" />
        </a>
      </div>
    </div>
  );
};

export default Footer;