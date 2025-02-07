import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInfo, clearInfo } from './store/store';


function App() {

  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const result = useSelector((state) => state.result);
const loading = useSelector((state) => state.loading);
const error = useSelector((state) => state.error);

  const handleSearch = () => {
      if (query.trim()) {
          dispatch(fetchInfo(query));
      }
  };

  return (
    <div>
      {/* Header */}
      <nav className="navbar navbar-default" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className="navbar-brand">
              <a
                href="https://twitter.com/share"
                className="twitter-share-button"
                data-url="https://swapi.dev"
                data-text="swapi.dev - the Star Wars API"
                data-via="juriy"
                data-related="juriy"
              >
                Tweet
              </a>
            </div>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/documentation">Documentation</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <div className="container-fluid" style={{ marginTop: '60px' }}>
        <div className="row center yellow">
          <div className="jumbotron">
            <h1>SWAPI</h1>
            <p className="lead">The Star Wars API</p>
            <p className="lead">
              <a href="/about">(what happened to swapi.co?)</a>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6 center">
            <p>All the Star Wars data you've ever wanted:</p>
            <p>
              <b>Planets, Spaceships, Vehicles, People, Films and Species</b>
            </p>
            <p>From all <b>SEVEN</b> Star Wars films</p>
            <h4>Now with The Force Awakens data!</h4>
          </div>
          <div className="col-lg-3"></div>
        </div>

        <div className="row">
          <hr />
          <div className="col-sm-2 col-lg-2 col-md-2"></div>
          <div className="col-lg-8 col-md-8 col-sm-8">
            <h1 className="center">Try it now!</h1>
            <div className="input-group">
              <span className="input-group-addon">https://swapi.dev/api/</span>
              <input
                id="interactive"
                type="text"
                className="form-control"
                placeholder="people/1/"
                value={query} 
                onChange={(e) => setQuery(e.target.value)}
              />
              <span className="input-group-btn">
                <button onClick={handleSearch} className="btn btn-primary">request</button>
              </span>
            </div>
            <small>
              <i>Need a hint? try </i>
              <a href="#0">
                <i>people/1/</i>
              </a>
              <i> or </i>
              <a href="#0">
                <i>planets/3/</i>
              </a>
              <i> or </i>
              <a href="#0">
                <i>starships/9/</i>
              </a>
            </small>
            <p className="lead pad_top">Result:</p>
            <button onClick={() => dispatch(clearInfo())}>Clear</button>
            <div className="well">
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {result && <pre id="interactive_output" className="pre-scrollable">{JSON.stringify(result, null, 2)}</pre>}
            </div>
          </div>
          <div className="col-sm-2 col-lg-2 col-md-2"></div>
        </div>
      </div>
      <div className="row pad_bot">
        <div className="col-sm-1 col-lg-1 col-md-1">
        </div>
        <div className="col-sm-3 col-lg-3 col-md-3">
          <h4 className="center">What is this?</h4>
          <p>The Star Wars API, or "swapi" (Swah-pee) is the world's first quantified and programmatically-accessible data source for all the data from the Star Wars canon universe!</p>
          <p>We've taken all the rich contextual stuff from the universe and formatted into something easier to consume with software. Then we went and stuck an API on the front so you can access it all!</p>
        </div>
        <div className="col-sm-4 col-lg-4 col-md-4">
          <h4 className="center">How can I use it?</h4>
          <p>All the data is accessible through our HTTP web API. Consult our <a href="/documentation">documentation</a> if you'd like to get started.</p>
          <p>Helper libraries for popular programming languages are also provided so you can consume swapi in your favourite programming language, in a style that suits you.</p>
        </div>
        <div className="col-sm-3 col-lg-3 col-md-3">
          <h4 className="center">What happened with old swapi.co?</h4>
          <p>swapi.co is not supported and maintained anymore. But since so many projects and tutorials used it as their educational
            playground, this is an "unofficial" branch.</p>
          <p>This project is open source and you can contribute <a href="https://github.com/Juriy/swapi">on GitHub</a>.</p>
        </div>
        <div className="col-sm-1 col-lg-1 col-md-1">
        </div>
      </div>
      <hr />

      {/* Footer */}
      <footer className="row">
        <div className="col-lg-12 footer">
          Created by Paul Hallett Maintained by Juriy Bura &copy; 2025
          <span className="pull-right">
            <a
              href="//twitter.com/juriy"
              className="twitter-follow-button"
              data-show-count="false"
              data-show-screen-name="false"
              data-dnt="true"
            >
              Follow me on Twitter
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
