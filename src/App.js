import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = () => {
  const state = {
    additionalPrice: 0,
    car: {
      price: 360420,
      name: 'Lightning McQueen',
      image:
        'https://i.pinimg.com/originals/ab/e8/88/abe888fb17f610d683c940ed14fb1105.jpg',
      features: []
    },
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

export default App;
