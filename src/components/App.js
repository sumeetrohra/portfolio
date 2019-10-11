/* eslint-disable react-hooks/exhaustive-deps */
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchData } from '../actions';
import Footer from './Footer';
import Home from './pages/Home';
import Header from './Header';
import SideBar from './SideBar';

const Projects = lazy(() => import("./pages/Projects"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Skills = lazy(() => import("./pages/Skills"));
const TicTacToe = lazy(() => import("./pages/TicTacToe"));
const Talks = lazy(() => import("./pages/Talks"));

function App({ fetchData }) {
  const [expanded, setExpanded] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const toggleExpanded = () => setExpanded(!expanded);

  const closeExpanded = () => setExpanded(false);

  useEffect(() => {
    fetchData();
  }, []);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

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
        {
          width > 980 ?
            (<SideBar
              toggleExpanded={toggleExpanded}
              expanded={expanded}
              closeExpanded={closeExpanded}
            />)
            :
            (<Header
              toggleExpanded={toggleExpanded}
              expanded={expanded}
              closeExpanded={closeExpanded}
            />)
        }
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {routes.map(route => (
              <Route
                key={route.path}
                exact
                path={route.path}
                render={(props) => <route.component
                  closeExpanded={closeExpanded}
                  width={width}
                  {...props} />}
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
