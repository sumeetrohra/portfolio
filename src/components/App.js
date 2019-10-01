/* eslint-disable react-hooks/exhaustive-deps */
import React, { lazy, Suspense, useEffect } from 'react';
import { Switch, Route, main } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchData } from '../actions';
import Footer from './Footer';
import Home from './pages/Home';
import SideBar from './SideBar';

const Projects = lazy(() => import("./pages/Projects"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Skills = lazy(() => import("./pages/Skills"));
const TicTacToe = lazy(() => import("./pages/TicTacToe"));
const Talks = lazy(() => import("./pages/Talks"));

function App({ fetchData, header }) {

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="parent" id="App">
      <div
        style={{
          overflow: 'hidden',
          backgroundColor: '#f8f9fa',
          borderBottom: '1px solid #212529',
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1000,
          height: '60px',
        }}
      >
        <SideBar
          pageWrapId={"page-wrap"}
          outerContainerId={"App"}
        />
        <h3 className="navbar-name">{header}</h3>
      </div>
      <main id="page-wrap">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={WaitingComponent(Projects)} />
          <Route path="/skills" exact component={WaitingComponent(Skills)} />
          <Route path="/blogs" exact component={WaitingComponent(Blogs)} />
          <Route path="/talks" exact component={WaitingComponent(Talks)} />
          <Route path="/play" exact component={WaitingComponent(TicTacToe)} />
          <Route path="*" exact component={Home} />
        </Switch>
      </main>
      <Footer />
    </div>
  );

}

function WaitingComponent(Component) {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}

const mapStateToProps = ({ header }) => {
  return { header };
}

export default connect(mapStateToProps, { fetchData })(App);

// App bar from here: https://reactjsexample.com/react-side-nav-component/