import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({bots, onRemove, onBotDelete}) {
  
  return (
    //Styling for your bot army
    <div className="ui segment inverted olive bot-army">
      <h1>Your Bot Army</h1>
      <div className="ui five column grid">
        <div className="row bot-army-row">
        {bots.map((bot) => (
        <BotCard 
        key={bot.id} 
        bot={bot} 
        onClick={() => onRemove(bot)} //Pass the prop to remove bot from the army
        onBotDelete={onBotDelete} //Pass the prop to delete bot from the army
          />
      ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
