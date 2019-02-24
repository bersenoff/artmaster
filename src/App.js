import React, { PureComponent } from 'react';
import Call from './Components/Call';
import Promo from './Components/Promo';
import Order from './Components/Order';
import Footer from './Components/Footer';
import 'antd/dist/antd.css';
import './app.css';

class App extends PureComponent {
  render() {
    return (
      <React.Fragment>
        {/* <Call /> */}
        <Promo />
        <Order />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
