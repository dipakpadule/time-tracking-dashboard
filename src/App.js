import dp from './images/image-jeremy.png';
import elipsis from './images/icon-ellipsis.svg';
import './App.scss';
import Workcard from './Workcard';

function App() {
  
  return (
    <article className='time-tracker'>
      <section className='tt-profile tt-prof'>
          <div className='profile-top'>
            <img src={dp} alt=''/>
            <div className='profile-name'>
              <p>Report for</p>
              <strong>Jeremy Robson</strong>
            </div>
          </div>
          <div className='profile-bottom'>
            <p>Daily</p>
            <p>Weekly</p>
            <p>Monthly</p>
          </div>
      </section>
      <section className='tt-work tt-sec'>
        <div className='tt-sec-info'>
        <Workcard imgsrc={elipsis} daily={32} prv={36}/>
        </div>
      </section>
      <section className='tt-play tt-sec'>
        <div className='tt-sec-info'>
          <Workcard daily={10} prv={8}/>
        </div>
      </section>
      <section className='tt-study tt-sec'>
        <div className='tt-sec-info'>
          <Workcard daily={4} prv={7}/>
        </div>
      </section>
      <section className='tt-exercise tt-sec'>
        <div className='tt-sec-info'>
          <Workcard daily={4} prv={5}/>
        </div>
      </section>
      <section className='tt-social tt-sec'>
        <div className='tt-sec-info'>
          <Workcard daily={5} prv={10}/>
        </div>
      </section>
      <section className='tt-selfcare tt-sec'>
        <div className='tt-sec-info'>
          <Workcard daily={2} prv={2}/>
        </div>
      </section>
    </article>
  );
}

export default App;