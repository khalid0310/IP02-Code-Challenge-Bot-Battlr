import React from 'react';
import Bot from './Bot';

const EnlistedBots = ({ enlisted }) => {
  return (
    <div>
      <h2>Your Enlisted Bots</h2>
      {enlisted.map((botId) => (
        <Bot key={botId} botId={botId} enlisted={enlisted} />
      ))}
    </div>
  );
};

export default EnlistedBots;
