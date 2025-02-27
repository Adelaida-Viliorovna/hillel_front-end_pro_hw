import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInfoStart, clearInfo } from './store/store';

function Swapi() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const result = useSelector((state) => state.api.result);
  const loading = useSelector((state) => state.api.loading);
  const error = useSelector((state) => state.api.error);

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(fetchInfoStart(query));
    }
  };

  return (
    <div>
      <h1>SWAPI</h1>
      <p>The Star Wars API</p>

      <h2>Try it now!</h2>
      <div>
        <input
          type="text"
          placeholder="people/1/"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Request</button>
      </div>

      <small>
        <i>Need a hint? try </i>
        <a href="#0"><i>people/1/</i></a>
        <i> or </i>
        <a href="#0"><i>planets/3/</i></a>
        <i> or </i>
        <a href="#0"><i>starships/9/</i></a>
      </small>

      <p className="lead">Result:</p>
      <button onClick={() => dispatch(clearInfo())}>Clear</button>

      <div>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
      </div>
    </div>
  );
}

export default Swapi;
