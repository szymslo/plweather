import React, { useState, useEffect } from "react";
import { useMediaQuery } from 'react-responsive';
import Search from '../components/Search';
import Dock from '../components/Dock';
import Polmap from '../components/Polmap';
import './App.scss';

const App = () => {

  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [draft, setDraft] = useState('');
  const [loaded, setLoaded] = useState(false);
  const mapView = useMediaQuery({query: '(min-width: 800px)'});

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

  return (
    <>
      {mapView
        ? (
          <div className="mapbox">
            <Polmap data={data}/>
          </div> )
        : (
          <>
            <Search draft={draft} onChange={update} onSubmit={submit}/>
            <div className="container">
              {!loaded && <div className="loading">Wczytywanie...</div>}
              <Dock data={filtered} />
            </div>
          </>
          )
      }
    </>
  );
};

export default App;
