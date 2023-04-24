import elipse from './images/icon-ellipsis.svg';
import './Workcard.scss';

function Workcard(props) {
  return (
    <>
        <div className='info-title'>
            <p>{props.cname}</p>
            <img src={elipse} alt=''/>
          </div>
          <div className='info-hrs'>
            <strong>{props.crt}hrs</strong>
            <p>Last {props.tint} <span> - {props.prv}hrs</span></p>
        </div>
    </>     
  );
}

export default Workcard;