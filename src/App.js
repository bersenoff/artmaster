import React, { PureComponent } from 'react';
import Call from './Components/Call';
import Promo from './Components/Promo';
import 'antd/dist/antd.css';
import './app.css';

class App extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Call />
        <Promo />
        <div className='wrapper' style={{marginTop: '20px'}}>
          <div className='step-title'>1. Выберите вид стилизованного портрета</div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
