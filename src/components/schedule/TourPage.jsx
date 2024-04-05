import React from 'react';
import TourSchedule from './TourSchedule';

const TourPage = () => {
  const schedule = [
    { time: '9:00 AM', activity: 'Breakfast', location: 'Hotel Restaurant' },
    { time: '10:00 AM', activity: 'Guided Tour', location: 'City Center' },
    { time: '1:00 PM', activity: 'Lunch', location: 'Local Eatery' },
    { time: '3:00 PM', activity: 'Museum Visit', location: 'City Museum' },
    { time: '7:00 PM', activity: 'Dinner', location: 'Fancy Restaurant' },
  ];

  return (
    <div>
      <h1 style={{marginBottom: '20px'}}>Lịch trình</h1>
      <TourSchedule schedule={schedule} />
    </div>
  );
};

export default TourPage;