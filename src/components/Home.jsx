import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <img src="https://i.imgur.com/gjVmRDs.jpg" alt="" className="home-image" />
      <p className="home-text">
        Hi, welcome on our website, we made it to regroup some informations about EE Vendetta, this way it is easier for our new players to find them !
      </p>
      <p className="home-text">
        We hope this website will be usefull to you. If you encounter any problem here or in game, feel free to contact any Cassoulet's member or 0MaouSama0, we'd be happy to be of help !
      </p>
      <p className="home-text">On this website, you'll find a market place, that's the place where we will post any item we are selling, be it racial or altar related !</p>
      <p className="home-text">Before you go ordering, note that orders can take some time to prepare, as our stocks are limited, and multiple clients may order at the same time.</p>
      <p className="home-text-last"><b>Thanks for reading, enjoy your time here !</b></p>
    </div>
  )
};

export default Home;