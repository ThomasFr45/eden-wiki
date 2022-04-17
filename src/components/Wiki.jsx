import './wiki.css';
import boss from '../content/boss';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../context/MyContext';

const Wiki = () => {
  const [search, setSearch] = useState('');
  const { language } = useContext(MyContext);
  return (
    <div className="wiki-container">
      <p className="wiki-infos">{language === 'en' ? "Here is the wiki page, you'll find some informations about endgame boss and dungeons, if you are looking for a specific boss or dungeon, type his name in the search bar, and you should get a result. If you can't find what you are looking for, you can pm 0MaouSama0 or ask one of Cassoulet's members" : 'Voici notre page de wiki, vous trouverez ici des informations sur les donjons et boss endgame. Si vous en cherchez un en particulier, tapez son nom dans la barre de recherche. Si vous ne trouvez pas ce que vous cherchez, vous pouvez mp 0MaouSama0, on demander à un membre de Cassoulet.'}</p>
      <div className="wiki-search">
        <input placeholder='Karen... Heavon Of Oblivion... HoO... Abyss...' type="text" className="wiki-searchbar" value={search} onChange={(e) => setSearch(e.target.value)}/>
      </div>
      <div className="wiki-result">
        {boss.filter(good => good.name.toLowerCase().includes(search.toLowerCase()) || good.location.toLowerCase().includes(search.toLowerCase()) || good.short?.toLowerCase().includes(search.toLowerCase())).map(one => <div key={one.name} className="wiki-item">
          <div className="wiki-item-content">
            <img src="https://via.placeholder.com/150" alt="boss-img" />
            <div className="wiki-item-infos">
              <ul>
                <li>{language === 'en' ? 'Name:' : 'Nom:'} {one.name}</li>
                <li>{language === 'en' ? 'Level:' : 'Niveau:'} {one.level}</li>
                <li>{language === 'en' ? 'Location:' : 'Lieu:'} {one.location}</li>
                <li>{language === 'en' ? 'Soloable:' : 'Solotable:'} {one.soloable ? localStorage.getItem('language') === 'en' ? 'Yes' : 'Oui': localStorage.getItem('language') === 'en' ? 'No' : 'Non'}</li>
              </ul>
            </div>
          </div>
          <div className='wiki-item-button'><Link to={`${one.name}`}><p>{localStorage.getItem('language') === 'en' ? 'More' : 'Plus'}</p></Link></div>
        </div>)}
      </div>
      <div className="wiki-nosearch"></div>
    </div>
  );
}

export default Wiki;