import { useParams } from 'react-router-dom';
import boss from '../content/boss';
import './details.css';

const Details = () => {
  const toSearch = useParams().boss;
  const result = boss.filter(one => one.name === toSearch)[0];
  return (
    <div className="details-container">
      <h3 className="details-title">{result.name}</h3>
      <div className="details-text">
        {localStorage.getItem('language') === 'en' ? result.en.split('/n').map(one => <p key={one}>{one}</p>) : result.fr.split('/n').map(one => <p key={one}>{one}</p>)}
      </div>
    </div>
  );
}

export default Details;