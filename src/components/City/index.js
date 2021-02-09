import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThermometerEmpty,
  faThermometerQuarter,
  faThermometerHalf,
  faThermometerThreeQuarters,
  faThermometerFull,
  faTint,
  faWind,
  faCloudShowersHeavy,
  faAngleDoubleDown,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";

const dateTime = (hour, date) => {
  return date + " " + hour + ":00";
};

const City = (props) => {
  return (
    <div className="city">
      <div className="cityname">
        <h2>{props.name}</h2>
      </div>
      {props.temperature > 35 && (
        <span className="very_hot">
          <FontAwesomeIcon icon={faThermometerFull} /> {props.temperature}°C
        </span>
      )}
      {props.temperature > 30 && props.temperature <= 35 && (
        <span className="hot">
          <FontAwesomeIcon icon={faThermometerFull} /> {props.temperature}°
        </span>
      )}
      {props.temperature > 25 && props.temperature <= 30 && (
        <span className="warm">
          <FontAwesomeIcon icon={faThermometerThreeQuarters} />{" "}
          {props.temperature}°C
        </span>
      )}
      {props.temperature > 20 && props.temperature <= 25 && (
        <span className="low_warm">
          <FontAwesomeIcon icon={faThermometerThreeQuarters} />{" "}
          {props.temperature}°C
        </span>
      )}
      {props.temperature > 15 && props.temperature <= 20 && (
        <span className="mild">
          <FontAwesomeIcon icon={faThermometerThreeQuarters} />{" "}
          {props.temperature}°C
        </span>
      )}
      {props.temperature > 10 && props.temperature <= 15 && (
        <span className="low_mild">
          <FontAwesomeIcon icon={faThermometerHalf} /> {props.temperature}°C
        </span>
      )}
      {props.temperature > 5 && props.temperature <= 10 && (
        <span className="cool">
          <FontAwesomeIcon icon={faThermometerHalf} /> {props.temperature}°C
        </span>
      )}
      {props.temperature > 0 && props.temperature <= 5 && (
        <span className="low_cool">
          <FontAwesomeIcon icon={faThermometerHalf} /> {props.temperature}°C
        </span>
      )}
      {props.temperature > -5 && props.temperature <= 0 && (
        <span className="cold">
          <FontAwesomeIcon icon={faThermometerQuarter} /> {props.temperature}°C
        </span>
      )}
      {props.temperature > -10 && props.temperature <= -5 && (
        <span className="low_cold">
          <FontAwesomeIcon icon={faThermometerQuarter} /> {props.temperature}°C
        </span>
      )}
      {props.temperature > -15 && props.temperature <= -10 && (
        <span className="freeze">
          <FontAwesomeIcon icon={faThermometerQuarter} /> {props.temperature}°C
        </span>
      )}
      {props.temperature > -20 && props.temperature <= -15 && (
        <span className="low_freeze">
          <FontAwesomeIcon icon={faThermometerEmpty} /> {props.temperature}°C
        </span>
      )}
      {props.temperature < -20 && (
        <span className="frost">
          <FontAwesomeIcon icon={faThermometerEmpty} /> {props.temperature}°C
        </span>
      )}
      <p>
        <FontAwesomeIcon icon={faTint} /> {props.humidity} %
      </p>
      <p>
        <FontAwesomeIcon icon={faAngleDoubleDown} /> {props.pressure} hPa
      </p>
      <p>
        <FontAwesomeIcon icon={faWind} /> {props.wind} m/s
      </p>
      {props.temperature >= 0 ? (
        <p className="rain">
          <FontAwesomeIcon icon={faCloudShowersHeavy} /> {props.prec} mm
        </p>
      ) : (
        <p className="snow">
          <FontAwesomeIcon icon={faSnowflake} /> {props.prec} cm
        </p>
      )}
      <h6>{dateTime(props.time, props.date)}</h6>
    </div>
  );
};

export default City;
