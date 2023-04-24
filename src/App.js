import dp from './images/image-jeremy.png';
import './App.scss';
import Workcard from './Workcard';
import {data} from './data';
import { useState } from 'react';

function App() {
  const [tframe, setTframe] = useState("Week");
  const [newdata, setNewdata] = useState([]);

  const handleDaily = ()=>{
    setTframe("Day");
    setNewdata(data.map(data => data.timeframes.daily));
    console.log(newdata);
  };
  const handleWeekly = ()=>{
    setTframe("Week");
    setNewdata(data.map(data => data.timeframes.weekly));
    console.log(newdata);
  };
  const handleMonthly = ()=>{
    setTframe("Month");
    setNewdata(data.map(data => data.timeframes.monthly));
    console.log(newdata);
  };

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
            <p onClick={handleDaily}>Daily</p>
            <p onClick={handleWeekly}>Weekly</p>
            <p onClick={handleMonthly}>Monthly</p>
          </div>
      </section>
      <section className='tt-work tt-sec'>
        <div className='tt-sec-info'>
          <Workcard crt={32} prv={36} cname={"Work"} tint={tframe}/>
        </div>
      </section>
      <section className='tt-play tt-sec'>
        <div className='tt-sec-info'>
          <Workcard crt={10} prv={8} cname={"Play"} tint={tframe}/>
        </div>
      </section>
      <section className='tt-study tt-sec'>
        <div className='tt-sec-info'>
          <Workcard crt={4} prv={7} cname={"Study"} tint={tframe}/>
        </div>
      </section>
      <section className='tt-exercise tt-sec'>
        <div className='tt-sec-info'>
          <Workcard crt={4} prv={5} cname={"Exercise"} tint={tframe}/>
        </div>
      </section>
      <section className='tt-social tt-sec'>
        <div className='tt-sec-info'>
          <Workcard crt={5} prv={10} cname={"Social"} tint={tframe}/>
        </div>
      </section>
      <section className='tt-selfcare tt-sec'>
        <div className='tt-sec-info'>
          <Workcard crt={2} prv={2} cname={"Self Care"} tint={tframe}/>
        </div>
      </section>
    </article>
  );
}

export default App;