import dp from './images/image-jeremy.png';
import './App.scss';
import Workcard from './Workcard';
import {data} from './data';
import { useState } from 'react';

//use effect when frame

function App() {
  const [tframe, setTframe] = useState("Week");
  const [newdata, setNewdata] = useState([
    {current: 32, previous: 36},
    {current: 10, previous: 8},
    {current: 4, previous: 7},
    {current: 4, previous: 5},
    {current: 5, previous: 10}, 
    {current: 2, previous: 2}
  ]);

  let data2 =[] ;
  const handleDaily = ()=>{
    const frame = 'Day';
    setTframe(frame);
    data2 = data.map(data => data.timeframes.daily); 
    setNewdata(data2);
  };
  const handleWeekly = ()=>{
    const frame = 'Week';
    setTframe(frame);
    data2 = data.map(data => data.timeframes.weekly);
    setNewdata(data2); 
  };
  const handleMonthly = ()=>{
    const frame = 'Month';
    setTframe(frame);
    data2 = data.map(data => data.timeframes.monthly); 
    setNewdata(data2);
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
          <Workcard crt={newdata[0].current} prv={newdata[0].previous} cname={"Work"} tint={tframe}/>
        </div>
      </section>
      <section className='tt-play tt-sec'>
        <div className='tt-sec-info'>
          <Workcard crt={newdata[1].current} prv={newdata[1].previous} cname={"Play"} tint={tframe}/>
        </div>
      </section>
      <section className='tt-study tt-sec'>
        <div className='tt-sec-info'>
          <Workcard crt={newdata[2].current} prv={newdata[2].previous} cname={"Study"} tint={tframe}/>
        </div>
      </section>
      <section className='tt-exercise tt-sec'>
        <div className='tt-sec-info'>
          <Workcard crt={newdata[3].current} prv={newdata[3].previous} cname={"Exercise"} tint={tframe}/>
        </div>
      </section>
      <section className='tt-social tt-sec'>
        <div className='tt-sec-info'>
          <Workcard crt={newdata[4].current} prv={newdata[4].previous} cname={"Social"} tint={tframe}/>
        </div>
      </section>
      <section className='tt-selfcare tt-sec'>
        <div className='tt-sec-info'>
          <Workcard crt={newdata[5].current} prv={newdata[5].previous} cname={"Self Care"} tint={tframe}/>
        </div>
      </section>
    </article>
  );
}

export default App;