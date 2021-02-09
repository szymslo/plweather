import City from "../City";
import "./index.css";

const Dock = (props) => {
  return (
    <div className="dock">
      {props.data.map((dat) => (
        <City
          key={dat.id_stacji}
          name={dat.stacja}
          temperature={dat.temperatura}
          humidity={dat.wilgotnosc_wzgledna}
          pressure={dat.cisnienie}
          wind={dat.predkosc_wiatru}
          prec={dat.suma_opadu}
          time={dat.godzina_pomiaru}
          date={dat.data_pomiaru}
        />
      ))}
    </div>
  );
};

export default Dock;
