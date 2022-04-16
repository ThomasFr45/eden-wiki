import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <img src="https://i.imgur.com/gjVmRDs.jpg" alt="" className="home-image" />
      {localStorage.getItem('language') === 'en' ? (<><p className="home-text">
        Hi, welcome on our website, we made it to regroup some informations about EE Vendetta, this way it is easier for our new players to find them !
      </p>
      <p className="home-text">
        We hope this website will be usefull to you. If you encounter any problem here or in game, feel free to contact any Cassoulet's member or 0MaouSama0, we'd be happy to be of help !
      </p>
      <p className="home-text">On this website, you'll find a market place, that's the place where we will post any item we are selling, be it racial or altar related !</p>
      <p className="home-text">Before you go ordering, note that orders can take some time to prepare, as our stocks are limited, and multiple clients may order at the same time.</p>
      <p className="home-text-last"><b>Thanks for reading, enjoy your time here !</b></p></>) : (<><p className="home-text">
        Salut et bienvenue sur notre site ! Nous l'avons mis en place pour regrouper quelques informations sur EE Vendetta, pour faire en sorte que les nouveaux joueurs les trouvent plus facilement !
      </p>
      <p className="home-text">
        Nous espérons que ce site vous sera utile. Si vous avez un problème ou des questions, n'hésitez pas à contacter un membre de Cassoulet ou 0MaouSama0. Nous serons heureux de pouvoir vous aider !
      </p>
      <p className="home-text">Sachez que vous trouverez aussi une page consacrée au commerce, c'est là bas que nous posterons les objets que nous avons à vendre, que ce soit des objets issue d'artisanat de race, ou drop dans les autels.</p>
      <p className="home-text">Avant toute commande, notez que nos stocks sont limités et que plusieurs personnes peuvent passer commande à la fois. Il se peut donc que l'on vous fasse attendre.</p>
      <p className="home-text-last"><b>Merci d'avoir lu, bonne continuation !</b></p></>)}
    </div>
  )
};

export default Home;