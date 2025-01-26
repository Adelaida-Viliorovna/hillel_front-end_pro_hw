import React from 'react';
import './App.css';

function App() {
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
              />
              <span className="input-group-btn">
                <button className="btn btn-primary">request</button>
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
            <div className="well">
              <pre id="interactive_output" className="pre-scrollable">
                {JSON.stringify({
                  name: "Luke Skywalker",
                  height: "172",
                  mass: "77",
                  hair_color: "blond",
                  skin_color: "fair",
                  eye_color: "blue",
                  birth_year: "19BBY",
                  gender: "male",
                  homeworld: "https://swapi.dev/api/planets/1/",
                  films: [
                    "https://swapi.dev/api/films/2/",
                    "https://swapi.dev/api/films/6/",
                    "https://swapi.dev/api/films/3/",
                    "https://swapi.dev/api/films/1/",
                    "https://swapi.dev/api/films/7/",
                  ],
                  species: ["https://swapi.dev/api/species/1/"],
                  vehicles: [
                    "https://swapi.dev/api/vehicles/14/",
                    "https://swapi.dev/api/vehicles/30/",
                  ],
                  starships: [
                    "https://swapi.dev/api/starships/12/",
                    "https://swapi.dev/api/starships/22/",
                  ],
                  created: "2014-12-09T13:50:51.644000Z",
                  edited: "2014-12-20T21:17:56.891000Z",
                  url: "https://swapi.dev/api/people/1/",
                }, null, 2)}
              </pre>
            </div>
          </div>
          <div className="col-sm-2 col-lg-2 col-md-2"></div>
        </div>
      </div>
      <div class="row pad_bot">
        <div class="col-sm-1 col-lg-1 col-md-1">
        </div>
        <div class="col-sm-3 col-lg-3 col-md-3">
          <h4 class="center">What is this?</h4>
          <p>The Star Wars API, or "swapi" (Swah-pee) is the world's first quantified and programmatically-accessible data source for all the data from the Star Wars canon universe!</p>
          <p>We've taken all the rich contextual stuff from the universe and formatted into something easier to consume with software. Then we went and stuck an API on the front so you can access it all!</p>
        </div>
        <div class="col-sm-4 col-lg-4 col-md-4">
          <h4 class="center">How can I use it?</h4>
          <p>All the data is accessible through our HTTP web API. Consult our <a href="/documentation">documentation</a> if you'd like to get started.</p>
          <p>Helper libraries for popular programming languages are also provided so you can consume swapi in your favourite programming language, in a style that suits you.</p>
        </div>
        <div class="col-sm-3 col-lg-3 col-md-3">
          <h4 class="center">What happened with old swapi.co?</h4>
          <p>swapi.co is not supported and maintained anymore. But since so many projects and tutorials used it as their educational
            playground, this is an "unofficial" branch.</p>
          <p>This project is open source and you can contribute <a href="https://github.com/Juriy/swapi">on GitHub</a>.</p>
        </div>
        <div class="col-sm-1 col-lg-1 col-md-1">
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
