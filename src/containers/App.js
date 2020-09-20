import React, { useState, useEffect } from "react";
import '../index.css';
import Search from '../components/Search'
import Dock from '../components/Dock'

const App = () => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [draft, setDraft] = useState('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("https://danepubliczne.imgw.pl/api/data/synop")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setFiltered(
      data.filter((dat) => {
        return dat.stacja.toLowerCase().includes(draft.toLowerCase());
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
    <div className="container">
      <h2>Aktualne warunki meteorologiczne</h2>
      <Search draft={draft} onChange={update} onSubmit={submit} />
      {!loaded && <p>Wczytywanie...</p>}
      <Dock data={filtered} />
    </div>
  );
};

export default App;
