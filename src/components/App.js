import React from 'react';
import Footer from './Footer';
import Home from './Home';
import SideBar from './SideBar';

class App extends React.Component {
  render() {
    return (
      <div className="parent">
        <SideBar />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;

// App bar from here: https://reactjsexample.com/react-side-nav-component/