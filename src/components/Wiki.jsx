import './wiki.css';
import boss from '../content/boss';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyContext from '../context/MyContext';

const Wiki = () => {
  const { language } = useContext(MyContext);
  return (
    <div className="wiki-container">
      <div className="wiki-search"></div>
      <div className="wiki-result">
        {boss.map(one => <div key={one.name} className="wiki-item">
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