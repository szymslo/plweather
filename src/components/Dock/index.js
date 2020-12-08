import React from "react";
import "./index.css";
import City from "../City";

const Dock = (props) => {
  let data = props.data.map((dat, i) => {
    return (
      <City
        key={i}
        name={dat.stacja}
        temperature={dat.temperatura}
        humidity={dat.wilgotnosc_wzgledna}
        pressure={dat.cisnienie}
        wind={dat.predkosc_wiatru}
        prec={dat.suma_opadu}
        time={dat.godzina_pomiaru}
        date={dat.data_pomiaru}
      />
    );
  });

  return <div className="dock">{data}</div>;
};

export default Dock;
