import React, { useState, useEffect } from "react";
import './App.css';
import Search from '../components/Search'
import Dock from '../components/Dock'
import Polmap from '../components/Polmap'

const App = () => {

  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [draft, setDraft] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [mapView, setMapView] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch("https://danepubliczne.imgw.pl/api/data/synop");
      const json = await response.json();
      setData(json);
      setLoaded(true);
    }
    catch(err) {
      return("Błąd pobierania danych:" + err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFiltered(
      data.filter((dat) => {
        return dat.stacja.toLowerCase().includes(draft.trim().toLowerCase());
      })
    );
  }, [data, draft]);

  const update = (event) => {
    setDraft(event.target.value);
  };

  const submit = (event) => {
    setDraft("");
  };

  const switchToMap = () => {
    setMapView(!mapView);
  }

  return (
    <>
      <Search draft={draft} onChange={update} onSubmit={submit} toggleView = {switchToMap}/>
      {!mapView
        ? (
          <div className="mapbox">
            <Polmap data={data}/>
          </div> )
        : (
          <div className="container">
            {!loaded && <div className="loading">Wczytywanie...</div>}
            <Dock data={filtered} />
          </div>)
      }
    </>
  );
};

export default App;
