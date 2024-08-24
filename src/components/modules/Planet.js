const Planet = ({ planetStyles, planet, numberPlanet }) => {
  return (
    <div className={planetStyles[planet.classWrapper]}>
      <div
        className={`${planetStyles[planet.classPlanet]} ${
          planet.id === numberPlanet ? planetStyles.selection : ""
        }`}
      ></div>
    </div>
  );
};
export default Planet;
