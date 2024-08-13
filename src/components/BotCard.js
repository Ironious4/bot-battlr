import React from "react";

//Object mapping bot types to corresponding icon classes
const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, onClick, onBotDelete}) {

//Event handler for the delete request
const handleDelete = async (e) => {
  e.stopPropagation();   // Prevents triggering the card's onClick event when the delete button is clicked
  onBotDelete(bot);

 };

 return (
    //Styling for the BotCollection
    <div className="ui column">
      <div
        className="ui card"
        key={bot.id}
        onClick={onClick} //Handles adding and removing bot from the army when bot is clicked
      >
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                 onClick={handleDelete} //Deletes bots from the BotCollection when clicked
          
               
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
 export default BotCard;
