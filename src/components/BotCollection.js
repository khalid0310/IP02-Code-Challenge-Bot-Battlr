import React from 'react';
import Bot from './Bot';

const BotCollection = ({ bots, onEnlist, enlisted }) => {
  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <Bot
          key={bot.id}
          bot={bot}
          onEnlist={onEnlist}
          isEnlisted={enlisted.includes(bot.id)}
        />
      ))}
    </div>
  );
};

export default BotCollection;
