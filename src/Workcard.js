import elipse from './images/icon-ellipsis.svg';
import './Workcard.scss';

function Workcard(props) {
  return (
    <>
        <div className='info-title'>
            <p>Work</p>
            <img src={elipse} alt=''/>
          </div>
          <div className='info-hrs'>
            <strong>{props.daily}hrs</strong>
            <p>Last Week <span> - {props.prv}hrs</span></p>
        </div>
    </>     
  );
}

export default Workcard;

// Work
// 5hrs <!-- daily -->
// Previous - 7hrs <!-- daily -->
// 32hrs <!-- weekly -->
// Previous - 36hrs <!-- weekly -->
// 103hrs <!-- monthly -->
// Previous - 128hrs <!-- monthly -->
