
import { useCallback, useEffect, useState } from 'react';
import './App.css';

function App() {

  const [activity, setActivity] = useState('');

  const getActivity =  useCallback(async () => {
      const response = await fetch('https://bored.api.lewagon.com/api/activity');
      const data = await response.json();
      setActivity(data) 
  }, [])
  
  useEffect(()=> {
    getActivity()
  }, [getActivity])
  


  return (
    <div className="App">
      <div>
        <p>Idea №: {activity.key}</p>
        <p>{activity.activity}</p>
        <p>Type: {activity.type}</p>
        <p>Participants: {activity.participants}</p>
      </div>

      <div>
        <button onClick={getActivity}>click</button>
      </div>
      


    </div>
  );
}

export default App;
