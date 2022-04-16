import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <img src="https://i.imgur.com/gjVmRDs.jpg" alt="" className="home-image" />
      <p className="home-text">
        Hi, welcome, you can find here some informations about racial crafting !
      </p>
      <p className="home-text">
        I hope this website can be usefull to some, if you encounter any problem
        here or in game, feel free to send us a message using the contact page,
        we would be happy to be of help.
      </p>
      <p className="home-text">If by any chance you are not interested in crafting it by yourself, you can go to the market section and directly order whatever you need. (Note that we may not have all the craftable items for now, but fret not ! We are currently working on it !).</p>
      <p className="home-text">Before you go ordering, note that orders can take some time to prepare, as our stocks are limited, and multiple clients may order at the same time.</p>
      <p className="home-text-last"><b>Thanks for reading, enjoy your time here !</b></p>
    </div>
  )
};

export default Home;