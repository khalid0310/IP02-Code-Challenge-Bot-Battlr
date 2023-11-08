import React, { useState, useEffect } from 'react';
import './App.css';
import BotCollection from './components/BotCollection';
import EnlistedBots from './components/EnlistedBots';

function App() {
  const [enlisted, setEnlisted] = useState([]);
  const [botsData, setBotsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then((response) => response.json())
      .then((data) => setBotsData(data))
      .catch((error) => console.error('Error fetching bot data:', error));
  }, []);

  const handleEnlist = (botId) => {
    if (!enlisted.includes(botId)) {
      setEnlisted([...enlisted, botId]);
    } else {
      setEnlisted(enlisted.filter((id) => id !== botId));
    }
  };

  return (
    <div className="App">
      <h1>Bot Battler</h1>
      <BotCollection bots={botsData} onEnlist={handleEnlist} enlisted={enlisted} />
      <EnlistedBots enlisted={enlisted} />
    </div>
  );
}

export default App;
