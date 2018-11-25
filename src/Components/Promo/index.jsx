import React, { PureComponent } from 'react';
import { Button, Icon } from 'antd';
import './index.css';

export default class Promo extends PureComponent {

  constructor() {
    super();
  }

  render() {
    return (
      <div className='promo'>
        <div className='wrapper'>
          <div className='promo-info' style={{textAlign: 'center'}}>
            <div className='company'>Студия портретов <br /> «Арт Мастер»</div>
            <div style={{marginTop: '30px'}}>Оригинальный подарок!</div>
            <div style={{marginTop: '30px'}}>
              <Button type='primary' size='large' style={{height: '50px'}}><Icon type="check-circle" theme="filled" /> Отправить заявку</Button>
            </div>
          </div>
          <div className='logo'><img src='/images/logo.jpg' alt='' /></div>
        </div>
        <div style={{clear: 'both'}} />
      </div>
    );
  }

}