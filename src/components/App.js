import React from 'react';
import Footer from './Footer';
import Home from './Home';
import SideBar from './SideBar';

class App extends React.Component {
  state = {
    marginLeft: "64px",
  }
  render() {
    const onChange = (updatedMargin) => {
      this.setState({ marginLeft: updatedMargin });
    }
    return (
      <div>
        <SideBar onChange={onChange} />
        <Home style={{ marginLeft: this.state.marginLeft }} />
        <Footer />
      </div>
    );
  }
}

export default App;

// App bar from here: https://reactjsexample.com/react-side-nav-component/