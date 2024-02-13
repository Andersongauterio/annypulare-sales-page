import './styles.css';
import Header from '../../components/header';
import Card from '../../components/card';
import Button from '../../components/button';
import Footer from '../../components/footer';

const Home = () => {
  return (
    <div className='annypulare-home-container'>
      <div className='annypulare-home-header'>
        <Header />
      </div>
      <div className='annypulare-home-card'>
        <Card />
      </div>
      <div className='annypulare-home-button'>
        <Button />
      </div>
      <div className='annypulare-home-footer'>
        <Footer />
      </div>
    </div>
  );
};

export default Home;