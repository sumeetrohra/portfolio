import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Footer from './Footer';
import Home from './pages/Home';
import SideBar from './SideBar';

const Projects = lazy(() => import("./pages/Projects"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Skills = lazy(() => import("./pages/Skills"));
const TicTacToe = lazy(() => import("./pages/TicTacToe"));
const Talks = lazy(() => import("./pages/Talks"));

class App extends React.Component {
  render() {
    return (
      <div className="parent">
        <Router>
          <SideBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/projects" exact component={WaitingComponent(Projects)} />
            <Route path="/skills" exact component={WaitingComponent(Skills)} />
            <Route path="/blogs" exact component={WaitingComponent(Blogs)} />
            <Route path="/talks" exact component={WaitingComponent(Talks)} />
            <Route path="/play" exact component={WaitingComponent(TicTacToe)} />
            <Route path="*" exact component={Home} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

function WaitingComponent(Component) {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}

export default App;

// App bar from here: https://reactjsexample.com/react-side-nav-component/