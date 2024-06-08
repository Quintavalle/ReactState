import React from 'react';
import Hello from './Hello';
import Welcome from './Welcome';
import AlertClock from './AlertClock';
import Counter from './Counter';

const App = () => {
  const handleButtonClick = () => {
    const currentTime = new Date().toLocaleTimeString();
    alert(`Current time is: ${currentTime}`);
  };

  return (
    <div>
      <Hello />
      <Welcome name="John" age={30} />
      <AlertClock onClick={handleButtonClick} />
      <Counter initialValue={0} decrementAmount={1} />
    </div>
  );
};

export default App;

