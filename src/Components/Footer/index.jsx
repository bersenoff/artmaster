import React, { PureComponent } from 'react';
import './index.css';

export default class Order extends PureComponent {

  constructor() {
    super();
  }

  render() {
    return (
      <div className='wrapper'>
        <footer className='footer'>&copy; 2018 <a href='http://artmaster38.ru'>www.artmaster38.ru</a> </footer>
      </div>  
    );
  }

}