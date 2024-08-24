import styles from "./Button.module.css";

const Buttons = ({ planet, setNumberPlanet }) => {
  const btnHandler = () => {
    setNumberPlanet(planet.id);
  };
  return (
    <button
      onClick={() => btnHandler()}
      className={styles.btn}
      data-planet-name={planet.namePlanet}
    >
      <p>{planet.namePlanet}</p>
      <img src={planet.srcImage} alt={planet.namePlanet} />
    </button>
  );
};

export default Buttons;
