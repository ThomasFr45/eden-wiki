import './wiki.css';
import boss from '../content/boss';

const Wiki = () => {
  return (
    <div className="wiki-container">
      <div className="wiki-search"></div>
      <div className="wiki-result">
        {boss.map(one => <div key={one.name} className="wiki-item">
          <div className="wiki-item-content">
            <img src="https://via.placeholder.com/150" alt="boss-img" />
            <div className="wiki-item-infos">
              <ul>
                <li>{localStorage.getItem('language') === 'en' ? 'Name:' : 'Nom:'} {one.name}</li>
                <li>{localStorage.getItem('language') === 'en' ? 'Level:' : 'Niveau:'} {one.level}</li>
                <li>{localStorage.getItem('language') === 'en' ? 'Location:' : 'Lieu:'} {one.location}</li>
                <li>{localStorage.getItem('language') === 'en' ? 'Soloable:' : 'Solotable:'} {one.soloable ? 'Oui' : 'Non'}</li>
              </ul>
            </div>
          </div>
        </div>)}
      </div>
      <div className="wiki-nosearch"></div>
    </div>
  );
}

export default Wiki;