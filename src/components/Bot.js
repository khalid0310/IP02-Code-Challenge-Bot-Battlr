import React from 'react';

const Bot = ({ bot, onEnlist, isEnlisted }) => {
  return (
    <div className={`bot ${isEnlisted ? 'enlisted' : ''}`}>
      {bot && bot.avatar_url ? (
        <img src={bot.avatar_url} alt={bot.name} />
      ) : (
        <div className="default-avatar">Default Avatar</div>
      )}
      {bot && bot.name && <h3>{bot.name}</h3>}
      {bot && bot.health && <p>Health: {bot.health}</p>}
      {bot && bot.damage && <p>Damage: {bot.damage}</p>}
      {bot && bot.armor && <p>Armor: {bot.armor}</p>}
      <button onClick={() => onEnlist(bot.id)}>
        {isEnlisted ? 'Enlisted' : 'Enlist'}
      </button>
    </div>
  );
};

export default Bot;
