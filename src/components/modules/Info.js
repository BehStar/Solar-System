import React from "react";

const Info = ({ planet, numberPlanet }) => {
  return (
    <div>
      {planet.id === numberPlanet && (
        <div className='info'>
          <p>سرعت مدار:</p>
          <p className="number-info">
            <em>{planet?.info.toLocaleString()} </em><span>km/h</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Info;
