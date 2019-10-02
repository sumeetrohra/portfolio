/* eslint-disable react-hooks/exhaustive-deps */
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchData } from '../actions';
import Footer from './Footer';
import Home from './pages/Home';
import Header from './Header';

const Projects = lazy(() => import("./pages/Projects"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Skills = lazy(() => import("./pages/Skills"));
const TicTacToe = lazy(() => import("./pages/TicTacToe"));
const Talks = lazy(() => import("./pages/Talks"));

function App({ fetchData }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  const closeExpanded = () => setExpanded(false);

  useEffect(() => {
    fetchData();
  }, []);

  const routes = [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/projects',
      component: Projects,
    },
    {
      path: '/skills',
      component: Skills,
    },
    {
      path: '/blogs',
      component: Blogs,
    },
    {
      path: '/talks',
      component: Talks,
    },
    {
      path: '/play',
      component: TicTacToe,
    },
  ];

  return (
    <div className="parent">
      <Router>
        <Header toggleExpanded={toggleExpanded} expanded={expanded} closeExpanded={closeExpanded} />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {routes.map(route => (
              <Route
                exact
                path={route.path}
                render={(props) => <route.component closeExpanded={closeExpanded} {...props} />}
              />
            ))}
            <Route path="*" exact component={Home} />
          </Switch>
        </Suspense>
        <Footer closeExpanded={closeExpanded} />
      </Router>
    </div>
  );

}

// TODO: change the fallback component to a loader

export default connect(null, { fetchData })(App);
